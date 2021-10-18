import axios from "./axios";

export const getPrivateArticleAPI = ({ folderId }) => {
  return axios.get(`/api/user/private`, { params: { folderId: folderId } });
};
