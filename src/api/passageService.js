import request from "../util/request";
import { PASSAGE_MODULE } from "./_prefix";

/**
 *  获得走马热点文章
 */
export const fetchHotPassage = () => {
  return request(`${PASSAGE_MODULE}/hot`);
};

/**
 *获得某一类型的文章列表
 * @param {*} className
 */
export const fetchOneClassOfPassageList = className => {
  return request(`${PASSAGE_MODULE}/class`, {
    method: "POST",
    body: {
      className: className
    }
  });
};

export const publishPassage = info => {
  return request(`${PASSAGE_MODULE}/publish`, {
    method: "POST",
    body: info
  });
};
