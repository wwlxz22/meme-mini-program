const request = (url, data = {}, method = "GET") => {
  return new Promise((resolve, reject) => {
    wx.request({
      url: url,
      data: data,
      method: method,
      success: res => {
        if (200 == res.statusCode) {
          resolve(res.data);
        } else {
          reject(res);
        }
      },
      fail: rej => {
        reject(rej);
      }
    })
  });
}

/**
 * 需要登陆的请求
 */
const loginedRequest = (url, data = {}, method = "GET") => {
  let userId = wx.getStorageSync("userId"),
    token = wx.getStorageSync("token");
  data.token = token;
  data.user_id = userId;
  return request(url, data, method);
}

/**
 * 微信登陆接口
 */
const login = () => {
  return new Promise((resolve, reject) => {
    wx.login({
      success: res => {
        if (res.code) {
          resolve(res);
        } else {
          reject(res)
        }
      },
      fail: rej => {
        reject(rej);
      }
    });
  });
}

export const wxFuncs = {
  request,
  loginedRequest,
  login
}