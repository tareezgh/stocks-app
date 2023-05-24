import { useEffect } from "react";
import { useNavigate } from "react-router";

const Layout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const currentUser = localStorage.getItem("username");
    currentUser === null ? navigate("/sign-in") : navigate("/dashboard");
  }, []);
  return <></>;
};

export default Layout;
