import axiosClient from "./axiosClient";
import { EditInputs, RegisterInputs } from "../type";
import { LoginInputs } from "../type";

const userApi = {
  getUser: () => axiosClient.get("/user"),
  register: (params: RegisterInputs) =>
    axiosClient.post("user/register", params),
  login: (params: LoginInputs) => axiosClient.post("user/login", params),
  editAccount: (params: EditInputs) =>
    axiosClient.put("user/edit-account", params),
  logout: () => axiosClient.get("/user/logout"),
};

export default userApi;
