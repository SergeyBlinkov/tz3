import { TPostListReducer } from "./TPostList";
import { AnyAction } from "redux";
import {
  RClearSortingArray,
  RLoadingPosts,
  RSetErrorPosts,
  RSetPosts,
  RSetSortingArray,
} from "./utility";
import { TGetAllPosts } from "../../query/QueryTypes";
import { AxiosError } from "axios";

const PostListData: TPostListReducer = {
  posts: [],
  errors: null,
  isLoading: false,
  isNoMorePosts: false,
  sortingArray: [],
};

function RPostListReducer(
  state = PostListData,
  action: AnyAction
): TPostListReducer {
  switch (action.type) {
    case RLoadingPosts: {
      state = { ...state, isLoading: true };
      return state;
    }
    case RSetPosts: {
      if (action.payload.length === 0) {
        return {
          ...state,
          isLoading: false,
          errors: null,
          isNoMorePosts: true,
        };
      }

      return {
        ...state,
        posts: [...state.posts, ...action.payload],
        isLoading: false,
        errors: null,
      };
    }
    case RSetSortingArray: {
      const filteredArray = (action.payload.posts as TGetAllPosts[]).filter(
        (post) => post.title.includes(action.payload.text)
      );
      if (filteredArray.length === 100) {
        return { ...state, sortingArray: [] };
      } else return { ...state, sortingArray: filteredArray };
    }
    case RClearSortingArray: {
      return { ...state, sortingArray: [] };
    }
    case RSetErrorPosts: {
      state = {
        ...state,
        posts: [],
        isLoading: false,
        errors: (action.payload as AxiosError).message,
      };
      return state;
    }
    default:
      return state;
  }
}

export default RPostListReducer;
