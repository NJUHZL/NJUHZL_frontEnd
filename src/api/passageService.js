import request from "../util/request";
import { PASSAGE_MODULE } from "./_prefix";

/**
 *  获得走马热点文章
 */
export const fetchHotPassage = () => {
  return request(`${PASSAGE_MODULE}/hot`);
};
