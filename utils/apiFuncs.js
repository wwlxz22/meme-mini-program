const api = require("../utils/api.js");
const wxFuncs = require("../utils/wxFuncs.js");

const login = (code) => {
  let data = {
    code: code
  }
  return wxFuncs.request(api.LOGIN, data, "POST");
}

/**
 * 获取分类列表
 */
const getCategoryList = () => {
  return wxFuncs.request(api.CATEGORY_LIST);
}

/**
 * 根据类型获取表情
 */
const getFaceListByCategory = (categoryId, pageNo = 1) => {
  let data = {
    category_id: categoryId,
    pageNo: pageNo
  }
  return wxFuncs.request(api.FACES_BY_CATEGORY, data);
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
  let userId = wx.getStorageSync("userId"),
    token = wx.getStorageSync("token");
  let data = {
    user_id: userId,
    token: token,
    face_id: faceId,
    type: type
  }
  return wxFuncs.request(api.ADD_FAVORITE, data, "POST");
}

/**
 * 获取收藏列表
 */
const getFavoriteList = (pageNo = 1) => {
  let userId = wx.getStorageSync("userId"),
    token = wx.getStorageSync("token");
  let data = {
    user_id: userId,
    token: token,
    pageNo: pageNo
  }
  return wxFuncs.request(api.GET_FAVORITE, data);
}

/**
 * 搜索
 */
const search = (key, pageNo = 1) => {
  let data = {
    key: key,
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
  let userId = wx.getStorageSync("userId"),
    token = wx.getStorageSync("token");
  let data = {
    user_id: userId,
    token: token,
    face_id: faceId
  }
  return wxFuncs.request(api.IS_FAVORITE, data);
}

module.exports = {
  login: login,
  getCategoryList: getCategoryList,
  getFaceListByCategory: getFaceListByCategory,
  addFavorite: addFavorite,
  search: search,
  getStarFaces: getStarFaces,
  getFavoriteList: getFavoriteList,
  isFavorite: isFavorite
}