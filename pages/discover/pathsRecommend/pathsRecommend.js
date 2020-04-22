// pages/discover/pathsRecommend/pathsRecommend.js
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
        "name": "2日",
      },
      {
        "id": '2',
        "name": "3日",
      },
      {
        "id": '3',
        "name": "4日",
      },
      {
        "id": '4',
        "name": "5日",
      },
    ],
    pathsRecommend:[{
      "id":"001",
      "image":"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3465919251,1354762031&fm=26&gp=0.jpg",
      "title":"九寨沟4天3夜游玩",
      "tag": ["全程12个景点","适合全年"],
      "ranking":"九寨沟人气榜第1名"
    },
      {
        "id": "002",
        "image": "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3465919251,1354762031&fm=26&gp=0.jpg",
        "title": "神仙池-花海5日游",
        "tag": ["全程12个景点", "适合全年"],
        "ranking": "九寨沟人气榜第2名"
      },
      {
        "id": "003",
        "image": "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3465919251,1354762031&fm=26&gp=0.jpg",
        "title": "九寨沟4天3夜游玩",
        "tag": ["全程12个景点", "适合全年"],
        "ranking": "九寨沟人气榜第4名"
      }, {
        "id": "004",
        "image": "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3465919251,1354762031&fm=26&gp=0.jpg",
        "title": "九寨沟4天3夜游玩",
        "tag": ["全程12个景点", "适合全年"],
        "ranking":"九寨沟人气榜第3名"
      }]
  }, 
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