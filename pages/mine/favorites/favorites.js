const apiFuncs = require("../../../utils/apiFuncs.js");
const funcs = require("../../../utils/funcs.js");

Page({

  /**
   * 页面的初始数据
   */
  data: {
    faceList: [], // 收藏列表
    pageNo: 1,
    height: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let that = this;
    // 获取屏幕高度
    wx.getSystemInfo({
      success: res => {
        that.setData({
          height: res.windowHeight
        });
      },
    });
    that.getFaceList(1);
  },

  /**
   * 加载更多
   */
  loadMore: function(e) {
    let that = this;
    that.getFaceList(that.data.pageNo);
  },

  /**
   * 获取表情
   */
  getFaceList: function(pageNo = 1) {
    let that = this;
    apiFuncs.getFavoriteList(pageNo).then(res => {
      console.info(" [ favorites.js ] ================ getFaceList >>>>> res = ", res);
      if (res.code != 2000) {
        return;
      }
      if (res.data.length > 0) {
        that.setData({
          faceList: that.data.faceList.concat(res.data),
          pageNo: pageNo + 1
        });
      }
    });
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