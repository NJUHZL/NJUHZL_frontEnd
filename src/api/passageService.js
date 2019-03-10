import request from '../util/request';
import { PASSAGE_MODULE } from './_prefix';

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
    method: 'POST',
    body: {
      className: className
    }
  });
};

export const publishPassage = ({
  title,
  abstract,
  content,
  keyword1,
  keyword2,
  keyword3,
  type,
  newsSource,
  pictureUrls
}) => {
  return request(`${PASSAGE_MODULE}/publish`, {
    method: 'POST',
    body: {
      title: title,
      abstract: abstract,
      content: content,
      keyword1: keyword1,
      keyword2: keyword2,
      keyword3: keyword3,
      type: type,
      newsSource: newsSource,
      picUrls: JSON.stringify(pictureUrls)
    }
  });
};

export const fetchAllPassage = () => {
  return request(`${PASSAGE_MODULE}/all`);
};

export const deletePassage = ({ id }) => {
  console.log(id);
  return request(`${PASSAGE_MODULE}/delete`, {
    method: 'POST',
    body: {
      id: id
    }
  });
};

export const fetchPassageDetail = ({ id }) => {
  console.log(id);
  return request(`${PASSAGE_MODULE}/detail`, {
    method: 'POST',
    body: {
      passageID: id
    }
  });
};

export const fetchComment = ({ passageID }) => {
  return request(`${PASSAGE_MODULE}/comment`, {
    method: 'POST',
    body: {
      passageID: id
    }
  });
};

export const postComment = ({
  passageID,
  content,
  email,
  nickname,
  femail,
  fnickname
}) => {
  return request(`${PASSAGE_MODULE}/comment`, {
    method: 'POST',
    body: {
      passageID,
      content,
      email,
      nickname,
      femail,
      fnickname
    }
  });
};
