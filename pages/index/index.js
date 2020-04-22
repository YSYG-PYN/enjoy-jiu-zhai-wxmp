//index.js
//获取应用实例
const app = getApp()
var getIndexData = require("./../../data/test-data.js")

Page({
	data: {
		circular: true, //是否衔接
		indicatorDots: true,
		autoplay: true,
		interval: 5000,
		duration: 1000,
		vertical: false,
		indicatorColor: "#aaa", //原点颜色
		banner: [],
		lineCommandData: [], //路线推荐
		hotSpotsData: [], //热门景点
		hotFoodData: [], //美食推荐
		selectData: [], //精选推荐
		// this.getBoxHeight(leftList, rightList);
		leftList: [],
		rightList: [],
		leftHeight: 0,
		rightHeight: 0,

	},
	toLineDetail: function (e) {
		// console.log()
		let lineDetailId = e.target.dataset.linedetail
		wx.navigateTo({
			url: '/pages/linerecommend/lineDetail/lineDetail?lineDetailId=' + lineDetailId,
		})
	},
	onLoad: function () {
		var that = this
		this.setData({
			background: JSON.parse(getIndexData.swiperData),
			banner: JSON.parse(getIndexData.swiperData),

			lineCommandData: JSON.parse(getIndexData.lineData).slice(0, 3),
			hotSpotsData: JSON.parse(getIndexData.hotSpotsData).slice(0, 3),
			hotFoodData: JSON.parse((getIndexData.hotFoodData)).slice(0, 3),
			selectData: JSON.parse((getIndexData.selectData))
		})
		// var query = wx.createSelectorQuery();
		// for (var i = 0; i < this.data.selectData.length; i++) {
			// query.select('.left_select').boundingClientRect(function (rect) {
			// 	that.setData({
			// 		leftHeight: rect.height
			// 	})
			// 	// console.log(rect.height)
			// }).exec();
			// query.select('.right_select').boundingClientRect(function (rect) {
			// 	that.setData({
			// 		rightHeight: rect.height
			// 	})
			// 	// console.log(rect.height)

			// }).exec();
			// console.log(this.data.leftHeight,this.data.rightHeight)

			// 创建对象
			// var img = new Image();

			// // 改变图片的src
			// img.src = this.data.selectData[i].selectImage;


			// // 判断是否有缓存
			// if (img.complete) {
			// 	// 打印
			// 	console.log(img.height)
			// 	// alert('from:complete  :width:' + img.width + ',height:' + img.height);
			// } else {
			// 	// 加载完成执行
			// 	img.onload = function () {
			// 		//  打印
			// 		// alert('width:' + img.width + ',height:' + img.height);
			// 	}
			// }
		// }

		wx.getLocation({
			type: 'wgs84',
			success(res) {
				const latitude = res.latitude
				const longitude = res.longitude
				const speed = res.speed
				const accuracy = res.accuracy
			}
		})
		// 获取用户位置信息
		//
		// 		if (app.globalData.userInfo) {
		// 			this.setData({
		// 				userInfo: app.globalData.userInfo,
		// 				hasUserInfo: true
		// 			})
		// 		} else if (this.data.canIUse) {
		// 			// 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
		// 			// 所以此处加入 callback 以防止这种情况
		// 			app.userInfoReadyCallback = res => {
		// 				this.setData({
		// 					userInfo: res.userInfo,
		// 					hasUserInfo: true
		// 				})
		// 			}
		// 		} else {
		// 			// 在没有 open-type=getUserInfo 版本的兼容处理
		// 			wx.getUserInfo({
		// 				success: res => {
		// 					app.globalData.userInfo = res.userInfo
		// 					this.setData({
		// 						userInfo: res.userInfo,
		// 						hasUserInfo: true
		// 					})
		// 				}
		// 			})
		// 		}
	},

	//   getUserInfo: function(e) {
	//     console.log(e)
	//     app.globalData.userInfo = e.detail.userInfo
	//     this.setData({
	//       userInfo: e.detail.userInfo,
	//       hasUserInfo: true
	//     })
	//   }
	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage: function () {
		wx.updateShareMenu({
			withShareTicket: true
		})
	},
	// 点击跳转到线路推荐页面
	toLineRecommend() {
		wx.navigateTo({
			url: '/pages/linerecommend/linerecommend',
		})
	},
	// 跳转到天气
	toWeather() {
		console.log(2222)
		wx.navigateTo({
			url: '/pages/weather/weather',
		})
	},
	toBuyTicket() {
		wx.navigateTo({
			url: '/pages/buyTicket/buyTicket',
		})
	},
	toBuyHotel() {
		wx.navigateTo({
			url: '/pages/hotel/hotel',
		})
	},
	toMarketActive() {
		wx.navigateTo({
			url: '/pages/martetActive/martetActive',
		})
	},
	toDeductionActivity() {
		//去演艺活动详情界面
		wx.navigateTo({
			url: '/pages/index/deduction/deduction',
		})
	},
	toFeaturesProducts() {
		wx.navigateTo({
			url: '/pages/featuresProducts/featuresProducts',
		})
	},
	toHotScenicList() {
		wx.navigateTo({
			url: '/pages/hotScenic/hotScenic',
		});
	},
	toRestaurant() {
		wx.navigateTo({
			url: '/pages/foodBeverage/foodBeverage',
		})
	},

	toHotScenicDetail() {
		wx.navigateTo({
			url: '/pages/hotScenic/hotScenicDetail/hotScenicDetail',
		})
	},
	toAppointmentRegist() {
		// 预约挂号
		wx.navigateTo({
			url: '/pages/appointIndex/appointIndex',
		})

	},

	toHotScenicDetail() {
		wx.navigateTo({
			url: '/pages/hotScenic/hotScenicDetail/hotScenicDetail',
		})
	}
})
