import { TwitterOpenApi } from "twitter-openapi-typescript";
import { login } from "./login";
import dotenv from "dotenv";
dotenv.config();

export const getApiClientFromEmailAndPassword = async (
  email: string,
  username: string,
  password: string,
  authorization?: () => string
) => {
  const api = new TwitterOpenApi();
  const rclient = await login(email, username, password, authorization);
  return api.getClientFromCookies(
    rclient.cookie.ct0 ??
      (() => {
        throw new Error("ct0 is null");
      })(),
    rclient.cookie.auth_token ??
      (() => {
        throw new Error("auth_token is null");
      })()
  );
};

export const env = (key: string) => {
  return (
    process.env[key] ??
    (() => {
      throw new Error(`${key} is null`);
    })()
  );
};
