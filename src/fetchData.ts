import axios from "axios";
import { toast } from "react-toastify";

export const url = "http://localhost:3002/api";

// export const url =
//   "https://us-central1-stocks-app-server.cloudfunctions.net/app/api";

export const loginUrl = `${url}/auth/login`;
export const registerUrl = `${url}/auth/register`;
export const getStocksUrl = `${url}/auth/getStocks`;
export const updateStocksUrl = `${url}/auth/updateStocks`;

export const fetchData = async (symbols: string[]) => {
  let stockDataUrl = `https://api.stockdata.org/v1/data/quote?symbols=`;

  symbols.forEach((symbol: string, index: number) => {
    stockDataUrl +=
      index === symbols.length - 1
        ? `${symbol.toUpperCase()}`
        : `${symbol.toUpperCase() + ","}`;
  });

  stockDataUrl += "&api_token=Vvsz1mUqFChImHM80elcL05mN6xDL5CluckUw4rX";

  console.log(stockDataUrl);

  try {
    const response = await axios.get(stockDataUrl);
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

export const getUserStocks = async (user: any) => {
  const args = {
    username: user,
  };
  const response = await axios.post(getStocksUrl, args);
  if (response.data.status === "failure") {
    toast.error(response.data.message, {
      position: "bottom-center",
      hideProgressBar: true,
    });
  }

  return response;
};

export const updateUserStocks = async (user: any) => {
  const args = {
    username: user.username,
    stockToAdd: user.stockToAdd.toUpperCase(),
  };
  const response = await axios.patch(updateStocksUrl, args);

  if (response.data.status === "failure") {
    toast.error(response.data.message, {
      position: "bottom-center",
      hideProgressBar: true,
    });
  }

  return response;
};
