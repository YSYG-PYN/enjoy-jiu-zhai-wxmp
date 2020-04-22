// pages/discover/travelNotes/travelNotes.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    statusBarHeight: app.globalData.statusBarHeight,
		idx:"0",
    dataArray: [
      {
        "id": '0',
        "name": "全部",
      },
      {
        "id": '1',
        "name": "官方推荐",
      },
      {
        "id": '2',
        "name": "住宿",
      },
      {
        "id": '3',
        "name": "自驾游",
      },
      {
        "id": '4',
        "name": "游记",
      },
    ],
    travelNotes: [{
      "id": "1",
      "image": "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3465919251,1354762031&fm=26&gp=0.jpg",
      "title": "成都九寨全景区定制3日导游讲解 定制游",
      "site":"当地必打卡",
      "name":"肖满娣",
      "date":"2020-01-08"
    }, {
        "id": "2",
        "image": "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3465919251,1354762031&fm=26&gp=0.jpg",
        "title": "成都九寨全景区定制3日导游讲解 定制游",
        "site": "冬日九寨",
        "name": "肖娣娣",
        "date": "2020-01-06"
      },]
  },
  //头部返回按钮
  backToPreviousClick() {
    wx.navigateBack({

    })
  },
	// 导航点击事件 
  selectDataTab(e) {
		this.setData({
			idx:e.target.dataset.text.id
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