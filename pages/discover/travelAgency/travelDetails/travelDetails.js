// pages/discover/travelAgency/travelDetails/travelDetails.js

var getIndexData = require("../../../../data/test-data.js")
Page({

	onShareAppMessage() {
		return {
			title: 'swiper',
			path: 'page/component/pages/swiper/swiper'
		}
	},


	/**
	 * 页面的初始数据
	 */
	data: {
		commodity: true,
		tabEvaluate: false,
		detail: false,

		detailDetail: true,
		detailPaths: false,
		detailCost: false,
		detailNotice: false,
		idx:'0',//游记导航按钮
		toIndex: "",
		viewHeg: 800,
		scrollTop: 0,
		active1: 0,
		background: [],
		indicatorDots: true, //是否显示面板上的点
		autoplay: true, //自动播放
		interval: 2500, //自动切换间隔时间
		duration: 500, //滑动动画时长
		circular: true, //是否衔接
		indicatorColor: "#aaa", //原点颜色
		dataArray: [{
				"id": '0',
				"time": "01/09周四",
				"price": "340"
			},
			{
				"id": '1',
				"time": "01/10周五",
				"price": "360"
			},
			{
				"id": '2',
				"time": "01/11周六",
				"price": "330"
			},
			{
				"id": '3',
				"time": "01/12周日",
				"price": "380"
			},
			{
				"id": '4',
				"time": "01/13周一",
				"price": "340"
			},
		],

		evaluate: [{
			"id": "001",
			"name": "旅游达人",
			"time": "2020-01-04",
			"remark": "非常满意，非常赞👍，感谢旅游安排的行程，客服热情负责，九寨沟非常美丽！！！"
		}, {
			"id": "002",
			"name": "旅游达人",
			"time": "2020-01-04",
			"remark": "非常满意，非常赞👍，感谢旅游安排的行程，客服热情负责，九寨沟非常美丽！！！"
		}, {
			"id": "003",
			"name": "旅游达人",
			"time": "2020-01-04",
			"remark": "非常满意，非常赞👍，感谢旅游安排的行程，客服热情负责，九寨沟非常美丽！！！"
		}],
		paths: [{
			"id": "1",
			"day": "第一天",
			"site": "九寨沟",
			"siteTitle": ["沟口", "瀑布"],
			"time": ["游玩一小时", "休息一晚"],
			"tag1": ["美好的开始", "山川水美"],
			"tag2": ["风景秀丽", "流水潺潺"],
			"title": ["从这里进入九寨沟迎着 清晨的光辉开启一天的行程", "游走瀑布与流泉之间 体验盛大空气养生文化大餐"],
			"image": ["https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2786251743,1770017086&fm=26&gp=0.jpg",
				"http://hbimg.b0.upaiyun.com/80980a7239def04f2763601f340f8de11f3875e1d427c-zjtsfD_fw658"
			],
		}, {
			"id": "2",
			"day": "第二天",
			"site": "九寨沟",
			"siteTitle": ["沟口", "瀑布"],
			"time": ["游玩一小时", "休息一晚"],
			"tag1": ["美好的开始", "山川水美"],
			"tag2": ["风景秀丽", "流水潺潺"],
			"title": ["从这里进入九寨沟迎着 清晨的光辉开启一天的行程", "游走瀑布与流泉之间 体验盛大空气养生文化大餐"],
			"image": ["https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2786251743,1770017086&fm=26&gp=0.jpg",
				"http://hbimg.b0.upaiyun.com/80980a7239def04f2763601f340f8de11f3875e1d427c-zjtsfD_fw658"
			],
		}],
		show: false,
		idx: true,
		tabDetail: true, //控制详情的tab卡的固定定位与否

	},
	goBack() {
		wx.navigateBack({
			delta: 1,
		})
	},
	//顶部tab跳转商品
	commodity() {
		this.setData({
			commodity: true,
			tabEvaluate: false,
			detail: false,
			toIndex: "commodity"
		})
		console.log(1111)
	},
	//顶部tab跳转评价
	tabEvaluate() {
		this.setData({
			commodity: false,
			tabEvaluate: true,
			detail: false,
			toIndex: "evaluateDiv"
		})
	},
	//顶部tab跳转详情
	detail() {
		this.setData({
			commodity: false,
			tabEvaluate: false,
			detail: true,
			toIndex: "detail"
		})
	},

	detailDetail() {
		this.setData({
			detailDetail: true,
			detailPaths: false,
			detailCost: false,
			detailNotice: false,
			toIndex: "detailDetail"
		})
	},
	detailPaths() {
		this.setData({
			detailDetail: false,
			detailPaths: true,
			detailCost: false,
			detailNotice: false,
			toIndex: "detailPaths"
		})
	},
	detailCost() {
		this.setData({
			detailDetail: false,
			detailPaths: false,
			detailCost: true,
			detailNotice: false,
			toIndex: "detailCost"
		})
	},
	detailNotice() {
		this.setData({
			detailDetail: false,
			detailPaths: false,
			detailCost: false,
			detailNotice: true,
			toIndex: "detailNotice"
		})
	},

	//获取距离顶部的距离
	scrollTop(event) {
		// console.log(event.detail.scrollTop)
		this.setData({
			scrollTop: event.detail.scrollTop
		})
		let juli = event.detail.scrollTop
		if (juli < 300) {
			this.setData({
				commodity: true,
				tabEvaluate: false,
				detail: false,
			})
		}
		if (300 <= juli && juli < 750) {
			this.setData({
				commodity: false,
				tabEvaluate: true,
				detail: false,
			})
		}
		if (750 <= juli) {
			this.setData({
				commodity: false,
				tabEvaluate: false,
				detail: true,
			})
		}

		// 控制详情tab的定位与否
		if (740 <= juli) {
			this.setData({
				tabDetail: false
			})
		}
		if (740 > juli) {
			this.setData({
				tabDetail: true
			})
		}
		// 控制详情tab切换
		if (620 <= juli && juli < 1050) {
			this.setData({
				active1: 0
			})
		}
		if (1050 <= juli && juli < 1800) {
			this.setData({
				active1: 1
			})
		}
		if (1800 <= juli && juli < 2000) {
			this.setData({
				active1: 2
			})
		}
		if (2000 <= juli) {
			this.setData({
				active1: 3
			})

		}
		// 控制详情tab的定位与否
		if (740 <= juli) {
			this.setData({
				tabDetail: false
			})
		}
		if (740 > juli) {
			this.setData({
				tabDetail: true
			})
		}
		// 控制详情tab切换
		if (620 <= juli && juli < 1050) {
			this.setData({
				detailDetail: true,
				detailPaths: false,
				detailCost: false,
				detailNotice: false,
			})
		}
		if (1050 <= juli && juli < 1800) {
			this.setData({
				detailDetail: false,
				detailPaths: true,
				detailCost: false,
				detailNotice: false,
			})
		}
		if (1800 <= juli && juli < 2000) {
			this.setData({
				detailDetail: false,
				detailPaths: false,
				detailCost: true,
				detailNotice: false,
			})
		}
		if (2000 <= juli) {
			this.setData({
				detailDetail: false,
				detailPaths: false,
				detailCost: false,
				detailNotice: true,
			})

		}

	},



// 控制更多日期的显示隐藏
	showPopup() {
		this.setData({
			show: true
		});
	},
	onClose() {
		this.setData({
			show: false
		});
		console.log(11111)
	},
	getCalendarData(e) { // 监听日历数据
		var self = this
		self.data.time = ''
		// console.log(e.detail)
		this.setData({
			time: self.data.time + e.detail.nowYear + e.detail.nowMonth + e.detail.nowDate
		})
	},
	//游记导航按钮
		selectDataTab(e) {
      console.log(e.currentTarget.dataset.text)
			this.setData({
				idx:e.currentTarget.dataset.text.id,
        
			});
		},


	//加入购物车
	onClickIcon() {
		Toast('点击图标');
	},
	//立即购买
	onClickButton() {
		Toast('点击按钮');
	},
	
// 监听距离页面顶部的距离
	onPageScroll: function(e) {
		let juli = e.scrollTop
		console.log(juli)
	},


	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function(options) {
		this.setData({
			background: JSON.parse(getIndexData.swiperData),
		})
		console.log(options)
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
