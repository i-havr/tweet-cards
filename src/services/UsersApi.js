import axios from "axios";

axios.defaults.baseURL = "https://63df862d8b24964ae0ef2a08.mockapi.io";

export const getUsers = async (limit, page = 1) => {
  const response = await axios.get("/users", {
    params: {
      limit,
      page,
    },
  });
  return response.data;
};

export const editFollowing = async (id, body) => {
  const response = await axios.put(`/users/${id}`, body);
  return response.data;
};
