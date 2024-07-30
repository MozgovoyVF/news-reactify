import { PAGE_SIZE } from "@/shared/constants/constants";
import { IFilters } from "@/shared/types/news.types";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { News } from "./types";

export interface INewsState {
  news: News[];
  filters: IFilters;
  currentNews: News | null;
}

const initialState: INewsState = {
  news: [],
  filters: {
    pageNumber: 1,
    pageSize: PAGE_SIZE,
    category: null,
    keywords: "",
  },
  currentNews: null,
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
    setCurrentNews: (state, action: PayloadAction<News | null>) => {
      state.currentNews = action.payload;
    },
  },
});

export const { setNews, setFilters, setCurrentNews } = newsSlice.actions;

export default newsSlice.reducer;
