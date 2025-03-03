import axios from "axios";

export const getAxiosInstace = () =>
  axios.create({
    baseURL: `${import.meta.env.Backend_API_URL}`,
    headers: {
      "Content-Type": "application/json",
    },
  });