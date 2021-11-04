import axios from "axios";

const instance = axios.create({
  baseURL: "http://172.20.10.4:3000",
  withCredentials: true,
});

export default instance;
