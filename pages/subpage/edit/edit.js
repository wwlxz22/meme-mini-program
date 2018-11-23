const apiFuncs = require("../../../utils/apiFuncs.js");
const funcs = require("../../../utils/funcs.js");

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
    orit: "hor", // 字体方向
    line: "sing", // 行数
    value: '',
    path: '',
    display: 'none',
    currentOption: "color",
    colorList: ["#000000", "#FFFFFF", "#191970", "#87CEEB", "#228B22", "#3CB371", "#FFFF00", "#4B0082", "#FFA500", "#DC143C", "#696969", "#FF1493", "#F5DEB3", "#FFB6C1", "#00FFFF"],
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
      name: "横行单排",
      orit: "hor",
      line: "sing"
    }, {
      name: "横向双排",
      orit: "hor",
      line: "doub"
    }, {
      name: "纵向单排",
      orit: "ver",
      line: "sing"
    }, {
      name: "纵向双排",
      orit: "ver",
      line: "doub"
    }],
  },

  /**
   * 修改类型
   */
  changeOption: function(e) {
    console.info(" [ edit.js ] ================ changeOption >>>>> e = ", e);
    let that = this,
      data = e.currentTarget.dataset;
    that.setData({
      currentOption: data.option
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  input: function(res) {
    //console.log(res);
    this.setData({
      value: res.detail.value
    });
  },
  onLoad: function(options) {
    let that = this;
    this.setData({
      raw: options.raw
    });
    wx.getSystemInfo({
      success: function(res) {
        that.setData({
          windowWidth: res.windowWidth,
          windowHeight: res.windowHeight
        })
        wx.getImageInfo({
          src: options.raw,
          success: function(res) {
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
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
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
  },
  move: function(e) {
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
  changeSize: function(e) {
    let size = e.currentTarget.dataset.size;
    this.setData({
      size: size
    });
  },

  /**
   * 修改文字颜色
   */
  changeColor: function(e) {
    let color = e.currentTarget.dataset.color;
    this.setData({
      color: color
    });
  },

  /**
   * 修改文字排版
   */
  changeTypeset: function(e) {
    let that = this,
      data = e.currentTarget.dataset;

  },

  generate: function() {
    // let that = this;
    let fontColor = this.data.color;
    if (!this.data.value) {
      wx.showToast({
        title: '请输入文字',
        icon: 'loading'
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
    ctx.fillText(that.data.value, that.data.x, that.data.y + 30);
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
        success: function(res) {
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
    //console.log('res');
  }
})