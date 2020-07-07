//Page Object
import {request} from "../../request/index.js"
Page({
  data: {
    swiperList:[],
    catesList:[],
    floorList:[]
    
  },
  //options(Object)
  onLoad: function(options) {
    // wx.request({
    //   url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata',
    //   success: (result) => {
    //     console.log(result);
    //     this.setData({
    //       swiperList:result.data.message
    //     })
        
    //   },
    //   fail: () => {},
    //   complete: () => {}
    // });
    
      this.getSwiperList();
      this.getCatesList();
      this.getFloorList()

      // request({url:"https://api-hmugo-web.itheima.net/api/public/v1/home/catitems"}).then(result=>{

      //   this.setData({
      //    catesList:result.data.message
      //      })
      //  });
      //  request({url:"https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata"}).then(result=>{

      //   this.setData({
      //        swiperList:result.data.message
      //      })
      //  })
  },
  getSwiperList(){
    request({url:"https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata"}).then(result=>{

     this.setData({
          swiperList:result.data.message
        })
    })

  },
  getCatesList(){
    request({url:"https://api-hmugo-web.itheima.net/api/public/v1/home/catitems"}).then(result=>{

     this.setData({
      catesList:result.data.message
        })
    })
  }
  ,
  getFloorList(){
    request({url:"https://api-hmugo-web.itheima.net/api/public/v1/home/floordata"}).then(result=>{

     this.setData({
      floorList:result.data.message
        })
    })
  },
  onReady: function() {
    
  },
  onShow: function() {
    
  },
  onHide: function() {

  },
  onUnload: function() {

  },
  onPullDownRefresh: function() {

  },
  onReachBottom: function() {

  },
  onShareAppMessage: function() {

  },
  onPageScroll: function() {

  },
  //item(index,pagePath,text)
  onTabItemTap:function(item) {

  }
});
  