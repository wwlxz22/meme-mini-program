const DEVELOP_URL = `http://doutu.test/api`;
const PRODUCT_URL = `https://doutu.xiaochongleyuan.com/api`;

const BASE_URL = DEVELOP_URL;
// const BASE_URL = PRODUCT_URL;

module.exports = {
  LOGIN: BASE_URL + `/user/login`, // 登陆接口
  FEEDBACK: BASE_URL + `/user/feedback`, // 反馈
  CATEGORY_LIST: BASE_URL + `/category/list`, // 分类列表
  FACES_BY_CATEGORY: BASE_URL + `/face/category`, // 分类获取表情
  SEARCH: BASE_URL + `/face/search`, // 搜索
  ADD_FAVORITE: BASE_URL + `/favorite/add`, // 收藏
  STAR_FACES: BASE_URL + `/face/star`, // 明星头像
  GET_FAVORITE: BASE_URL + `/favorite/get`, // 收藏列表
  IS_FAVORITE: BASE_URL + `/favorite/status`, // 判断是否收藏
}