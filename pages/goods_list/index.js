// pages/goods_list/index.js
Page({

  /**
   * Page initial data
   */
  data: {
    tabs:[
      {
        id : 0,
        value:'综合',
        isActive:true
      },
      {
        id : 1,
        value:'销量',
        isActive:false
      },
      {
        id : 2,
        value:'价格',
        isActive:false
      }

    ]

  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

    console.log(options)
  },
  handletabsItemsChange(e){
    console.log(e);
    const {index}=e.detail;
    let {tabs}=this.data;
    tabs.forEach((v,i)=>i===index?v.isActive=true:v.isActive=false);
    this.setData({
      tabs
    })

  }

  
})