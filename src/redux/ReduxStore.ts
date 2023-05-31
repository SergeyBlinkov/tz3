import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import RPostListReducer from "./RPostList/RPostListReducer";
import createSagaMiddleware from "redux-saga";
import mySaga from "./RPostList/RPostListSagas";

export const reducers = combineReducers({ PostList: RPostListReducer });
const sagaMiddleWare = createSagaMiddleware();

export const store = createStore(reducers, applyMiddleware(sagaMiddleWare));
sagaMiddleWare.run(mySaga);

export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
