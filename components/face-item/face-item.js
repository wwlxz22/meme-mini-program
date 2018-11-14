// components/face-item/face-item.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    raw: String,
    full: String
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    _navigateToShare: function() {
      let that = this;
      wx.navigateTo({
        url: '/pages/subpage/share/share?raw=' + that.properties.raw + "&src=" + that.properties.full
      });
    }
  }
})