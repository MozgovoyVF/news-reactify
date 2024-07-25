import { useEffect, useState } from "react";

interface fetchFn<P, T> {
  (params?: P): Promise<T>;
}

interface UseFetchResult<T> {
  data: T | null | undefined;
  isLoading: boolean;
  error: Error | null;
}

export const useFetch = <T, P>(
  fetchFn: fetchFn<P, T>,
  params?: P
): UseFetchResult<T> => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  const stringParams = params ? new URLSearchParams(params).toString() : "";

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const result = await fetchFn(params);

        setData(result);
      } catch (err) {
        setError(err as Error);
        setIsLoading(false);
      } finally {
        setIsLoading(false);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchFn, stringParams]);

  return { data, isLoading, error };
};
