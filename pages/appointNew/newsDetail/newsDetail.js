// pages/news/newsDetail/newsDetail.js
var formatTime = require('../../utils/util.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    newDetailData: [],
    childCategoryId: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.data.childCategoryId = options.detailId
    var newsDetail = JSON.parse(options.newsDetail)
    // console.log('000===', newsDetail)
    // var time=formatTime.formatTimeTwo(newsDetail.createTime,'Y/M/D h:m:s')
    this.setData({
      content: newsDetail.content,
      createTime: newsDetail.createTime,
      imgUrl: newsDetail.imgUrl,
      title: newsDetail.title
    })




  },


  newsDetailLoad: function () {
    var that = this;
    var openid = wx.getStorageSync('user').openid;
    wx.request({
      url: 'https://api.seanai.cn/wise/1/category/newsDetail',
      method: 'POST',
      data: {
        sessionId: openid,
        childCategoryId: that.data.childCategoryId
      },
      header: {
        'content-type': 'application/json' //默认值
      },
      success: res => {
        if (res.data.retCode == "0") {
          // console.log('新闻详情res==', res)
          that.setData({
            // newDetailData:res.data
          });

        } else {
          util.showToast(res.data.retMsg)
        }
      }, fail: res => {

      }
    })

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