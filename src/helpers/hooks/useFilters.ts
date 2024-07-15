import { useState } from "react";
import { IFilters } from "../../pages/Main/Main";

export const useFilters = (initialFilters: IFilters) => {
  const [filters, setFilters] = useState<IFilters>(initialFilters);

  const changeFilter = (key: string, value: string | number | null) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return { filters, changeFilter };
};
