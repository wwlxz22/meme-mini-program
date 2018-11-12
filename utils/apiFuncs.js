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
const getFaceListByCategory = (categoryId, pageNo) => {
  let data = {
    cate_id: categoryId,
    start: pageNo
  }
  return wxFuncs.request(api.FACES_BY_CATEGORY, data);
}

module.exports = {
  getCategoryList: getCategoryList,
  getFaceListByCategory: getFaceListByCategory
}