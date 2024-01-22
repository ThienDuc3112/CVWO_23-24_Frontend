import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { API_URL } from "../costants";
import { IUser } from "../interfaces/User";

const userContext = createContext({
  user: null as IUser | null,
  setLogin: (user: IUser | null) => {},
});

export const useUserContext = () => useContext(userContext);

const UserContextProvider = ({ children }: { children: ReactNode }) => {
  const [login, setLogin] = useState(null as IUser | null);
  useEffect(() => {
    const token = window.localStorage.getItem("authToken");
    if (!token) return;
    fetch(`${API_URL}/verify`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        if (res.ok) {
          res.json().then((data: IUser) => setLogin(data));
        }
      })
      .catch((err) => {
        console.error(err);
        alert("An error occured");
      });
  }, []);
  return (
    <userContext.Provider value={{ user: login, setLogin }}>
      {children}
    </userContext.Provider>
  );
};

export default UserContextProvider;
