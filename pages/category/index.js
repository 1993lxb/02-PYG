import { request } from "../../request/index.js"
Page({


  data: {
    leftMenuList: [],
    rightContentList: [],
    currentIndex: 0,
    scrollTop:0

  },
  cates: [],


  onLoad: function (options) {
    //  this.getCatesList();
    const cates = wx.getStorageSync("cates");
    if (!cates) {
      this.getCatesList();

    }else{
      if(Date.now()-cates.time>1000*60*10){
        this.getCatesList();

      }else{
        this.cates=cates.data;
        let menuList = this.cates.map(v => v.cat_name);
      let contentList = this.cates[0].children;
      this.setData({
        leftMenuList: menuList,
        rightContentList: contentList
      })

      }
    }


  },
  getCatesList() {
    request({
      url: "/categories"
    }).then(res => {
      this.cates = res.data.message;
      wx.setStorageSync("cates", { time: Date.now(), data: this.cates });

      let menuList = this.cates.map(v => v.cat_name);
      let contentList = this.cates[0].children;
      this.setData({
        leftMenuList: menuList,
        rightContentList: contentList
      })

    })
  },
  handleItemTap(e) {
    console.log(e);
    let { index } = e.currentTarget.dataset;
    let contentList = this.cates[index].children;

    this.setData({
      currentIndex: index,
      rightContentList: contentList,
      scrollTop:0

    })


  }


})