// pages/buyTicket/ticketDetail/ticketDetail.js
var getIndexData = require("./../../../data/test-data")
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		value: 3,
		swiperImg: [],
		indicatorDots: true,
		circular: true, //是否衔接
		autoplay: true,
		interval: 5000,
		duration: 1000,
		vertical: false,
		indicatorColor: "#aaa", //原点颜色
		contentObj: [],
		ticketContent:[],//门票列表
		flag:true,
	},
	closeList() {
		this.setData({
			flag:!this.data.flag
		})
	},
	toMap() {
		wx.navigateTo({
			url: "/pages/map/map",
		})
	},
	consoleTit(e){
		console.log(e.target)
	},
	toOrderTicket(e) {
		let orderid = e.currentTarget.dataset.orderid
		wx.navigateTo({
			url: '/pages/buyTicket/ticketDetail/orderTicket/orderTicket?orderid=' + orderid,
		})
	},
	toRecommend(){
		wx.navigateTo({
			url: '/pages/buyTicket/ticketDetail/userEvaluate/userEvaluate',
		})
	},
	// showList(){

	// },
	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		let ticketArr=JSON.parse(getIndexData.ticketDetail);
		console.log(ticketArr[0].ticketContent)
		this.setData({
			swiperImg: ticketArr[0].ticketImg,
			ticketContent:ticketArr[0].ticketContent,
			contentObj:ticketArr
		})
		wx.setNavigationBarTitle({
			title: ticketArr[0].ticketAddress
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
