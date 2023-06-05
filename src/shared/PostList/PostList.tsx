import React, { useCallback, useRef } from "react";
import { TPostList } from "./PostListTypes";
import PostCard from "../PostCard/PostCard";
import "./PostList.css";
import SpinnerLoader from "../SpinnerLoader/SpinnerLoader";
import { useAppSelector } from "../../redux/ReduxStore";

const PostList = ({ posts, cb }: TPostList) => {
  const { isLoading, isNoMorePosts } = useAppSelector(
    (state) => state.PostList
  );
  const lastElement = useRef<IntersectionObserver>();
  const lastElementCallback = useCallback(
    (el: HTMLDivElement | null) => {
      if (isLoading) return;
      if (lastElement.current) {
        lastElement.current?.disconnect();
      }
      lastElement.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && !isNoMorePosts) {
          cb?.apply(null);
        }
      });
      if (el) lastElement.current.observe(el);
    },
    [isLoading, isNoMorePosts, cb]
  );

  return (
    <div className={"PostList"}>
      <div className={"PostList-list"}>
        {posts?.map((credentials) => {
          if (credentials.id === posts?.length - 5) {
            return (
              <PostCard
                id={credentials.id}
                title={credentials.title}
                text={credentials.body}
                key={credentials.id}
                isLastElementRef={lastElementCallback}
              />
            );
          } else
            return (
              <PostCard
                id={credentials.id}
                title={credentials.title}
                text={credentials.body}
                key={credentials.id}
              />
            );
        })}
      </div>
      <SpinnerLoader show={isLoading} />
    </div>
  );
};

export default React.memo(PostList);
