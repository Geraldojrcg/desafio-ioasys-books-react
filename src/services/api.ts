import axios, { AxiosResponse } from "axios";

const url = "https://books.ioasys.com.br/api/v1";

const api = axios.create({
  baseURL: url,
});

async function refreshTokenStrategy(): Promise<AxiosResponse | undefined> {
  const token = localStorage.getItem("token");
  const refreshToken = localStorage.getItem("refreshToken");
  if (token && refreshToken) {
    const response = await axios.post(
      `${url}/auth/refresh-token`,
      { refreshToken },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const resToken = response.headers.authorization;
    const resRefreshToken = response.headers["refresh-token"];
    localStorage.setItem("token", resToken);
    localStorage.setItem("refreshToken", resRefreshToken);
    return response;
  }
  return undefined;
}

api.interceptors.request.use((config) => {
  const newConfig = config;
  document.body.classList.add("loading-indicator");
  const token = localStorage.getItem("token");
  if (token) {
    newConfig.headers.Authorization = `Bearer ${token}`;
  }
  return newConfig;
});

api.interceptors.response.use(
  (response) => {
    document.body.classList.remove("loading-indicator");
    return response;
  },
  async (error) => {
    document.body.classList.remove("loading-indicator");
    if (error.response.status === 500) {
      return Promise.reject(error.response.data);
    }
    if (error.response.status === 401) {
      return (await refreshTokenStrategy()) || error.response;
    }
    return error.response;
  }
);

export default api;
