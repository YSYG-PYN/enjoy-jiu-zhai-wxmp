// pages/index/deduction/deductionDetail/deductionDetail.js
var getDataList = require("./../../../../data/test-data.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    circular: true, //是否衔接
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    vertical: false,
    indicatorColor: "#aaa", //原点颜色
    banner: [],
    ticketCommandData: [], //路线推荐

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      banner: JSON.parse(getDataList.swiperData),
      ticketCommandData: JSON.parse(getDataList.ticketCommand).slice(0, 3),
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

  },
  toBookPage:function(){
     //去预订页面
  },
  toBuyKnowDetail:function(){
    wx.navigateTo({
      url: '../../deduction/buyKnowDetail/buyKnowDetail',
    })
  },
  toRelatedRecommend:function(){
    //相关推荐

  },
  toRelatedDetail:function(){
     //相关推荐详情
  },
  toMap() {
    wx.navigateTo({
      url: "/pages/map/map",
    })
  },
})