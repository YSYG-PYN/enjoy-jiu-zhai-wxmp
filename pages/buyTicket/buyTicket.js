// pages/buyTicket/buyTicket.js
var getTicketList = require("./../../data/test-data.js")

Page({

	/**
	 * 页面的初始数据
	 */
	data: {
        values: '',
        value: 4.5,
		ticketList: [],
		show: false,
		actions: [],

	},
	showAll() {
		this.setData({
			show: true,
			actions: [{
					name: '九寨沟县'
				},
				{
					name: '黑水县'
				},
				{
					name: '理县'
				},
				{
					name: '松潘县'
				},
				{
					name: '阿坝县'
				}
			]
		});
	},
	showSome() {
		this.setData({
			show: true,
			actions: [{
					name: '综合排序'
				},
				{
					name: '低价优先'
				},
				{
					name: '高价优先'
				},
				{
					name: '好评优先'
				},
				{
					name: '距离优先'
				}
			]
		});
	},
	onSelect(event) {
		// console.log(event.detail)
		this.setData({
			show: false
		})
	},
	clickMask() {
		this.setData({
			show: false
		})
	},
	toTicketDetail(e) {
		let ticketid = e.currentTarget.dataset.ticketid;
		// console.log(e.currentTarget)
		// 跳转到购买门票详情页时，带门票的id
		wx.navigateTo({
			url: '/pages/buyTicket/ticketDetail/ticketDetail?ticketid=' + ticketid,
		})
	},
	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function(options) {
		this.setData({
			ticketList: JSON.parse(getTicketList.ticketList)
		})
	},

	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady: function() {

	},

	/**
	 * 生命周期函数--监听页面显示
	 */
	onShow: function() {

	},

	/**
	 * 生命周期函数--监听页面隐藏
	 */
	onHide: function() {

	},

	/**
	 * 生命周期函数--监听页面卸载
	 */
	onUnload: function() {

	},

	/**
	 * 页面相关事件处理函数--监听用户下拉动作
	 */
	onPullDownRefresh: function() {

	},

	/**
	 * 页面上拉触底事件的处理函数
	 */
	onReachBottom: function() {

	},

	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage: function() {

	}
})
