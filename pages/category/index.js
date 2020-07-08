import { request } from "../../request/index.js"
Page({


  data: {
    leftMenuList: [],
    rightContentList: [],
    currentIndex:0

  },
  cates: [],


  onLoad: function (options) {
    this.getCatesList();

  },
  getCatesList() {
    request({
      url: "https://api-hmugo-web.itheima.net/api/public/v1/categories"
    }).then(res => {
      this.cates = res.data.message;
      let menuList = this.cates.map(v => v.cat_name);
      let contentList = this.cates[0].children;
      this.setData({
        leftMenuList: menuList,
        rightContentList: contentList
      })

    })
  }


})