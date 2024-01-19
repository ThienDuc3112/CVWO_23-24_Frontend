import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { API_URL } from "../costants";

const userContext = createContext({
  login: false,
  setLogin: (state: boolean) => {},
});

export const useUserContext = () => useContext(userContext);

const UserContextProvider = ({ children }: { children: ReactNode }) => {
  const [login, setLogin] = useState(false);
  useEffect(() => {
    const token = window.localStorage.getItem("authToken");
    if (!token) return;
    fetch(`${API_URL}/verify`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => (res.ok ? setLogin(true) : null))
      .catch((err) => {
        console.error(err);
        alert("An error occured");
      });
  }, []);
  return (
    <userContext.Provider value={{ login, setLogin }}>
      {children}
    </userContext.Provider>
  );
};

export default UserContextProvider;
