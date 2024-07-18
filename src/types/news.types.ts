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

export interface IFilters {
  pageNumber: number;
  pageSize: number;
  category: CategoriesType | null;
  keywords: string;
}
export type ParamsType = Partial<IFilters>;

export interface INewsApiResponse {
  news: News[];
  page: number;
  status: string;
}

export interface ICategoriesApiResponse {
  categories: CategoriesType[];
  description: string;
  status: string;
}

export interface IPagination {
  currentPage: number;
  totalPages: number;
  handleNextPage: () => void;
  handlePreviousPage: () => void;
  handlePageClick: (number: number) => void;
}

export type SkeletonType = "banner" | "item";
export type DirectionType = "row" | "column";

export type CategoriesType =
  | "regional"
  | "technology"
  | "lifestyle"
  | "business"
  | "general"
  | "programming"
  | "science"
  | "entertainment"
  | "world"
  | "sports"
  | "finance"
  | "academia"
  | "politics"
  | "health"
  | "opinion"
  | "food"
  | "game"
  | "fashion"
  | "academic"
  | "crap"
  | "travel"
  | "culture"
  | "economy"
  | "environment"
  | "art"
  | "music"
  | "notsure"
  | "CS"
  | "education"
  | "redundant"
  | "television"
  | "commodity"
  | "movie"
  | "entrepreneur"
  | "review"
  | "auto"
  | "energy"
  | "celebrity"
  | "medical"
  | "gadgets"
  | "design"
  | "EE"
  | "security"
  | "mobile"
  | "estate"
  | "funny";
