// pages/hotel/hotelCollect/hotelCollect.js
const app = getApp();
Page({
  
  onClose(){
    console.log(111);
  },
  backToPreviousClick() {
    wx.navigateBack({
      delta: 1, // 回退前 delta(默认为1) 页面
    })
  },
  select_use(e) {
    let index = e.currentTarget.dataset.key
    // console.log(index)
    this.setData({
      state: e.currentTarget.dataset.key,
    });
  },

  /**
   * 页面的初始数据
   */
  data: {
    state:"",
    statusBarHeight: app.globalData.statusBarHeight,
    use: [
      {
        name: "全部"
      },
      {
        name: "九寨沟"
      },
      {
        name: '杭州'
      },
      {
        name: "成都"
      }
    ],
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