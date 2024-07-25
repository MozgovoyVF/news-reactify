import { CategoriesType } from "@/entities/category/model/types";

export interface IFilters {
  pageNumber: number;
  pageSize: number;
  category: CategoriesType | null;
  keywords: string;
}
export type ParamsType = Partial<IFilters>;

export type SkeletonType = "banner" | "item";
export type DirectionType = "row" | "column";
