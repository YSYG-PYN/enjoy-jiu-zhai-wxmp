// pages/hotel/search/details/bookRoom/bookRoom.js
import Dialog from  "@vant/weapp/dialog/index";
const app = getApp();

Page({
  //房间数
  onChange(event) {
    // event.detail 为当前输入的值
    console.log(event.detail);
  },
  //入住人
  onChange2(event) {
    // event.detail 为当前输入的值
    console.log(event.detail);
  },
  //入住人手机号码
  onChange3(event) {
    // event.detail 为当前输入的值
    console.log(event.detail);
  },
  //入住时间段
  onChange4(event) {
    // event.detail 为当前输入的值
    console.log(event.detail);
  },
  backToPreviousClick(){
    wx.navigateBack({
      delta: 1, // 回退前 delta(默认为1) 页面
    })
  },
  //立即支付跳转
  Immediate:function(){
    wx.navigateTo({
      url: '/pages/hotel/Countersign/Countersign',
    })
  },
  //提交订单
  sunbim:function(){
    this.setData({
      pay:false,
      line:true,
      alipay:false
    })
  },
  /* 提交订单 */
  //支付方式
  Payment(event) {
    this.setData({
      we: event.detail
    });
  },
  clickWechat(event) {
    const { name } = event.currentTarget.dataset;
    this.setData({
      we: name
    });
  },
  //选择房间数
  chooseRoom: function () {
    this.setData({
      xza: !this.data.xza,
      show: !this.data.show,
    })
  },
  //点击明细
  particulars:function(){
    this.setData({
      zhe:false
    })
  },
  zheClose:function(){
    this.setData({
      zhe:true
    })
  },
  //点击明旭
  /* 获取手机通讯录 */
  linkman: function () {
    this.setData({
      show5: true
    })
  },
  getUserInfo(event) {
    console.log(event.detail);
  },
  onClose() {
    wx.addPhoneContact({

    })
    this.setData({ close: false });
  },
  /* 获取手机通讯录 */
  //点击选择特别要求
  choserPeo: function () {
    this.setData({
      show1: true
    })
  },
  Close: function () {
    this.setData({
      show1: false
    })
  },
  //房间姓名
  roomPreop: function () {
    this.setData({
      show2: true
    })
  },
  closeAdd: function () {
    this.setData({
      show2: false
    })
  },
  //新增入住人
  AddPersonal: function () {
    console.log("添加")
  },
  //选择房间数
  select_use: function (e) {
    let index = e.currentTarget.dataset.key
    let name = e.currentTarget.dataset.name
    this.setData({
      state: e.currentTarget.dataset.key,
      value: e.currentTarget.dataset.name,
    });
  },
  //点击调用电话
  clickPhone: function () {
    this.setData({
      zhezhao: false
    })
  },
  Call: function () {
    wx.makePhoneCall({
      phoneNumber: '12334',
    })
  },
  closeZh: function () {
    this.setData({
      zhezhao: true
    })
  },
  /* 点击调用电话 */
  /* 选择要求 */
  choseRequire(event) {
    this.setData({
      result: event.detail
    });
  },
  toggle(event) {
    const { index } = event.currentTarget.dataset;
    const checkbox = this.selectComponent(`.checkboxes-${index}`);
    checkbox.toggle();
  },
  noop() { },
  /* 选择要求 */
  /* 选择入住人 */
  choseAdd: function (event) {
    this.setData({
      radio: event.detail
    });
  },
  onClick(event) {
    const { name } = event.currentTarget.dataset;
    this.setData({
      radio: name
    });
  },
  /* 选择入住人 */
  /**
   * 页面的初始数据
   */
  data: {
    alipay:true,
    line:false,
    pay:true,
    we:'1',
    zhe:true,
    show5: false, 
    zhezhao: true,
    show1: false,
    show2: false,
    radio: '1',
    list: ['无要求', '尽量安排无烟房', '尽量安排吸烟房', '尽量安排有窗房间'],
    result: ['a', 'b'],
    xza: false,
    statusBarHeight: app.globalData.statusBarHeight,
    value: "一间",
    value2: "",
    value3: "",
    value4: "",
    value5: "无",
    value6: "可向酒店索取 (酒店可提供普票、专票)",
    slideIndex: 0,
    show: true,
    use: [
      {
        name: "一间"
      },
      {
        name: "两间"
      },
      {
        name: '三间'
      },
      {
        name: "四间"
      },
      {
        name: "五间"
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