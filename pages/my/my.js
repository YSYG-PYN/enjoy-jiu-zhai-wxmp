// pages/my/my.js
Page({
	data: {
		show:false,
    images:'../../images/my/headImg.png',
    login:false,
    userInfo:'',
		incommon: [{
			"id": "0",
			"text": "我的收藏",
			"icon": "../../images/my/wdsc.png",
			"src": "collect"
		},{
			"id": "1",
			"text": "联系客服",
			"icon": "../../images/my/lxkf.png",
			"src": "modalcnt"
		},{
			"id": "2",
			"text": "常用联系人",
			"icon": "../../images/my/cylxr.png",
			"src": "topContacts"
		},{
			"id": "3",
			"text": "收货地址",
			"icon": "../../images/my/shdz.png",
			"src": "site"
		},{
			"id": "4",
			"text": "投诉建议",
			"icon": "../../images/my/tsjy.png",
			"src": "complain"
		},{
			"id": "5",
			"text": "评价问卷",
			"icon": "../../images/my/pjwj.png",
			"src": "questionnaire"
		},{
			"id": "6",
			"text": "上报记录",
			"icon": "../../images/my/sbjl.png",
			"src": "record"
		},]
	},
  /* 跳转登录 */
modalcnt(){
  wx.showModal({
    title: '联系客服',
    content: '0110—12345678',
    success (res) {
      if (res.confirm) {
        console.log('用户点击确定')
      } else if (res.cancel) {
        console.log('用户点击取消')
      }
    }
  })
},
  login(){
    wx.navigateTo({
      url: '../login/login',
    })
  },
    /* 个人中心 */
  personal() {
    wx.navigateTo({
      url: './personal/personal',
    })
  },
  /* 收藏 */
	collect() {
		wx.navigateTo({
			url: '../collect/collect',
		})
	},
  /*全部订单*/
	order() {
		wx.navigateTo({
			url: '../order/order',
		})
	},
	 /* 常用联系人 */
	 topContacts(){
		  wx.navigateTo({
	    url: '../topContacts/topContacts',
	  })
	},
	/* 收货地址 */
	site(){
		console.log(123)
		 wx.navigateTo({
		 	 url: '../site/site',
		 })
	},
	/* 投诉建议 */
	complain(){
		 wx.navigateTo({
			 url: '../complain/complain',
		})
	},
	/* 上报记录 */
	record(){
		 wx.navigateTo({
			 url: '../record/record',
		})
	},
	questionnaire(){
		 wx.navigateTo({
			 url: '../questionnaire/questionnaire',
		})
		
	},
		/* 客服 */
// 	service(){
// 		wx.navigateTo({
// 			 url: '../service/service',
// 		})
// 	},


	obligation(e){
		var active = e.target.dataset.active
		console.log(active)
		 wx.navigateTo({
			 url: '../order/order?active='+active,
		})
	},
	
	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function(options) {
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
    let userInfo = wx.getStorageSync('userInfo')
    this.setData({
      userInfo: userInfo,
    })
    if(userInfo!=''){
      this.setData({
        login:true
      })
    }
    
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
