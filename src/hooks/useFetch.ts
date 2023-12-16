import { useEffect, useState } from "react";

interface State<T> {
  data?: T;
  err?: Error;
}

export const useFetch = <T>(
  url: string,
  withCredential: boolean = false
): State<T> => {
  const [state, setState] = useState({} as State<T>);
  useEffect(() => {
    if (!url) {
      setState({ err: new Error("No url provided") });
      return;
    }
    (async () => {
      try {
        const res = await fetch(url, {
          credentials: withCredential ? "include" : "omit",
        });
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        const data = (await res.json()) as T;
        setState({ data });
      } catch (error) {
        setState({ err: error as Error });
      }
    })();
  }, [url, withCredential]);
  return state;
};
