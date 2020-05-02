// pages/avatar/avatar.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    raw: '',
    picWidth: 375,
    picHeight: 375,
    x: 25,
    y: 20,
    windowWidth: 0,
    windowHeight: 0,
    size: 18, // 字体大小
    color: '#000000', // 字体颜色
    typeset: "single",
    line1: '',
    line2: '',
    path: '',
    display: 'none',
    choices: ['1', '3', '2'],
    avatarUrl: ""
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

  },
  getAvatar: function(e) {
    console.log(e.detail.userInfo)
    let that = this;
    const ctx = wx.createCanvasContext('my');
    ctx.drawImage("http://bqb.static.xiaoshouchen.com/images/faces/FBQ_101385.jpg", 0, 0, that.data.picWidth, that.data.picHeight)
    ctx.draw(false);
  }
})