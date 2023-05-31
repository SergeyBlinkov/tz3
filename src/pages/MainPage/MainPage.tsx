import React, {
  ChangeEvent,
  useCallback,
  useEffect,
  useMemo,
  useRef,
} from "react";
import PostList from "../../shared/PostList/PostList";
import { useDispatch } from "react-redux";
import {
  RClearSortingArray,
  RGetPostsSaga,
  RReqSortingArray,
} from "../../redux/RPostList/utility";
import { useAppSelector } from "../../redux/ReduxStore";
import Header from "../../features/Header/Header";
import debounce from "../../shared/HelperFunctions/useDebounceHook";
import { CloseButton, Form, InputGroup } from "react-bootstrap";

const MainPage = () => {
  const InputRef = useRef<HTMLInputElement | null>(null);

  const posts = useAppSelector((state) => state.PostList);

  let pageRef = useRef(1);
  const dispatch = useDispatch();
  const getAllPosts = useCallback(() => {
    dispatch({ type: RGetPostsSaga, payload: pageRef.current++ });
  }, []);
  useEffect(() => {
    getAllPosts();
  }, [getAllPosts]);

  const filteredArray = () => {
    return posts.sortingArray.length > 0 ? posts.sortingArray : posts.posts;
  };
  const useDebounce = useMemo(
    () =>
      debounce(
        (text: string) => dispatch({ type: RReqSortingArray, payload: text }),
        400
      ),
    []
  );
  console.log(posts);
  const HandleChange = (e: ChangeEvent<HTMLInputElement>) => {
    useDebounce(e.target.value);
  };
  return (
    <div className={"MainPage"}>
      <Header title={"Список постов"} />

      <section>
        <InputGroup className="mb-3">
          <Form.Control
            ref={InputRef}
            placeholder="Сортировка по заголовку"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            onChange={HandleChange}
          />
          <CloseButton
            style={{ width: 80, height: 40, border: "1px solid black" }}
            onClick={() => {
              if (InputRef.current) {
                InputRef.current.value = "";
              }
              dispatch({ type: RClearSortingArray });
            }}
          />
        </InputGroup>
      </section>
      <PostList posts={filteredArray()} cb={getAllPosts} />
    </div>
  );
};

export default MainPage;
