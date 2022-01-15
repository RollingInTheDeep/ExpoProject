import axios from "./axios";

export const createUserAPI = ({ id, pw, nickname, description }) => {
  return axios.post(`/auth/signup`, {
    id,
    pw,
    nickname,
    description,
  });
};

export const uploadImageAPI = ({ formData, config }) => {
  return axios.post("/auth/uploadImage", formData, config);
};

export const getUserAPI = ({ id, pw }) => {
  return axios.get("/auth/signin", { params: { id: id, pw: pw } });
};

export const logOutAPI = () => {
  return axios.get("/auth/logout");
};

export const getPrivateInfoAPI = ({ userId }) => {
  return axios.get("/api/user/privateInfo", { params: { userId: userId } });
};
