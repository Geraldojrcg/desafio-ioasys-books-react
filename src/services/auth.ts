import api from "./api";

export type User = {
  id: string;
  name: string;
  birthdate: string;
  gender: string;
};

type ApiError = {
  errors: {
    message: string;
  };
};

export const login = async (
  email: string,
  senha: string
): Promise<ApiError> => {
  const response = await api.post("/auth/sign-in", {
    email,
    password: senha,
  });

  if (response && response.status === 200) {
    const user: User = response.data;
    const token = response.headers.authorization;
    const refreshToken = response.headers["refresh-token"];

    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", token);
    localStorage.setItem("refreshToken", refreshToken);

    window.location.reload();
  }

  return response.data;
};

export const isLogged = (): boolean => !!localStorage.getItem("user");

export const getUser = (): User =>
  JSON.parse(localStorage.getItem("user") || "{}");

export const logout = (): void => {
  localStorage.removeItem("user");
  localStorage.removeItem("token");
  localStorage.removeItem("refreshToken");

  window.location.reload();
};
