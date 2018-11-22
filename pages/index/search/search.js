const apiFuncs = require("../../../utils/apiFuncs.js");
const funcs = require("../../../utils/funcs.js");

Page({

  /**
   * 页面的初始数据
   */
  data: {
    initKey: "",
    faceList: []
  },

  /**
   * 加载更多
   */
  loadMore: function() {
    let that = this;
    that.searchCall(that.data.initKey, that.data.pageNo);
  },

  /**
   * 搜索
   */
  search: function(e) {
    console.info(" [ index.js ] ================= search >>>>>> e = ", e);
    let that = this,
      data = e.detail.value;
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
    that.searchCall(data);
  },

  /**
   * 调用搜索
   */
  searchCall: function(key, pageNo = 1) {
    let that = this;
    apiFuncs.search(key, pageNo).then(res => {
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
  onLoad: function(options) {
    console.info(" [search.js ] =============== onLoad >>>>> options = ", options);
    let that = this,
      key = options.key;
    // 获取屏幕高度
    wx.getSystemInfo({
      success: function(res) {
        that.setData({
          height: res.windowHeight - 80
        })
      },
    });
    that.setData({
      initKey: key
    });
    that.searchCall(key);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {
    return funcs.getShareData();
  }
})