// pages/buyTicket/confrimOrder/confirmOrder.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pchecked:false,
    wchecked:false
  },
  ponChange(event) {
    if(this.data.wchecked==true){
      this.setData({
        wchecked: !event.detail,
        pchecked: event.detail
      });
     }else{
     this.setData({
      pchecked: event.detail
     })
     }
  },
  wonChange(event) {
   if(this.data.pchecked==true){
    this.setData({
      wchecked: event.detail,
      pchecked:!event.detail
    });
   }else{
    this.setData({
      wchecked: event.detail,
    })
   }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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