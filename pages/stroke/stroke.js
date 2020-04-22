// pages/stroke/stroke.js
var getIndexData = require("./../../data/test-data.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
	strokeList:[],
	showList:false,
	hotActive:[],
	specialRecommend:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
		this.setData({
			// strokeList:JSON.parse(getIndexData.strokeList),
			hotActive:JSON.parse(getIndexData.hotActive),
			specialRecommend:JSON.parse(getIndexData.specialRecommend)
		})
		console.log(this.data.hotActive)
		if(this.data.strokeList.length<=0){
			this.setData({
				showList:true
			})
		}
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