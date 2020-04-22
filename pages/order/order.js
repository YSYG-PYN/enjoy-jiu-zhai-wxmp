// pages/order/order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
		active:0
  },
  //退款详情
  refundDetail: function() {
    wx.navigateTo({
      url: '../refundDetail/refundDetail'
    })
  },
  //使用门票
useTickets:function(){
	 wx.navigateTo({
	  url: '../useTickets/useTickets'
	})
},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
		var that = this
			console.log(options.active)
			that.setData({
				active:options.active
			})
      console.log(that.data.active)
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