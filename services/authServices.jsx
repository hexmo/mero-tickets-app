import axios from "./apiClient";
import { Alert } from "react-native";

const login = (email, password) =>
  axios.post("/auth/sign_in", {
    email: email,
    password: password,
  });

const signUp = (email, password) =>
  axios.post("/auth/", {
    email: email,
    password: password,
    password_confirmation: password,
  });

const isLoggedIn = () => axios.get("/auth/validate_token");

export { login, signUp, isLoggedIn };
