import { request } from "../../request/index.js";
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

    ],
    goodsList:[]

  },
  totalpage:1,
  QueryParams:{
    query:"",
    cid:"",
    pagenum:1,
    pagesize:10
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

    this.QueryParams.cid=options.cid;
    console.log(options);
    this.getGoodsList();

  },
  getGoodsList(){
    request({
      url:"/goods/search",
      data:this.QueryParams
    }).then(res=>{
      console.log(res.data);
      const {goods}=res.data.message;
      const total=res.data.message.total;
      this.totalpage=Math.ceil(total/this.QueryParams.pagesize);
      console.log(this.totalpage);


      this.setData({
        goodsList:[...this.data.goodsList,...goods]
      })
    })
    

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
  onReachBottom(){
    console.log(this.QueryParams.pagenum);
    console.log(this.totalpage);

    if(this.QueryParams.pagenum<this.totalpage){
      this.QueryParams.pagenum++;
      this.getGoodsList();

    }else{
      console.log("没有下一页书据了");
      wx.showToast({
        title: '没有下一页书据了'
       
      });
        
    }
    

  }

  
})