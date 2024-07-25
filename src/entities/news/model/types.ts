import { CategoriesType } from "@/entities/category";

export type News = {
  author: string;
  category: CategoriesType[];
  description: string;
  id: string;
  image: string;
  language: string;
  published: string;
  title: string;
  url: string;
};

export interface INewsApiResponse {
  news: News[];
  page: number;
  status: string;
}
