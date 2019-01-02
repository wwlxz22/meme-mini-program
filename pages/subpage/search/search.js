const apiFuncs = require("../../../utils/apiFuncs.js");
const funcs = require("../../../utils/funcs.js");

Page({

  /**
   * 页面的初始数据
   */
  data: {
    initKey: "",
    faceList: [],
    type: "face", // 搜索类型 face tag
  },

  /**
   * 加载更多
   */
  loadMore: function () {
    let that = this;
    that.searchCall(that.data.initKey, that.data.searchType, that.data.pageNo);
  },

  /**
   * 搜索
   */
  search: function (e) {
    console.info(" [ index.js ] ================= search >>>>>> e = ", e);
    let that = this,
      data = e.detail.key;
    if (!data) {
      wx.showToast({
        title: '请输入要搜索的内容',
        icon: "none"
      });
      return;
    }
    that.setData({
      initKey: data
    });
    that.searchCall(data, that.data.searchType);
  },

  /**
   * 调用搜索
   */
  searchCall: function (key, type, pageNo = 1) {
    let that = this;
    apiFuncs.search(key, type, pageNo).then(res => {
      console.info(" [ index.js ] ============== search >>>>> = res = ", res);
      if (res.data.length > 0) {
        let newList = [];
        if (pageNo == 1) {
          newList = res.data;
        } else {
          newList = that.data.faceList.concat(res.data);
        }
        that.setData({
          faceList: newList,
          pageNo: pageNo + 1
        });
      } else {
        if (pageNo == 1) {
          that.setData({
            faceList: [],
            pageNo: pageNo
          });
        } else {
          that.setData({
            pageNo: pageNo
          });
        }
      }
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.info(" [search.js ] =============== onLoad >>>>> options = ", options);
    let that = this,
      key = options.key;
    // 获取屏幕高度
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          height: res.windowHeight - 80
        });
      },
    });
    that.setData({
      initKey: key,
      searchType: options.type
    });
    that.selectComponent('#search-bar').setContent(key);
    that.searchCall(key);
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    return funcs.getShareData();
  }
})