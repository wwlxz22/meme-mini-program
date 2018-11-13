const DEVELOP_URL = `http://192.168.10.10/api`;
const PRODUCT_URL = `https://www.xiaochongleyuan.com/api/bqb`;
const BASE_URL = DEVELOP_URL;

module.exports = {
  CATEGORY_LIST: BASE_URL + `/category/list`, // 分类列表
  FACES_BY_CATEGORY: BASE_URL + `/face/category`, // 分类获取表情
}