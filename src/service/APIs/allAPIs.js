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

// add user
export const addMessage = async (body) => {
  return await commonRequest("POST", `${baseURL}/messages`, body);
};

// get all user
export const getAllMessages = async () => {
  return await commonRequest("GET", `${baseURL}/messages`, {});
};
