// pages/foodBeverage/foodDetail/foodDetail.js
var getIndexData = require("./../../../data/test-data")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    foodDetailObj: [],
    show: false,
    actions: [
      { name: '使用苹果自带地图', color: '07c160' },
      { name: '高德地图', color: '07c160' }
    ],
    listShow: false,
    result: [],
    checkFlag: false
  },
  goBack() {
    wx.navigateBack({})
  },
  phoneCall: function (e) {
    wx.makePhoneCall({
      phoneNumber: e.currentTarget.dataset.phone,
    })
  },
  toMap() {
    let self = this

    this.setData({
      show: !self.data.show
    })
  },
  closeVan() {
    let self = this
    this.setData({
      show: !self.data.show
    })
    console.log("colse----", self.data.show)

  },
  toMoreSpecialfood() {
    // 显示更多特色美食
    wx.navigateTo({
      url: "/pages/foodBeverage/specialFood/specialFood",
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let arr = JSON.parse(getIndexData.foodList).filter(res => {
      return res.id == options.foodDetailId
    })

    this.setData({
      foodDetailObj: arr
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