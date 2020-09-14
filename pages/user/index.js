// pages/user/index.js
Page({

  /**
   * Page initial data
   */
  data: {
    userinfo:[]

  },


  onShow: function () {
    const userinfo=wx.getStorageSync("userInfo");
    this.setData({
      userinfo
    })
      

  },


})