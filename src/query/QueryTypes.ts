export interface TGetAllPosts {
  id: number;
  title: string;
  body: string;
}

export interface TGetUser {
  id: number;
  name: string;
  email: string;
  phone: string;
}

export type TGetComments = {
  id: number;
  postId: number;
  name: string;
  email: string;
  body: string;
};
