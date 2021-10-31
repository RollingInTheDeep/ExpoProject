import axios from "axios";

const instance = axios.create({
  baseURL: "http://168.188.128.78:3000",
  withCredentials: true,
});

export default instance;
