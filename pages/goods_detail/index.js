// pages/goods_detail/index.js
import { request } from "../../request/index.js";
Page({

  /**
   * Page initial data
   */
  data: {
    goodsObj: {}

  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    //console.log(options)
    const { goods_id } = options;
    this.getGoodsDetail(goods_id)

  },
  getGoodsDetail(goods_id) {
    request({
      url: "/goods/detail",
      data: { goods_id }
    }).then(res => {
      const goodsObj = res.data.message;
      this.setData({

        goodsObj
      })
    })
  }



})