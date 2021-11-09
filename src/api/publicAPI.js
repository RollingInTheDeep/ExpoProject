import axios from "./axios";

export const getPublicArticleAPI = () => {
  return axios.get(`/api/public/article`);
};
