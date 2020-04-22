// pages/index/data/data.js
Component({

	/**
	 * 页面的初始数据
	 */
	data: {

	},
	// 允许插槽
	options: {
		multipleSlots: true
	},
	properties: {
		showImage: {
			type: Object, //展示的轮播图片信息
			default: []
		},
		indicatorDots: {
			type: 'boolean',
			default: true //是否显示面板上的点
		},
		autoplay: {
			type: 'boolean',
			default: false //自动播放
		},
		interval: {
			type: 'boolean',
			default: false //自动切换间隔时间
		},
		circular: {
			type: 'boolean',
			default: false //是否衔接
		},
		indicatorColor:{
			type:String,
			default:"#ccc"
		}
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function(options) {

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
