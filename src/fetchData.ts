import axios from "axios";

export const fetchData = async (url: string) => {
  try {
    const response = await axios.get(url);
    console.log(response.data);
    return response.data.data;
  } catch (error) {
    console.log("error", error);
  }
};
