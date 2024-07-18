import axios from "axios";
import {
  ICategoriesApiResponse,
  INewsApiResponse,
  ParamsType,
} from "../types/news.types";

const BASE_URL = import.meta.env.VITE_NEWS_BASE_API_URL;
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

export const getNews = async (
  params?: ParamsType
): Promise<INewsApiResponse> => {
  try {
    const { pageNumber = 1, pageSize = 10, category, keywords } = params || {};

    const response = await axios.get<INewsApiResponse>(`${BASE_URL}search`, {
      params: {
        apiKey: API_KEY,
        page_number: pageNumber,
        page_size: pageSize,
        category,
        keywords,
      },
    });

    return response.data;
  } catch (error) {
    console.log(error);
    return { news: [], page: 1, status: "error" };
  }
};

export const getCategories = async (): Promise<ICategoriesApiResponse> => {
  try {
    const response = await axios.get<ICategoriesApiResponse>(
      `${BASE_URL}available/categories`,
      {
        params: {
          apiKey: API_KEY,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.log(error);
    return { categories: [], description: "", status: "error" };
  }
};

export const getLatestNews = async (): Promise<INewsApiResponse> => {
  try {
    const response = await axios.get<INewsApiResponse>(
      `${BASE_URL}latest-news`,
      {
        params: {
          apiKey: API_KEY,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.log(error);
    return { news: [], page: 1, status: "error" };
  }
};
