import axios from "axios";
import { toast } from "react-toastify";

export const url = "http://localhost:3001/api";

export const loginUrl = `${url}/auth/login`;
export const registerUrl = `${url}/auth/register`;

export const fetchData = async (url: string) => {
  try {
    const response = await axios.get(url);
    console.log(response.data);
    return response.data.data;
  } catch (error) {
    console.log("error", error);
  }
};

export const registerUser = async (user: any) => {
  const args = {
    username: user.username,
    password: user.password,
  };

  const response = await axios.post(registerUrl, args);

  if (response.data.status === "failure") {
    toast.error(response.data.message, {
      position: "bottom-center",
      hideProgressBar: true,
    });
  } else {
    toast.success("Added successfully!", {
      position: "bottom-center",
      hideProgressBar: true,
    });
    return true;
  }
  return false;
};

export const loginUser = async (user: any) => {
  const args = {
    username: user.username,
    password: user.password,
  };

  const response = await axios.post(loginUrl, args);

  if (response.data.status === "failure") {
    toast.error(response.data.message, {
      position: "bottom-center",
      hideProgressBar: true,
    });
  } else {
    toast.success("Logged in!", {
      position: "bottom-center",
      hideProgressBar: true,
    });

    return args;
  }
};
