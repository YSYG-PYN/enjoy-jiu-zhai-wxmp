// pages/discover/issue/issue.js
import Toast from '@vant/weapp/toast/toast';
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    statusBarHeight: app.globalData.statusBarHeight,
      vaiue:'',
    siteValue:"",
		idx:"0",
    fileList: [
      { url: 'https://img.yzcdn.cn/vant/leaf.jpg', name: '图片1' },
      // Uploader 根据文件后缀来判断是否为图片文件
      // 如果图片 URL 中不包含类型信息，可以添加 isImage 标记来声明
    ],
		dataArray: [
		  {
		    "id": '0',
		    "name": "#周末怎么玩儿",
		  },
		  {
		    "id": '1',
		    "name": "#国庆九寨开园了",
		  },
		  {
		    "id": '2',
		    "name": "#经典景区",
		  },
		  {
		    "id": '3',
		    "name": "+更多",
		  }
		],
  },
	goBack(){
		wx.navigateBack({
  delta: 1,
	})
	},
  onChange(event) {
    // event.detail 为当前输入的值
    console.log(event.detail);
  },
  //存草稿
  draft(){
      wx.navigateTo({
        url: '../draft/draft',
        })
    Toast('已经保存到草稿，请到[我的笔记查看]');
  },
  //更多
  more(e){
			this.setData({
			idx:e.currentTarget.dataset.text.id
		})
      wx.navigateTo({
        url: '../more/more',
      })
  },
  //添加话题
  myTopic(){
    wx.navigateTo({
      url: '../myTopic/myTopic',
    })
  },
	//游记导航按钮
selectDataTab(e) {
			console.log(e)
			this.setData({
				idx:e.currentTarget.dataset.text.id
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