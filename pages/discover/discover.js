// pages/discover/discover.js
var getIndexData = require("./../../data/test-data.js")
Page({
	data: {
		value: '',
		// background: [],
		indicatorDots: true, //是否显示面板上的点
		autoplay: true, //自动播放
		interval: 2500, //自动切换间隔时间
		duration: 500, //滑动动画时长
		circular: true, //是否衔接
		indicatorColor: "#aaa", //原点颜色
		//游记
		idx:"0",//导航按钮判断使用哪个class
    issue:false, //发布
background:[
  {
    "id":"0",
    "image": "http://pic1.win4000.com/pic/0/a9/1fc31230689.jpg",
  },
  {
    "id": "1",
    "image": "http://00.minipic.eastday.com/20181107/20181107113749_397467dd7ee4c33d50c368c4d94ed572_6.jpeg",
  },
  {
    "id": "2",
    "image": "http://pic1.win4000.com/wallpaper/2017-12-20/5a3a4c6211406.jpg",
  },
  {
    "id": "3",
    "image":"http://pic1.win4000.com/wallpaper/a/5514fccf71570.jpg",
  },

],

		dataArray: [{
				"id": '0',
				"day": "全部",
			}, {
				"id": '1',
				"day": "官方推荐",
			},
			{
				"id": '2',
				"day": "住宿",
			},
			{
				"id": '3',
				"day": "自驾游",
			},
			{
				"id": '4',
				"day": "游玩攻略",
			},
			{
				"id": '5',
				"day": "当地游",
			},

		],
    recommend: [{
      "id": '0',
      "image":"../../images/discover/scenic1.png",
      "evaluate":"2020如何玩转九寨沟，看这篇攻略就足够了",
      "name":"旅行小飞侠",
	  "good": "233",
	  "headPic": "../../images/discover/headPic1.png",
	  "heartImg": "../../images/discover/heart1.png"
    }, {
        "id": '1',
        "image": "../../images/discover/scenic2.png",
        "evaluate": "九寨沟冬季游玩全攻略（含线路推荐）",
        "name": "跟着我旅行吧",
		"good": "1235",
		"headPic": "../../images/discover/headPic2.png",
		"heartImg": "../../images/discover/heart2.png"
      }, {
        "id": '2',
        "image": "../../images/discover/scenic3.png",
        "evaluate": "去四川九寨沟五天四夜游玩的攻略",
        "name": "大居姑娘",
		"good": "233",
		"headPic": "../../images/discover/headPic3.png",
		"heartImg": "../../images/discover/heart1.png"
      }, {
        "id": '3',
        "image": "../../images/discover/scenic4.png",
        "evaluate": "四川九寨若尔盖，自由行实用攻略。",
        "name": "萌萌哒狗仔呀",
		"good": "233",
		"headPic": "../../images/discover/headPic4.png",
		"heartImg": "../../images/discover/heart1.png"
      }

    ],
	},
	//搜索
	onChange(e) {
		this.setData({
			value: e.detail
		});
	},

	onSearch() {
		Toast('搜索' + this.data.value);
	},

	onClick() {
		Toast('搜索' + this.data.value);
	},
	//跳转发布
	issue() {
		wx.navigateTo({
			url: './issue/issue',
		})
	},
	//跳转导游
	tourGuide() {
		wx.navigateTo({
			url: './tourGuide/tourGuide',
		})
	},
	//跳转游记
	travelNotes() {
		wx.navigateTo({
			url: './travelNotes/travelNotes',
		})
	},
	//跳转旅行社
	travelAgency() {
		wx.navigateTo({
			url: './travelAgency/travelAgency',
		})
	},
	//跳转线路推荐
	pathsRecommend() {
		wx.navigateTo({
			url: './pathsRecommend/pathsRecommend',
		})
	},
	//跳转线路推荐详情
	paths() {
		wx.navigateTo({
			url: './paths/paths',
		})
	},
  //游记导航栏
  selectDataTab(e){
    console.log(e)
    console.log(e.currentTarget.dataset.text.id)
    this.setData({idx: e.currentTarget.dataset.text.id})
  },

  // 监听距离页面顶部的距离
  onPageScroll: function (e) {
    let juli = e.scrollTop
    if(juli>500){
      this.setData({
        issue:true
      })
    }else{
      this.setData({
        issue:false
      })
    }
  },


	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function(options) {
		this.setData({
			lineCommandData: JSON.parse(getIndexData.lineData).slice(0, 3),
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
