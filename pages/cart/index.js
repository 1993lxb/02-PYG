// pages/cart/index.js
import { getSetting, chooseAddress, openSetting } from "../../utils/asyncWx.js";
import regeneratorRuntime from '../../lib/runtime/runtime';
Page({

  /**
   * Page initial data
   */
  data: {
    address: {},
    cart: [],
    allchecked: false,
    totalPrice: 0,
    totalNum: 0
  },
  onShow: function () {
    const address = wx.getStorageSync("address");
    const cart = wx.getStorageSync("cart") || [];
    let allchecked = true;
    let totalPrice = 0;
    let totalNum = 0;

    cart.forEach(v => {
      if (v.checked) {
        totalPrice += v.goods_price * v.num;
        totalNum += v.num;

      } else {
        allchecked = false;

      }

    });
    allchecked = cart.length ? allchecked : false;

    this.setData({
      address,
      cart,
      allchecked,
      totalPrice,
      totalNum
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
  handleChooseAddress() {
    wx.getSetting({
      success: (result) => {
        const scopeAddress = result.authSetting["scope.address"];
        if (scopeAddress === true || scopeAddress === undefined) {
          wx.chooseAddress({
            success: (result1) => {
              result1.all = result1.provinceName + result1.cityName + result1.countyName + result1.detailInfo;

              wx.setStorageSync("address", result1);

            }
          });
        } else {
          wx.openSetting({
            success: (result2) => {
              wx.chooseAddress({
                success: (result3) => {
                  result3.all = result3.provinceName + result3.cityName + result3.countyName + result3.detailInfo;
                  wx.setStorageSync("address", result3);
                }
              });
            },

          });

        }
      },
    });
    // getSetting().then(result => {
    //   const scopeAddress = result.authSetting["scope.address"];
    //   if (scopeAddress === true || scopeAddress === undefined) {
    //     chooseAddress().then(result1 => {
    //       console.log(result1)
    //     })
    //   } else {
    //     openSetting().then(result2 => {
    //       chooseAddress().then(result3 => {
    //         console.log(result3)
    //       })
    //     })

    //   }

    // })

  }
  // async handleChooseAddress() {
  //   try {
  //     // 1 获取 权限状态
  //     const res1 = await getSetting();
  //     const scopeAddress = res1.authSetting["scope.address"];
  //     // 2 判断 权限状态
  //     if (scopeAddress === false) {
  //       await openSetting();
  //     } 
  //       let address = await chooseAddress();
  //       console.log(address);

  //     // 4 调用获取收货地址的 api

  //     //  address.all = address.provinceName + address.cityName + address.countyName + address.detailInfo;

  //     // 5 存入到缓存中
  //     //   wx.setStorageSync("address", address);

  //   } catch (error) {
  //     console.log(error);
  //   }
  // },
})