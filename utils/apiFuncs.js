import { api } from "../utils/api.js";
import { wxFuncs } from "../utils/wxFuncs.js";

/**
 * 登陆
 */
const login = (code) => {
  let data = {
    code: code
  }
  return wxFuncs.request(api.LOGIN, data, "POST");
}

/**
 * 获取分类列表
 */
const getRecomTag = () => {
  return wxFuncs.request(api.RECOM_TAG);
}

/**
 * 根据类型获取表情
 */
const getFaceListByTag = (tagId, pageNo = 1) => {
  let data = {
    tag_id: tagId,
    pageNo: pageNo
  }
  return wxFuncs.request(api.FACES_BY_TAG, data);
}

/**
 * 根据表情id获取表情
 */
const getFaceById = (faceId) => {
  let data = {
    face_id: faceId
  }
  return wxFuncs.request(api.FACE_BY_ID, data);
}

/**
 * 添加收藏
 */
const addFavorite = (faceId, type) => {
  let data = {
    face_id: faceId,
    type: type
  }
  return wxFuncs.loginedRequest(api.ADD_FAVORITE, data, "POST");
}

/**
 * 获取收藏列表
 */
const getFavoriteList = (pageNo = 1) => {
  let data = {
    pageNo: pageNo
  }
  return wxFuncs.loginedRequest(api.GET_FAVORITE, data);
}

/**
 * 搜索
 */
const search = (key, type, pageNo = 1) => {
  let data = {
    key: key,
    type: type,
    pageNo: pageNo
  }
  return wxFuncs.request(api.SEARCH, data);
}

/**
 * 获取明星表情
 */
const getStarFaces = (type, pageNo = 1) => {
  let data = {
    type: type,
    pageNo: pageNo
  }
  return wxFuncs.request(api.STAR_FACES, data);
}

/**
 * 判断是否收藏
 */
const isFavorite = (faceId) => {
  let data = {
    face_id: faceId
  }
  return wxFuncs.loginedRequest(api.IS_FAVORITE, data);
}

/**
 * 反馈
 */
const feedback = (title, content) => {
  let data = {
    title: title,
    content: content
  };
  return wxFuncs.loginedRequest(api.FEEDBACK, data, "POST");
}

export const apiFuncs = {
  login,
  getRecomTag,
  getFaceListByTag,
  addFavorite,
  search,
  getStarFaces,
  getFavoriteList,
  isFavorite,
  feedback
}