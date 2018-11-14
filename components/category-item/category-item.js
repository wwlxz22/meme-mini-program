// components/classi-item/classi-item.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    cover: String,
    title: String,
    cid: Number
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
    /**
     * 跳转到图片列表页
     */
    _navigateToList: function() {
      let that = this;
      wx.navigateTo({
        url: '/pages/subpage/list/list?id=' + that.properties.cid + "&category=" + that.properties.title,
      });
    }
  }
})