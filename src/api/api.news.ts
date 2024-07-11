import axios from "axios";

const BASE_URL = import.meta.env.VITE_NEWS_BASE_API_URL;
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

interface IResponse {
  pageNumber?: number;
  pageSize?: number;
  category?: string | null;
}

export const getNews = async ({
  pageNumber = 1,
  pageSize = 10,
  category,
}: IResponse) => {
  try {
    const response = await axios.get(`${BASE_URL}search`, {
      params: {
        apiKey: API_KEY,
        page_number: pageNumber,
        page_size: pageSize,
        category,
      },
    });

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getCategories = async ({ category }: IResponse) => {
  try {
    const response = await axios.get(`${BASE_URL}available/categories`, {
      params: {
        apiKey: API_KEY,
        category,
      },
    });

    return response.data;
  } catch (error) {
    console.log(error);
  }
};
