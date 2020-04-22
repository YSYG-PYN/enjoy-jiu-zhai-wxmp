// pages/discover/tourGuide/tourGuide.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    statusBarHeight: app.globalData.statusBarHeight,
			idx:"0",//控制导航背景色
		dataArray: [
		  {
		    "id": '0',
		    "name": "全部",
		  },
		  {
		    "id": '1',
		    "name": "综合排序",
		  },
		  {
		    "id": '2',
		    "name": "天数",
		  },
		  {
		    "id": '3',
		    "name": "出发地",
		  }
		],

    tourGuide: [{
      "id": "1",
      "image": "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3465919251,1354762031&fm=26&gp=0.jpg",
      "title": "成都九寨全景区定制3日导游讲解 定制游",
      "price": "200",
      "grade": "7.4",
      "salesVolume": "200",
      "traffic":"豪华大巴车"
    }, {
      "id": "2",
        "image": "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2786251743,1770017086&fm=26&gp=0.jpg",
        "title": "成都九寨全景区定制3日大巴（九寨黄龙温赏月）",
      "price": "100",
      "grade": "8.4",
      "salesVolume": "150",
        "traffic": "豪华大巴车"
    }, {
      "id": "3",
        "image": "http://img1.imgtn.bdimg.com/it/u=1809801005,166014818&fm=26&gp=0.jpg",
      "title": "成都九寨全景区定制3日导游讲解 定制游",
      "price": "200",
      "grade": "7.4",
      "salesVolume": "200",
        "traffic": "豪华大巴车"
    }]
  },
  // 头部返回按钮
  backToPreviousClick() {
    wx.navigateBack({

    })
  },
	//游记导航按钮
		selectDataTab(e) {
			this.setData({
				idx:e.currentTarget.dataset.text.id
			});
		},
	
  // 旅行社详情
  travelDetails(){
      wx.navigateTo({
        url: './travelDetails/travelDetails',
      })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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