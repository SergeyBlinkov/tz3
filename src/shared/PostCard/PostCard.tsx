import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./PostCard.css";
import { TPostCard } from "./PostCardType";
import emptyCardPicture from "../../assets/emptyCardImg.svg";
import { ToCapitalLetter as TCL } from "../HelperFunctions/ToCapitalLetter";
import PostRequest from "../../query/PostRequest";
import { TGetComments } from "../../query/QueryTypes";
import SpinnerLoader from "../SpinnerLoader/SpinnerLoader";
import { useNavigate } from "react-router-dom";
type TPostCardComments = {
  comments: TGetComments[];
  isLoading: boolean;
  errors: null | string;
  show: boolean;
  isDisabled: boolean;
};
const initComments = {
  comments: [],
  isLoading: false,
  errors: null,
  show: false,
  isDisabled: false,
};
const PostCard = (credentials: TPostCard) => {
  const isRef = credentials.isLastElementRef
    ? credentials.isLastElementRef
    : null;
  const navigate = useNavigate();
  const [showComments, setShowComments] =
    useState<TPostCardComments>(initComments);
  const handleClickUser = (id: number) => {
    return navigate(`/user-homepage?userId=${id}`);
  };
  const handleClickComments = async () => {
    if (showComments.comments.length > 0) {
      return setShowComments((prev) => ({ ...prev, show: !prev.show }));
    }
    setShowComments((prev) => ({ ...prev, isLoading: true }));
    setTimeout(async () => {
      await PostRequest.getComments(credentials.id)
        .then((comments) => {
          if (comments.data.length === 0) {
            return setShowComments((prev) => ({
              ...prev,
              isLoading: false,
              isDisabled: true,
              comments: [],
            }));
          }
          return setShowComments((prev) => ({
            ...prev,
            comments: comments.data,
            isLoading: false,
            errors: null,
            show: true,
          }));
        })
        .catch((e) =>
          setShowComments((prev) => ({
            ...prev,
            isLoading: false,
            comments: [],
            errors: e.message,
            show: false,
          }))
        );
    }, 1000);
  };
  return (
    <div className={"PostWrapper"} ref={isRef}>
      <article className={"PostCard"}>
        <img
          src={emptyCardPicture}
          alt={"user"}
          onClick={() => handleClickUser(credentials.id)}
        />
        <div className={"PostCard_description"}>
          <h4>{TCL(credentials.title)}</h4>
          <p>{TCL(credentials.text)}</p>
        </div>
        <Button
          disabled={showComments.isDisabled}
          variant={"secondary"}
          onClick={handleClickComments}
        >
          {showComments.isDisabled ? "Комментариев нет" : "Комментарии к посту"}
        </Button>
      </article>
      <SpinnerLoader show={showComments.isLoading} />
      {showComments.show &&
        showComments.comments.map((comment) => (
          <PostCard
            key={comment.id}
            id={comment.id}
            title={comment.email}
            text={comment.body}
          />
        ))}
    </div>
  );
};

export default PostCard;
