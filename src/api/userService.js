import request from "../util/request";
import { USER_MODULE } from "./_prefix";

/**
 * 注册前验证
 * @param {*} email
 */
export const registerIdentify = ({ user_email }) => {
  console.log(user_email);
  return request(`${USER_MODULE}/identify`, {
    method: "POST",
    body: {
      email: user_email
    }
  });
};

/**
 * 用户注册
 * @param {} param0
 */
export const register = ({
  email,
  nickname,
  password,
  identifyCode,
  token
}) => {
  return request(`${USER_MODULE}/register`, {
    method: "POST",
    headers: { authorization: "Bearer " + token },
    body: {
      email: email,
      nickname: nickname,
      password: password,
      identifyCode: identifyCode
    }
  });
};

export const login = ({ email, password }) => {
  return request(`${USER_MODULE}/login`, {
    method: "POST",
    body: {
      email: email,
      password: password
    }
  });
};
