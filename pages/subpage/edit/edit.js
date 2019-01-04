import { funcs } from "../../../utils/funcs.js";

Page({

  /**
   * 页面的初始数据
   */
  data: {
    raw: '',
    picWidth: 375,
    picHeight: 0,
    x: 25,
    y: 20,
    windowWidth: 0,
    windowHeight: 0,
    size: 30, // 字体大小
    color: '#000000', // 字体颜色
    typeset: "single",
    line1: '',
    line2: '',
    path: '',
    display: 'none',
    currentOption: "color",
    colorList: ["#000000", "#4F4F4F", "#828282", "#BDBDBD", "#E0E0E0", "#F2F2F2",
      "#DA615C", "#E69C59", "#ECC962", "#49935A", "#55AB68", "#87CC9B",
      "#327CF6", "#4581E5", "#4F9BD6", "#76CAEE", "#B072D3", "#9159D9"
    ],
    sizeList: [{
      name: "很小",
      value: "18"
    }, {
      name: "较小",
      value: "20"
    }, {
      name: "适中",
      value: "25"
    }, {
      name: "较大",
      value: "30"
    }, {
      name: "很大",
      value: "40"
    }],
    typesetList: [{
      name: "单行",
      value: "single"
    }, {
      name: "双行",
      value: "double"
    }],
    currentColor: 0,
    currentSize: 0,
    currentTypeset: 0
  },

  /**
   * 修改类型
   */
  changeOption: function (e) {
    console.info(" [ edit.js ] ================ changeOption >>>>> e = ", e);
    let that = this,
      data = e.currentTarget.dataset;
    that.setData({
      currentOption: data.option
    })
  },

  /**
   * 第一行文字
   */
  inputLine1: function (res) {
    this.setData({
      line1: res.detail.value
    });
  },

  /**
   * 第二行文字
   */
  inputLine2: function (e) {
    this.setData({
      line2: e.detail.value
    });
  },

  onLoad: function (options) {
    let that = this;
    this.setData({
      raw: options.raw
    });
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          windowWidth: res.windowWidth,
          windowHeight: res.windowHeight
        })
        wx.getImageInfo({
          src: options.raw,
          success: function (res) {
            that.setData({
              picHeight: res.height * that.data.windowWidth / res.width,
              picWidth: that.data.windowWidth,
              path: res.path
            });
          }
        })
      }
    })

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
    if (wx.getStorageSync('has_gen')) {
      let that = this;
      const ctx = wx.createCanvasContext('my');
      ctx.drawImage(that.data.raw, 0, 0, that.data.picWidth, that.data.picHeight)
      ctx.draw(false);
      console.log('重新加载图片');
      wx.removeStorageSync('has_gen');
    }
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
  },

  move: function (e) {
    //console.log(e);
    let [x, y] = [e.touches[0].pageX, e.touches[0].pageY];
    if (x < 20) x = 20;
    if (x > 320) x = 320;
    if (y > (this.data.picHeight - 20)) y = this.data.picHeight - 20;
    this.setData({
      x: x,
      y: y
    })
  },

  /**
   * 修改文字大小
   */
  changeSize: function (e) {
    let data = e.currentTarget.dataset;
    this.setData({
      size: data.size,
      currentSize: data.index
    });
  },

  /**
   * 修改文字颜色
   */
  changeColor: function (e) {
    let data = e.currentTarget.dataset;
    this.setData({
      color: data.color,
      currentColor: data.index
    });
  },

  /**
   * 修改文字排版
   */
  changeTypeset: function (e) {
    let that = this,
      data = e.currentTarget.dataset;
    that.setData({
      typeset: data.value,
      currentTypeset: data.index
    });
  },

  generate: function () {
    // let that = this;
    let fontColor = this.data.color;
    if (!this.data.line1) {
      wx.showToast({
        title: '请输入文字',
        icon: 'none'
      })
      return false;
    }
    wx.showLoading({
      title: '生成表情包中',
    })
    this.setData({
      display: ''
    });
    let that = this;
    const ctx = wx.createCanvasContext('my');
    ctx.drawImage(that.data.path, 0, 0, that.data.picWidth, that.data.picHeight)
    //console.log(ctx);
    ctx.setFontSize(that.data.size);
    ctx.setFillStyle(fontColor); // TODO 
    ctx.fillText(that.data.line1, that.data.x, that.data.y + 30);
    if (that.data.line2 !== "") {
      ctx.fillText(that.data.line2, that.data.x, that.data.y + that.data.size / 1.1 + 30);
    }
    ctx.draw(false, () => {
      wx.setStorageSync('has_gen', true)
      console.log('已经进入draw');
      wx.canvasToTempFilePath({
        x: 0,
        y: 0,
        width: that.data.picWidth,
        height: that.data.picHeight,
        destWidth: that.data.picWidth,
        destHeight: that.data.picHeight,
        canvasId: 'my',
        success: function (res) {
          console.log(res.tempFilePath + '-------')
          wx.previewImage({
            urls: [res.tempFilePath],
          })
        },
        fail(res) {
          console.log(res);
        },
        complete() {
          wx.hideLoading();
        }
      })
    });
  }
})