const apiFuncs = require("./utils/apiFuncs.js");
const wxFuncs = require("./utils/wxFuncs.js");

App({
  onLaunch: function() {
    let that = this;
    that.login();
  },

  login: function() {
    wxFuncs.login().then(res => {
      apiFuncs.login(res.code).then(res => {
        console.info(" [ app.js ] =============== login >>>>> res = ", res);
      });
    });
  },

  globalData: {
    userInfo: null,
    token: "",
    userId: ""
  }
})