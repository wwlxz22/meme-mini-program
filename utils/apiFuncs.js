const api = require("../utils/api.js");
const wxFuncs = require("../utils/wxFuncs.js");

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
    cate_id: categoryId,
    start: pageNo
  }
  return wxFuncs.request(api.FACES_BY_CATEGORY, data);
}

const getFaceById = (faceId) => {
  let data = {
    face_id: faceId
  }
  return wxFuncs.request(api.FACE_BY_ID, data);
}

/**
 * 添加收藏
 */
const addFavorite = (faceId, is_add) => {
  let data = {
    face_id: faceId,
    is_add: is_add
  }
  return wxFuncs.request(api.ADD_FAVORITE, data, "POST");
}

/**
 * 获取收藏列表
 */
const getFavoriteList = (pageNo = 1) => {
  let data = {
    pageNo: pageNo
  }
  return wxFuncs.request(api.FAVORITE_LIST, data);
}

module.exports = {
  getCategoryList: getCategoryList,
  getFaceListByCategory: getFaceListByCategory,
  addFavorite: addFavorite
}