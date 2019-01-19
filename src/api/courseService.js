import request from "../util/request";
import { COURSE_MODULE } from "./_prefix";

/**
 *获得某一类型的文章列表
 * @param {*} className
 */
export const fetchOneClassOfCourseList = className => {
  return request(`${COURSE_MODULE}/class`, {
    method: "POST",
    body: {
      className: className
    }
  });
};
