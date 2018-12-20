import request from "../util/request";
import { RIGHT_NAVI_MODULE } from "./_prefix";

/**
 *  获得走马热点文章
 */
export const fetchHotNews = () => {
  return request(`${RIGHT_NAVI_MODULE}/hotNews`);
};

export const fetchLatestComments = () => {
  return request(`${RIGHT_NAVI_MODULE}/latestComments`);
};
