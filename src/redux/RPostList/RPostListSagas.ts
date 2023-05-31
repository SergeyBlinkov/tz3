import { put, takeLatest, delay } from "redux-saga/effects";
import {
  RClearSortingArray,
  RGetPostsSaga,
  RLoadingPosts,
  RReqSortingArray,
  RSetErrorPosts,
  RSetPosts,
  RSetSortingArray,
} from "./utility";
import PostRequest from "../../query/PostRequest";
import { TGetAllPosts } from "../../query/QueryTypes";

function* loader() {
  yield put({ type: RLoadingPosts });
}

function* GetPosts(page: { type: string; payload: number }) {
  yield loader();

  try {
    const posts: TGetAllPosts[] = yield PostRequest.getAllPosts(page.payload)
      .then(({ data }) => data)
      .catch((e) => new Error(e));
    yield delay(1000);
    yield put({ type: RSetPosts, payload: posts });
    return;
  } catch (e) {
    yield put({ type: RSetErrorPosts, message: e });
  }
}

function* getSorting(action: { type: string; payload: string }) {
  try {
    if (action.payload.length === 0) {
      yield put({ type: RClearSortingArray });
      return;
    }
    const posts: TGetAllPosts[] = yield PostRequest.getSortedList()
      .then(({ data }) => data)
      .catch((e) => new Error(e.message));
    yield delay(1000);
    yield put({
      type: RSetSortingArray,
      payload: { posts, text: action.payload },
    });
    return;
  } catch (e) {
    yield put({ type: RSetErrorPosts, payload: e });
  }
}

export default function* mySaga() {
  yield takeLatest(RGetPostsSaga, GetPosts);
  yield takeLatest(RReqSortingArray, getSorting);
}
