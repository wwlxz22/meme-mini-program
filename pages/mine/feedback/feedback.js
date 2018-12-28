import {
  apiFuncs
} from "../../../utils/apiFuncs.js";

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 提交反馈
   */
  feedback: function(e) {
    console.info(" [ feedback.js ] ========= feedback >>>>>> e = ", e);
    let data = e.detail.value;
    if (!data.title || !data.content) {
      wx.showToast({
        title: '请输入反馈的内容和标题',
        icon: "none"
      });
    } else {
      apiFuncs.feedback(data.title, data.content).then(res => {
        if (res.code == 2000) {
          wx.showToast({
            title: '感谢您的反馈',
            icon: "none",
            duration: 2000,
            mask: true
          });
          setTimeout(() => {
            wx.navigateBack({})
          }, 2000);
        }
      });
    }
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

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