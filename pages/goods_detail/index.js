// pages/goods_detail/index.js
import { request } from "../../request/index.js";
Page({

  /**
   * Page initial data
   */
  data: {
    goodsObj: {}

  },
  goodsInfo: [],

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
      this.goodsInfo = goodsObj;
      this.setData({

        goodsObj: {
          pics: goodsObj.pics,
          goods_price: goodsObj.goods_price,
          goods_name: goodsObj.goods_name,
          goods_introduce: goodsObj.goods_introduce


        }
      })
    })
  },
  handleTap(e) {
    const urls = this.goodsInfo.pics.map(v => v.pics_mid);
    const current = e.currentTarget.dataset.url;
    wx.previewImage({
      current,
      urls
    });

  },
  handleCardAdd() {
    let cart = wx.getStorageSync("cart") || [];
    let index = cart.findIndex(v => v.goods_id === this.goodsInfo.goods_id);
    if (index === -1) {
      this.goodsInfo.num = 1;
      cart.push(this.goodsInfo);

    } else {
      cart[index].num++;


    }
    wx.setStorageSync(
      "cart", cart);
      wx.showToast({
        title: '添加成功',
        icon: 'seccess',
    
        mask: true
       
      });
        
      

  }





})