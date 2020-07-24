// pages/cart/index.js
import { getSetting, chooseAddress, openSetting } from "../../utils/asyncWx.js";
import regeneratorRuntime from '../../lib/runtime/runtime';
Page({

  /**
   * Page initial data
   */
  data: {

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
    // wx.getSetting({
    //   success: (result) => {
    //     const scopeAddress = result.authSetting["scope.address"];
    //     if (scopeAddress === true || scopeAddress === undefined) {
    //       wx.chooseAddress({
    //         success: (result1) => {
    //           console.log(result1)
    //         }
    //       });
    //     }else{
    //       wx.openSetting({
    //         success: (result2) => {
    //           wx.chooseAddress({
    //             success: (result3) => {
    //               console.log(result3)
    //             }
    //           });
    //         },
    //         fail: () => {},
    //         complete: () => {}
    //       });

    //     }
    //   },
    // });
    getSetting().then(result => {
      const scopeAddress = result.authSetting["scope.address"];
      if (scopeAddress === true || scopeAddress === undefined) {
        chooseAddress().then(result1 => {
          console.log(result1)
        })
      } else {
        openSetting().then(result2 => {
          chooseAddress().then(result3 => {
            console.log(result3)
          })
        })

      }

    })

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