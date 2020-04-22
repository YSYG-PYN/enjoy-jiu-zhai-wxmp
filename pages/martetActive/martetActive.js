// pages/martetActive/martetActive.js
var getIndexData = require("./../../data/test-data.js")

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
  },

  toActiveDetail() {
    wx.navigateTo({
        url: "/pages/martetActive/activeDetail/activeDetail"
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      this.setData({
          background: JSON.parse(getIndexData.swiperData),
          banner: JSON.parse(getIndexData.swiperData),
          rank: JSON.parse(getIndexData.markActiveList),
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
