// pages/buyTicket/ticketDetail/fillOrder/flillOrder.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    checked:false,
    show:false,
    gshow:false
  },
  onChange(event) {
    this.setData({
      checked: event.detail
    });
  },
  toDetail(){
    this.setData({
      show:true
    })
    console.log(1111)
  },
  oncolse(){
    this.setData({
      show:false,
      gshow:false
    })
  },
  colse(){
    this.setData({
      show:false,
      gshow:false
    })
  },
  choose_present_time(){
    this.setData({
      show:false,
      gshow:false
    })
   
  },
  toPay(){
 wx.navigateTo({
			url: '/pages/buyTicket/confrimOrder/confirmOrder',
		})
  },
  toCommand(){
    this.setData({
      gshow:true
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {

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