// pages/order/index.js
Page({

  /**
   * Page initial data
   */
  data: {
    tabs:[
      {
        id : 0,
        value:'全部',
        isActive:true
      },
      {
        id : 1,
        value:'待付款',
        isActive:false
      },
      {
        id : 2,
        value:'待发货',
        isActive:false
      }
      ,
      {
        id : 3,
        value:'退款/退货',
        isActive:false
      }
    ],

  },
  handletabsItemsChange(e){
    console.log(e);
    const {index}=e.detail;
    let {tabs}=this.data;
    tabs.forEach((v,i)=>i===index?v.isActive=true:v.isActive=false);
    this.setData({
      tabs
    })

  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})