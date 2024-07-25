import { combineReducers } from "@reduxjs/toolkit";
import newsReducer from "@/entities/news/model/news.slice";
import { newsApi } from "@/entities/news/api/news.api";
import { categoriesApi } from "@/entities/category/api/categories.api";

export const rootReducer = combineReducers({
  news: newsReducer,
  [newsApi.reducerPath]: newsApi.reducer,
  [categoriesApi.reducerPath]: categoriesApi.reducer,
});
