const api = require("../utils/api.js");
const wxFuncs = require("../utils/wxFuncs.js");

const getClassificationList = () => {
  return wxFuncs.request(api.CLASSIFICATION);
}

module.exports = {
  getClassificationList: getClassificationList
}