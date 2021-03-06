import axios from "./axios";

export const getPrivateArticleAPI = ({ folderId }) => {
  return axios.get(`/api/user/private`, { params: { folderId: folderId } });
};

export const createPrivateArticleAPI = ({ folderId, content }) => {
  return axios.post(`/api/user/private`, { folderId, content });
};

// export const removePrivateArticleAPI = (privateId) => {
//   return axios.delete(`/api/user/private`, { data: { privateId } });
// };
