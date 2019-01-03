const apiFuncs = require("../../utils/apiFuncs.js");
const funcs = require("../../utils/funcs.js");

Page({

  /**
   * 页面的初始数据
   */
  data: {
    tagList: [], // 分类列表
    height: 0,
  },

  /**
     * 搜索
     */
  search: function (e) {
    console.info(" [ index.js ] ================= search >>>>>> e = ", e);
    let data = e.detail.key;
    console.info(" [ index.js ] ================= search >>>>>> data = ", data);
    wx.navigateTo({
      url: "/pages/subpage/search/search?key=" + data + "&type=tag"
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    // 获取屏幕高度
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          height: res.windowHeight - 60
        });
      },
    });
    // 获取分类列表
    apiFuncs.getRecomTag().then(res => {
      that.setData({
        tagList: res.data
      });
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    return funcs.getShareData();
  }
})