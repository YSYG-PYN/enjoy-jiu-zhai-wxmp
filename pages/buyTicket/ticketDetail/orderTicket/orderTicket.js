// pages/buyTicket/ticketDetail/orderTicket/orderTicket.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		show: false,
		cshow: false,
		time: '',
		ashow: false,
		btnList: [
			{
				id: 1,
				btnTime: '今天10-18',
				btnChoose: '不可订',
				active: '',
			},
			{
				id: 2,
				btnTime: '今天10-19',
				btnChoose: '不可订',
				active: '',
			},
			{
				id: 3,
				btnTime: '周二',
				btnChoose: '不可订',
				active: '',
			}
		]
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		this.setData({
			show: true
		})
	},
	choose_time() {
		this.setData({
			show: false,
			cshow: false
		})
		wx.navigateTo({
			url: '/pages/buyTicket/ticketDetail/fillOrder/flillOrder',
		})
	},
	choose_more_time() {
		this.setData({
			show: false,
			cshow: true
		})
	},
	closeToPev() {
		this.setData({
			show: true,
			cshow: false
		})
	},
	getCalendarData(e) { // 监听日历数据
		var self = this
		self.data.time = ''
		// console.log(e.detail)
		this.setData({
			time: self.data.time + e.detail.nowYear + e.detail.nowMonth + e.detail.nowDate
		})
	},
	choose_present_time() {
		this.setData({
			cshow: false
		})
		// console.log(this.data.time)
		wx.navigateTo({
			url: '/pages/buyTicket/ticketDetail/fillOrder/flillOrder',
		})
	},
	changeColor(e) {
		var oIndex = e.currentTarget.dataset.change-1
		var array = this.data.btnList;
		array.forEach((item, index, arr) => {
			var sItem = "btnList[" + index + "].active";
			this.setData({
				[sItem]: " "
			})
			if (index == oIndex) {
				var oSelected = "btnList[" + index + "].active"//这里需要将设置的属性用字符串进行拼接
				this.setData({
					[oSelected]: "active"
				})
			}
		})
		console.log()
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
		this.setData({
			show: true
		})
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
