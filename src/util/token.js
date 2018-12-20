import { setCookie, getCookie, delCookie } from "./cookie";

export function setToken(token) {
  return setCookie("TOKEN", token, 1);
}

export function getToken() {
  return getCookie("TOKEN");
}
