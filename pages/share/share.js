// pages/share/share.js
const apiFuncs = require("../../utils/apiFuncs.js");

Page({

  /**
   * 页面的初始数据
   */
  data: {
    src: '',
    raw: '',
    faceId: '', // 表情id
  },

  /**
   * 添加或取消收藏
   */
  addFavorite: function() {
    let that = this;
    apiFuncs.addFavorite(that.data.faceId, that.data.favorited ? 0 : 1).then(res => {

    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      src: options.src,
      raw: options.raw,
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

  },
  battle: function(e) {
    let that = this;
    wx.previewImage({
      current: that.data.src, // 当前显示图片的http链接
      urls: [that.data.src] // 需要预览的图片http链接列表
    })
  },
  edit: function() {
    let that = this;
    wx.navigateTo({
      url: '/pages/edit/edit?raw=' + that.data.raw,
    })
  },
  pay: function() {
    wx.requestPayment({
      timeStamp: '',
      nonceStr: '',
      package: '',
      signType: 'MD5',
      paySign: '',
      success(res) {
        console.log('成功了');
        console.log(res);
      },
      fail(res) {
        console.log('失败了');
        console.log(res);
      }
    })
  }
})