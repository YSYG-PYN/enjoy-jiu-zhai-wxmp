// pages/my/personal/personal.js
import Dialog from '@vant/weapp/dialog/dialog';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show: false,
    images: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=378824344,1185609431&fm=26&gp=0.jpg',
    gender:"请选择",
    nan:'男',
    nv:'女',
    secrecy:'保密',
    userInfo:'',
    login:false
  },



 
/* 控制弹窗的显示与隐藏 */
  showPopup() {
    this.setData({ show: true });
  },
  onClose() {
    this.setData({ show: false });
  },
  /*选择性别 */
  nan(){
    this.setData({ gender: '男', show: false})
  },
  nv(){
    this.setData({ gender: '女', show: false })
  },
  secrecy() {
    this.setData({ gender: '保密', show: false })
  },
  
  // 生日
  birthday: function (e) {
    console.log(e.detail.value)
    this.setData({
      startTime:
        e.detail.value
    })
  },


  /* 跳转绑定手机号 */
  bindingPhone(){
    wx.navigateTo({
      url: '../bindingPhone/bindingPhone',
    })
  },
  unbind() {
    wx.showModal({
      content: '确定解除与微信账号的关联关系吗？',
      success(res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  quit() {
    wx.showModal({
      content: '确定退出登录',
      confirmText:'退出登录',
      success(res) {
        if (res.confirm) {
          console.log('用户点击确定')
          // wx.reLaunch({
          //   url: '../my',
          // })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
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
  onShow: function (){
    let userInfo = wx.getStorageSync('userInfo')
    this.setData({
      userInfo: userInfo
    })
    if (userInfo != '') {
      this.setData({
        login: true
      })
      if (userInfo.gender == 1) {
        this.setData({ gender: '男' })
      } else if (userInfo.gender == 2) {
        this.setData({ gender: '男' })
      } else {
        this.setData({ gender: '保密' })
      }
    }else{
      this.setData({gender:'请选择'})
    }
   
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