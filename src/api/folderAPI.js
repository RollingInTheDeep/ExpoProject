import axios from "./axios";

export const getFolderAPI = ({ userId }) => {
  return axios.get(`/api/user/folders`, { params: { userId: userId } });
};
