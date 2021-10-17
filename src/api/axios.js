import axios from "axios";

const instance = axios.create({
  baseURL: "http://192.168.50.20:3000",
  withCredentials: true,
});

export default instance;
