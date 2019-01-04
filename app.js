import { apiFuncs } from "./utils/apiFuncs.js";
import { wxFuncs } from "./utils/wxFuncs";

App({
  onLaunch: function() {
    let that = this;
    that.login();
  },

  login: function() {
    wxFuncs.login().then(res => {
      apiFuncs.login(res.code).then(res => {
        console.info(" [ app.js ] =============== login >>>>> res = ", res);
        wx.setStorage({
          key: 'userId',
          data: res.data.user_id
        });
        wx.setStorage({
          key: 'token',
          data: res.data.token
        })
      });
    });
  },

  globalData: {
    userInfo: null,
    token: "",
    userId: ""
  }
})