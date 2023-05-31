import { TGetAllPosts } from "../../query/QueryTypes";

export type TPostList = {
  posts?: TGetAllPosts[];
  cb?: () => void;
};
