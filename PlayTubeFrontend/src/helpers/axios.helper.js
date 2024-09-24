import axios from "axios";

// import { loadProgressBar } from "axios-progress-bar";
// import "axios-progress-bar/dist/nprogress.css";

const baseURL = import.meta.env.VITE_BASE_URI;

export const axiosInstance = axios.create({
  baseURL,
  withCredentials: true,
});