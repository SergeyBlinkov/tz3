import { AxiosResponse } from "axios";
import { TGetComments, TGetAllPosts, TGetUser } from "./QueryTypes";
import { $api } from "./DefaultApi";

export default class PostRequest {
  static async getAllPosts(
    page?: number
  ): Promise<AxiosResponse<TGetAllPosts[]>> {
    return $api.get<TGetAllPosts[]>("/posts", {
      params: {
        _limit: 20,
        _page: page,
      },
    });
  }
  static async getUser(id: number): Promise<AxiosResponse<TGetUser>> {
    return $api.get<TGetUser>(`/users/${id}`);
  }
  static async getUserPosts(
    id: number
  ): Promise<AxiosResponse<TGetAllPosts[]>> {
    return $api.get<TGetAllPosts[]>(`/posts?userId=${id}`);
  }
  static async getComments(id: number): Promise<AxiosResponse<TGetComments[]>> {
    return $api.get<TGetComments[]>(`/comments?postId=${id}`);
  }
  static async getSortedList(): Promise<AxiosResponse<TGetAllPosts[]>> {
    return $api.get(`/posts`);
  }
}
