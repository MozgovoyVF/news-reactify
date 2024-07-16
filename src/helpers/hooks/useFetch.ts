import { useEffect, useState } from "react";
import { News } from "../../types/news.types";
import { IFilters } from "../../pages/Main/Main";

export const useFetch = (
  fetchFn: CallableFunction,
  params?: Partial<IFilters>
) => {
  const [data, setData] = useState<{ categories?: string[]; news?: News[] }>(
    {}
  );
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const stringParams = params ? JSON.stringify(params) : "";

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const result = await fetchFn(params);

        setData(result);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (err: any) {
        setError(err);
        setIsLoading(false);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [fetchFn, stringParams]);

  return { data, isLoading, error };
};
