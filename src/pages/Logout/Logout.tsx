import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../contexts/UserContext";
import { useEffect } from "react";

const Logout = () => {
  const { setLogin } = useUserContext();
  const navigate = useNavigate();
  useEffect(() => {
    window.localStorage.removeItem("authToken");
    setLogin(null);
    navigate("/");
  }, [setLogin, navigate]);
  return <div>Logging you out...</div>;
};

export default Logout;
