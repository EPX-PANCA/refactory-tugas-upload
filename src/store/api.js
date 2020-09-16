import axios from "axios";

const port = 3000;
const token = localStorage.getItem("token") || "";

axios.defaults.headers.common = { Authorization: `bearer ${token}` };
const instance = axios.create({
  baseURL: `http://localhost:${port}/api/v1/`,
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use(
  (config) => {
    console.log({ request: config });
    return config;
  },
  (error) => Promise.reject(error)
);
instance.interceptors.response.use(
  function(response) {
    console.log({ response });
    return response;
  },
  function(error) {
    return Promise.reject(error);
  }
);

export default instance;
