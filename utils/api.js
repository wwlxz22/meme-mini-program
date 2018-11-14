const DEVELOP_URL = `http://192.168.10.10/api`;
const PRODUCT_URL = `https://www.xiaochongleyuan.com/api/bqb`;
const BASE_URL = DEVELOP_URL;

module.exports = {
  LOGIN: BASE_URL + `/user/login`, // 登陆接口
  CATEGORY_LIST: BASE_URL + `/category/list`, // 分类列表
  FACES_BY_CATEGORY: BASE_URL + `/face/category`, // 分类获取表情
  SEARCH: BASE_URL + `/face/search`, // 搜索
  ADD_FAVORITE: BASE_URL + `/favorite/add`, // 收藏
}