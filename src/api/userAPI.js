import axios from "./axios";

export const createUserAPI = ({
  name,
  email,
  nickname,
  image,
  description,
}) => {
  return axios.post(`/auth/signup`, {
    name,
    email,
    nickname,
    image,
    description,
  });
};

export const uploadImageAPI = ({ formData, config }) => {
  return axios.post("/auth/uploadImage", formData, config);
};

export const getUserAPI = ({ name, email }) => {
  return axios.get("/auth/signin", { params: { name: name, email: email } });
};

export const logOutAPI = () => {
  return axios.get("/auth/logout");
};

export const getPrivateInfoAPI = ({ userId }) => {
  return axios.get("/api/user/privateInfo", { params: { userId: userId } });
};
