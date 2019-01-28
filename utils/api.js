const DEVELOP_URL = `http://doutu.test/api/face`;
const PRODUCT_URL = `https://doutu.xiaochongleyuan.com/api/face`;

const BASE_URL = DEVELOP_URL;
// const BASE_URL = PRODUCT_URL;

export const api = {
  LOGIN: BASE_URL + `/user/login`, // 登陆接口
  FEEDBACK: BASE_URL + `/user/feedback`, // 反馈
  RECOM_TAG: BASE_URL + `/tag/recom`, // 推荐标签
  HOT_TAG:BASE_URL+`/tag/hot`, // 热门标签
  FACES_BY_TAG: BASE_URL + `/face/tag`, // 分类获取表情
  SEARCH: BASE_URL + `/face/search`, // 搜索
  ADD_FAVORITE: BASE_URL + `/favorite/add`, // 收藏
  STAR_FACES: BASE_URL + `/face/star`, // 明星头像
  GET_FAVORITE: BASE_URL + `/favorite/get`, // 收藏列表
  IS_FAVORITE: BASE_URL + `/favorite/status`, // 判断是否收藏
}