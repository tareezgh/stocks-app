import axios from "axios";
import { toast } from "react-toastify";

export const url = "http://localhost:3002/api";

// export const url =
//   "https://us-central1-stocks-app-server.cloudfunctions.net/app/api";

export const loginUrl = `${url}/auth/login`;
export const registerUrl = `${url}/auth/register`;
export const getStocksUrl = `${url}/auth/getStocks`;
export const updateStocksUrl = `${url}/auth/updateStocks`;

const XRapidAPIKey = "060dab3b8cmshe2f683433cda61bp18f50cjsnedecd3167bd1";

interface StockDataItem {
  Volume: number;
  Price: number;
  DateTime: string;
  Growth: number;
  CalcString: string;
  ReferenceDate: string;
}

interface StockData {
  labels: Date[];
  prices: number[];
}

const getPerformanceId = async (symbol: string) => {
  let symbolPerformanceId = "";
  const getPerformanceIdUrl = {
    method: "GET",
    url: "https://ms-finance.p.rapidapi.com/market/v2/auto-complete",
    params: { q: `${symbol}` },
    headers: {
      "X-RapidAPI-Key": XRapidAPIKey,
      "X-RapidAPI-Host": "ms-finance.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(getPerformanceIdUrl);
    symbolPerformanceId = response.data.results[0].performanceId;
    return symbolPerformanceId;
  } catch (error) {
    return null;
  }
};

export const fetchStockData = async (symbol: string) => {
  const symbolPerformanceId = await getPerformanceId(symbol);

  const getData = {
    method: "GET",
    url: "https://ms-finance.p.rapidapi.com/stock/v2/get-realtime-data",
    params: {
      performanceId: `${symbolPerformanceId}`,
    },
    headers: {
      "X-RapidAPI-Key": XRapidAPIKey,
      "X-RapidAPI-Host": "ms-finance.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(getData);
    return response.data;
  } catch (error) {
    toast.error("Error fetching stock data", {
      position: "bottom-center",
      hideProgressBar: true,
    });
  }
};

export const fetchHistoricalStockData = async (symbol: string) => {
  const symbolPerformanceId = await getPerformanceId(symbol);

  const getHistoricalData = {
    method: "GET",
    url: "https://ms-finance.p.rapidapi.com/stock/get-histories",
    params: {
      PerformanceId: `${symbolPerformanceId}`,
    },
    headers: {
      "X-RapidAPI-Key": XRapidAPIKey,
      "X-RapidAPI-Host": "ms-finance.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(getHistoricalData);
    const data: { [key: string]: StockDataItem[] } = response.data[0];
    const oneYearData = data["1Y"];

    // Extracting price and date values from the API response
    const prices = oneYearData.map((item) => item.Price);
    const dates = oneYearData.map((item) => new Date(item.DateTime));

    // Formatting the chart data
    const chartData: StockData = {
      labels: dates,
      prices: prices,
    };

    return chartData;
  } catch (error) {
    toast.error("Error fetching stock data", {
      position: "bottom-center",
      hideProgressBar: true,
    });
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

    return true;
  }
  return false;
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
  // Check if the Stock exists first
  const checkIfExist = await getPerformanceId(user.stockToAdd.toUpperCase());
  if (checkIfExist !== null) {
    const response = await axios.patch(updateStocksUrl, args);
    return response;
  } else {
    toast.error("Stock doesn't exist", {
      position: "bottom-center",
      hideProgressBar: true,
    });
  }
};
