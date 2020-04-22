// pages/my/patientManageDetail/patientManageDetail.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    patientItems: [{
      id:'1',
      default:"1",
      name: '叶七禾',
      idcard: '3412271994012673',
      txtStyle:''
    },
    {
      id:'2',
      default: "0",
      name: '叶七禾2',
      idcard: '3412271994012673',
      txtStyle: ''
    },
    {
      id: '3',
      default: "0",
      name: '叶七禾3',
      idcard: '3412271994012673',
      txtStyle: ''
    },
    {
      id: '4',
      default: "0",
      name: '叶七禾4',
      idcard: '3412271994012673',
      txtStyle: ''
    }
    ],
    delBtnWidth:180,
    resData:[],
    hasMore:true,
    showloading:true,
    imgServer:'https://img.du-ms.com'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    // this.loadData();
  },

  onShow:function(options){
    this.loadData();
  },
  

  loadData:function(){
    var that = this;
    //获取数据
    var openid = wx.getStorageSync('user').openid
    wx.request({
      url: 'https://api.seanai.cn/wise/1/user/visitPersionList',
      method: 'POST',
      data: {
        sessionId: openid,
      },
      header: {
        'content-type': 'application/json' //默认值
      },
      success: res => {
        console.log("就诊人返回的res=", res.data.data)
        that.setData({
          resData: res.data.data
        })

      }
    });

  },

  edit: function (e) {
    var that = this;
    var id = e.currentTarget.dataset.id;
    var index =e.currentTarget.dataset.index;
    // console.log('传输数据==', that.data.resData[index])
    wx.navigateTo({
      url: '../addPatientManage/addPatientManage?patientData=' + JSON.stringify(that.data.resData[index]),
    })
    //编辑收货地址 省略
  },

  delItem: function (e) {
    var that = this;
    console.log("删除的del--",e)
    var id = e.currentTarget.dataset.id;
    var index = e.currentTarget.dataset.index;
    var openid = wx.getStorageSync('user').openid
    wx.request({
      url: 'https://api.seanai.cn/wise/1/user/delVisitPersion',
      method: 'POST',
      data: {
        sessionId: openid,
        visitPersionId: id
      },
      header: {
        'content-type': 'application/json' //默认值
      },
      success: res => {
        if(res.data.retCode=='0'){
          wx.showToast({
            title: res.data.retMsg,
            icon: 'success',
            duration: 1000,
            mask: true
          })
        }
        that.data.resData.splice(index, 1);
        that.setData({
          resData: that.data.resData
        })

      }
    });

    this.setData({
      resData: this.data.resData
    })
  },
 
})