import CookieJs from "js-cookie";

const AUTH_TOKEN = "Admin-Token";

function getToken() {
  return CookieJs.get(AUTH_TOKEN);
}

function setToken(token: string) {
  return CookieJs.set(AUTH_TOKEN, token);
}

function removeToken() {
  return CookieJs.remove(AUTH_TOKEN);
}

export { getToken, setToken, removeToken };
