import React, { useEffect, useRef, useState } from "react";
import PostRequest from "../../query/PostRequest";
import MenuBar from "../../features/MenuBar/MenuBar";
import { TGetUser } from "../../query/QueryTypes";
import { Button } from "react-bootstrap";
import userIcon from "../../assets/userIcon.png";
import "./UserHomepage.css";
import SpinnerLoader from "../../shared/SpinnerLoader/SpinnerLoader";
import { TPostListReducer } from "../../redux/RPostList/TPostList";
import PostCard from "../../shared/PostCard/PostCard";
import Header from "../../features/Header/Header";
import { AxiosError } from "axios";
type TUserData = {
  user: TGetUser | null;
  errors: null | string;
  isLoading: boolean;
};

const initialUserData = {
  user: null,
  errors: null,
  isLoading: true,
};

const initialUserPosts = {
  posts: [],
  errors: null,
  isLoading: false,
};

const UserHomepage = () => {
  const [userData, setUserData] = useState<TUserData>(initialUserData);
  const [userPosts, setUsersPosts] =
    useState<Omit<TPostListReducer, "sortingArray" | "isNoMorePosts">>(
      initialUserPosts
    );
  const id = useRef(window.location.search.match(/\d+/));
  const handleClickPosts = async () => {
    setUsersPosts((prev) => ({ ...prev, isLoading: true }));

    setTimeout(async () => {
      if (!id.current) {
        setUsersPosts((prev) => ({
          ...prev,
          isLoading: false,
          errors: "Ошибка:Не указан ID",
        }));
        return;
      }
      await PostRequest.getUserPosts(+id.current)
        .then(({ data }) => {
          if (data.length === 0) {
            throw Object.assign(new Error(), {
              message: "У пользователя нет постов",
            });
          } else
            setUsersPosts((prev) => ({
              ...prev,
              posts: data,
              isLoading: false,
              errors: null,
            }));
        })
        .catch((e: AxiosError) => {
          console.log(e);
          setUsersPosts((prev) => ({
            ...prev,
            isLoading: false,
            errors: e.message,
            posts: [],
          }));
        });
    }, 1000);
  };
  useEffect(() => {
    setUserData((prev) => ({ ...prev, isLoading: true }));
    setTimeout(async () => {
      if (!id.current) {
        setUserData((prev) => ({
          ...prev,
          isLoading: false,
          errors: "Ошибка:Не указан ID",
        }));
        return;
      }
      await PostRequest.getUser(+id.current)
        .then(({ data }) =>
          setUserData((prev) => ({
            ...prev,
            user: data,
            errors: null,
            isLoading: false,
          }))
        )
        .catch((e: AxiosError) =>
          setUserData((prev) => ({
            ...prev,
            user: null,
            errors: e.message,
            isLoading: false,
          }))
        );
    }, 1000);
  }, []);
  return (
    <div className={"UserHomepage"}>
      <Header
        title={"Личный кабинет "}
        hr={`/user-homepage${window.location}`}
      />
      <MenuBar />
      <SpinnerLoader show={userData.isLoading} />
      {!userData.isLoading &&
        (userData.errors ? (
          <span>{userData.errors}</span>
        ) : (
          <section className={"UserHomepage-block"}>
            <section className={"UserHomepage-block_info"}>
              <h4>Информация о пользователе</h4>
              <img src={userIcon} alt={"userIcon"} width={200} height={200} />
              <ul>
                <li>
                  <h6>Name:</h6>
                  <p>{userData.user?.name}</p>
                </li>
                <li>
                  <h6>Email:</h6>
                  <p>{userData.user?.email}</p>
                </li>
                <li>
                  <h6>Phone:</h6>
                  <p>{userData.user?.phone}</p>
                </li>
              </ul>
            </section>
            <Button
              onClick={() => {
                window.history.back();
              }}
            >
              Назад
            </Button>
          </section>
        ))}
      {userPosts.errors ? (
        <span>{userPosts.errors}</span>
      ) : (
        <section className={"UserHomepage-posts"}>
          <Button
            onClick={handleClickPosts}
            disabled={userPosts.posts.length > 0}
          >
            Список постов пользователя
          </Button>
          <SpinnerLoader show={userPosts.isLoading} />
          {!userPosts.isLoading && userPosts.posts.length > 0 && (
            <article className={"UserHomepage-posts_items"}>
              {userPosts.posts.map((post) => (
                <PostCard
                  key={post.id}
                  id={post.id}
                  title={post.title}
                  text={post.body}
                />
              ))}
            </article>
          )}
        </section>
      )}
    </div>
  );
};

export default UserHomepage;
