// pages/martetActive/activeDetail/activeDetail.js
var getIndexData = require("./../../../data/test-data.js")

Page({

  /**
   * 页面的初始数据
   */
  data: {
      circular: true, //是否衔接
      indicatorDots: true,
      autoplay: true,
      interval: 5000,
      duration: 1000,
      vertical: false,
      peopleList: [
          {
            id: 1,
            img: "https://bkimg.cdn.bcebos.com/pic/eaf81a4c510fd9f98eb187b12b2dd42a2934a440?x-bce-process=image/resize,m_lfit,w_268,limit_1/format,f_jpg",
            name: "夏明"
          },
          {
              id: 2,
              img: "https://bkimg.cdn.bcebos.com/pic/eaf81a4c510fd9f98eb187b12b2dd42a2934a440?x-bce-process=image/resize,m_lfit,w_268,limit_1/format,f_jpg",
              name: "夏明"
          },
          {
              id: 3,
              img: "https://bkimg.cdn.bcebos.com/pic/eaf81a4c510fd9f98eb187b12b2dd42a2934a440?x-bce-process=image/resize,m_lfit,w_268,limit_1/format,f_jpg",
              name: "夏明"
          },
          {
              id: 4,
              img: "https://bkimg.cdn.bcebos.com/pic/eaf81a4c510fd9f98eb187b12b2dd42a2934a440?x-bce-process=image/resize,m_lfit,w_268,limit_1/format,f_jpg",
              name: "夏明"
          },
          {
              id: 5,
              img: "https://bkimg.cdn.bcebos.com/pic/eaf81a4c510fd9f98eb187b12b2dd42a2934a440?x-bce-process=image/resize,m_lfit,w_268,limit_1/format,f_jpg",
              name: "夏明"
          },
      ]
  },

  toSignUp() {
      wx.navigateTo({
          url: "/pages/martetActive/activeDetail/signUp/signUp"
      })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      this.setData({
          background: JSON.parse(getIndexData.swiperData),
          banner: JSON.parse(getIndexData.swiperData),
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
