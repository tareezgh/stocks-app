import { useEffect } from "react";
import { useNavigate } from "react-router";

function getCookieValue(cookieName: string) {
  const cookieString = document.cookie;
  const cookieArray = cookieString.split(";");

  for (let i = 0; i < cookieArray.length; i++) {
    let cookie = cookieArray[i];
    while (cookie.charAt(0) === " ") {
      cookie = cookie.substring(1);
    }
    if (cookie.indexOf(cookieName + "=") === 0) {
      return decodeURIComponent(cookie.substring(cookieName.length + 1));
    }
  }
  return "";
}

const Layout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const currentUser = getCookieValue("username");
    currentUser === null ? navigate("/sign-in") : navigate("/dashboard");
  }, []);
  return <></>;
};

export default Layout;
