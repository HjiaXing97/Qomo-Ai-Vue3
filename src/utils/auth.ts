import CookieJs from "js-cookie";

const AUTH_TOKEN = "Admin-Token";

function getToken() {
  return CookieJs.get(AUTH_TOKEN);
}

function setToken(token: string) {
  return CookieJs.set(AUTH_TOKEN, token);
}

export { getToken, setToken };
