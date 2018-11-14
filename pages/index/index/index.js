//index.js
//获取应用实例
let url = "https://www.xiaochongleyuan.com/api";
const app = getApp();
const apiFuncs = require("../../../utils/apiFuncs.js");

Page({
  data: {
    lists: [],
    images: [],
    cate_id: 1,
    height: 0,
    pageNo: 1,
    currentType: "newest"
  },

  /**
   * 搜索
   */
  search: function(e) {
    console.info(" [ index.js ] ================= search >>>>>> e = ", e);
    let data = e.detail.value;
    if (!data) {
      wx.showToast({
        title: '请输入要搜索的内容',
        icon: "none"
      });
      return;
    }
    wx.navigateTo({
      url: '/pages/index/search/search?key=' + data,
    });
  },

  /** 
   * 修改分类
   */
  changeType: function(e) {
    console.info(" [ index.js ] ============= changeType >>>>> e = ", e);
    let that = this,
      data = e.currentTarget.dataset;
    that.setData({
      currentType: data.type
    });
  },

  changeCate: function(e) {
    let that = this;
    //console.log(e);
    let cate_id = e.currentTarget.dataset.id;
    that.setData({
      cate_id: cate_id
    });
    wx.showLoading({
      title: '数据加载中',
      mask: true,
    })
    wx.request({
      url: url + '/bqb/images',
      data: {
        cate_id: cate_id
      },
      success(res) {
        that.setData({
          images: res.data.data
        });
      },
      complete() {
        wx.hideLoading();
      }
    })
  },
  onLoad: function() {
    let that = this;
    wx.getSystemInfo({
      success: function(res) {
        that.setData({
          height: res.windowHeight - 80
        })
      },
    })
    wx.request({
      url: url + '/bqb/lists',
      success(res) {
        that.setData({
          lists: res.data.data
        });
      }
    })
    wx.request({
      url: url + '/bqb/images?cate_id=' + that.data.cate_id + "&start=" + that.data.pageNo,
      success(res) {
        that.setData({
          images: res.data.data
        });
      }
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    let that = this;
    that.setData({
      initKey: ""
    })
  },

  jumpToShare: function(e) {
    let [that, raw, src, faceId] = [this, e.currentTarget.dataset.raw, e.currentTarget.dataset.src, e.currentTarget.dataset.faceid];
    console.info(" raw = ", raw);
    console.info(" src = ", src);
    wx.navigateTo({
      url: '/pages/subpage/share/share?src=' + src + '&raw=' + raw + "$faceId=" + faceId,
    })
  },
  getmore: function() {
    this.setData({
      pageNo: this.data.pageNo + 1
    });
    let that = this;
    wx.request({
      url: url + '/bqb/images',
      header: {
        'content-type': 'application/json' // 默认值
      },
      data: {
        start: that.data.pageNo,
        cate_id: that.data.cate_id
      },
      success: function(res) {
        //console.log(res.data)
        if (res.data.data.length == 0) {
          wx.showToast({
            title: '已经加载全部',
          })
        }
        that.setData({
          images: that.data.images.concat(res.data.data)
        });
      },
    })

  },
  onShareAppMessage() {

  }
})