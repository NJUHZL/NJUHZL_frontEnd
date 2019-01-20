import request from "../util/request";
import { PASSAGE_MODULE } from "./_prefix";
import { COMMENT_MODULE } from "./_prefix";

/**
 *  获得走马热点文章
 */
export const fetchLatestPassage = () => {
  return request(`${PASSAGE_MODULE}/latest`);
};

export const fetchLatestComments = () => {
  return request(`${COMMENT_MODULE}/latest`);
};
