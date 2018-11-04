import request from "../util/request";
import { TEST_MODULE } from "./_prefix";

export const test = () => {
  return request(`${TEST_MODULE}`);
};
