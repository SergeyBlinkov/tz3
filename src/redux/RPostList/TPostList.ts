import { TGetAllPosts } from "../../query/QueryTypes";

export type TPostListReducer = {
  posts: TGetAllPosts[];
  errors: null | string;
  isLoading: boolean;
  isNoMorePosts: boolean;
  sortingArray: TGetAllPosts[];
};
