import { useEffect, useState } from "react";

class Err extends Error {
  status: number;
  constructor(status: number, message?: string) {
    super(message);
    this.status = status;
  }
}
interface State<T> {
  data?: T;
  err?: Err;
}

export const useFetch = <T>(
  url: string,
  withCredential: boolean = false
): State<T> => {
  const [state, setState] = useState({} as State<T>);
  useEffect(() => {
    if (!url) {
      setState({ err: new Err(400, "No url provided") });
      return;
    }
    (async () => {
      try {
        const res = await fetch(url, {
          credentials: withCredential ? "include" : "omit",
        });
        if (!res.ok) {
          throw new Err(res.status);
        }
        const data = (await res.json()) as T;
        setState({ data });
      } catch (error) {
        setState({ err: error as Err });
      }
    })();
  }, [url, withCredential]);
  return state;
};
