// pages/discover/paths/paths.js
var getIndexData = require("../../../data/test-data.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
      paths:[{
        "id":"1",
        "day":"第一天",
        "site":"九寨沟",
        "siteTitle":["沟口","瀑布"],
        "time": ["游玩一小时", "休息一晚"],
        "tag1":  ["美好的开始", "山川水美"],
        "tag2": ["风景秀丽", "流水潺潺"],
        "title": ["从这里进入九寨沟迎着 清晨的光辉开启一天的行程", "游走瀑布与流泉之间 体验盛大空气养生文化大餐"],
        "image":["https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2786251743,1770017086&fm=26&gp=0.jpg", "http://hbimg.b0.upaiyun.com/80980a7239def04f2763601f340f8de11f3875e1d427c-zjtsfD_fw658"],
      }, {
          "id": "2",
          "day": "第二天",
          "site": "九寨沟",
          "siteTitle": ["沟口", "瀑布"],
          "time": ["游玩一小时", "休息一晚"],
          "tag1": ["美好的开始", "山川水美"],
          "tag2": ["风景秀丽", "流水潺潺"],
          "title": ["从这里进入九寨沟迎着 清晨的光辉开启一天的行程", "游走瀑布与流泉之间 体验盛大空气养生文化大餐"],
          "image": ["https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2786251743,1770017086&fm=26&gp=0.jpg", "http://hbimg.b0.upaiyun.com/80980a7239def04f2763601f340f8de11f3875e1d427c-zjtsfD_fw658"],
        },
       ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      lineCommandData: JSON.parse(getIndexData.lineData).slice(0, 3),
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})