import axios from "axios";

const instance = axios.create({
  baseURL: "http://172.22.248.137:3000",
  withCredentials: true,
});

export default instance;
