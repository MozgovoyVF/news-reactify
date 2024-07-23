import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IFilters, News } from "../../types/news.types";
import { PAGE_SIZE } from "../../constants/constants";

export interface INewsState {
  news: News[];
  filters: IFilters;
}

const initialState: INewsState = {
  news: [],
  filters: {
    pageNumber: 1,
    pageSize: PAGE_SIZE,
    category: null,
    keywords: "",
  },
};

export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    setNews: (state, action: PayloadAction<News[]>) => {
      state.news = action.payload;
    },
    setFilters: (
      state,
      action: PayloadAction<{ key: string; value: string | number | null }>
    ) => {
      const { key, value } = action.payload;
      state.filters = { ...state.filters, [key]: value };
    },
  },
});

export const { setNews, setFilters } = newsSlice.actions;

export default newsSlice.reducer;
