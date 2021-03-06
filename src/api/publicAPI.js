import axios from "./axios";

export const getPublicArticleAPI = () => {
  return axios.get(`/api/public/article`);
};

export const createPublicArticleAPI = ({ userId, title, content, hashTag }) => {
  return axios.post(`/api/public/article`, { userId, title, content, hashTag });
};

export const getPublicArticleByUserAPI = ({ userId }) => {
  return axios.get(`/api/public/article/user`, { params: { userId: userId } });
};
