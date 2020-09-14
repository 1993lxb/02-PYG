// pages/login/index.js
Page({

  /**
   * Page initial data
   */
  data: {

  },

  handleGetUserInfo(e){
    const {userInfo}=e.detail;
    wx.setStorageSync("userInfo", userInfo);
    wx.navigateBack({
      delta: 1
    });
      
      

  }
})