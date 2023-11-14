import { commonRequest } from "./commonRequest";

const baseURL = "http://localhost:5000";

// add user
export const addUser = async (body) => {
  return await commonRequest("POST", `${baseURL}/participants`, body);
};

// get all user
export const getAllUser = async () => {
  return await commonRequest("GET", `${baseURL}/participants`, {});
};

export const addFriend = async (id, body) => {
  return await commonRequest(
    "POST",
    `${baseURL}/participants/${id}/friends`,
    body
  );
};

export const getFriend = async (id) => {
  return await commonRequest(
    "GET",
    `${baseURL}/participants/${id}/friends`,
    {}
  );
};

export const verifyUser = async (id) => {
  return await commonRequest("GET", `${baseURL}/participants/${id}`, {});
};

// add message
export const addMessage = async (body) => {
  return await commonRequest("POST", `${baseURL}/messages`, body);
};

// get all messages
export const getAllMessages = async () => {
  return await commonRequest("GET", `${baseURL}/messages`, {});
};
