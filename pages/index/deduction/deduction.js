// pages/index/deduction/deduction.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showLoading:false,
    hasMore:false,
    resNewsData:[
      {
        id:'0101',
        price:'200',
        score:'4.6分',
        imgUrl:'',
        title:'印象九寨',
        content:'观赏精彩藏羌歌舞，领略藏羌文化神秘魅力',
        createTime:'2020-03-11',
        sales:'月销1.8万',
      },
      {
        id: '0102',
        price: '200',
        score: '4.7分',
        imgUrl: '',
        title: '印象九寨',
        content: '观赏精彩藏羌歌舞，领略藏羌文化神秘魅力',
        createTime: '2020-03-11',
        sales: '月销1.6万',
      }
    ]
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

  },
  toActivityDetail(){
    wx.navigateTo({
      url: '../deduction/deductionDetail/deductionDetail',
    })
  }
})