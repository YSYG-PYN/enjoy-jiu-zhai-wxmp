var getShopProductList = require("./../../../../data/test-data.js");

Page({

  /**
   * 页面的初始数据
   */
  data: {
    active: 0,
    display: "block",
    display1: "none",
  },

  onChange(event) {
      // event.detail 的值为当前选中项的索引
      this.setData({
          active: event.detail
      });
      if(event.detail == 0){
        this.setData({
            display: "block",
            display1: "none",
        })
      }else if(event.detail == 1){
        this.setData({
            display: "none",
            display1: "block",
        })
      }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      this.setData({
          shopProductList: JSON.parse(getShopProductList.shopProductList)
      })
  },

    toshopMsg() {
        wx.navigateTo({
            url: '/pages/featuresProducts/featuresProductsDetail/shop/shopMsg/shopMsg',
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
