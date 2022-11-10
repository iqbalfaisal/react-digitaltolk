import axios from "axios";

export const axiosClient = axios.create({
  baseURL: "https://todo-test.digitaltolk.com/api/",
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer Zl49StyUu9721TFoRHfDqGmEVikCKNhJayGUgDvK",
  },
});
