import axios from "./axios";

export const getFolderAPI = ({ userId }) => {
  return axios.get(`/api/user/folders`, { params: { userId: userId } });
};

export const createFoldertAPI = ({ userId, name }) => {
  return axios.post(`/api/user/folders`, { userId, name });
};
