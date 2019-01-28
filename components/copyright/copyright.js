// components/items/copyright/copyright.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

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
    call(e) {
      let phone = e.currentTarget.dataset.phone;
      wx.makePhoneCall({
        phoneNumber: phone,
      })
    },
    copy: function (e) {
      let value = e.currentTarget.dataset.value;
      wx.setClipboardData({
        data: value,
        success: function (res) {
          wx.showToast({
            title: "微信号码已复制",
            icon: "none"
          });
        }
      });
    }
  }
})