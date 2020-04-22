// pages/hotel/search/details/details.js
const app = getApp();
Page({

  // clickColor: function () {
  //   this.setData({
  //     background: "#4B9AED"
  //   })
  // },
  onChange(event) {
    // wx.showToast({
    //     // title: `切换到标签 ${event.detail.name}`,
    //     // icon: 'none'
    // });
    this.setData({
      activeNames: event.detail,
    })
  },
  Switch(){
    console.log(222)
    this.setData({
      xianshi:!this.data.xianshi
    })
  },
  bookRoom: function (e) {
    let aa = e.currentTarget.dataset.index
    this.setData({
        index:e.currentTarget.dataset.index
    })
    if(e.currentTarget.dataset.index === 0){
      wx.navigateTo({
        url: "/pages/hotel/search/details/bookRoom/bookRoom",
      })
    }
  },
  Collect: function () {
    this.setData({
      background: "yellow"
    })
  },
  //点击调用地图
  map() {
    console.log(1);
  },
  aa: function () {
    this.setData({
      show: !this.data.show,

    })
    console.log(this.data.show)
  },
  backToPreviousClick() {
    wx.navigateBack({

    })
  },
  //拨打电话
  Tel: function () {
    wx.makePhoneCall({
      phoneNumber: '0286160199', //这个是我的手机号，模拟测试
      success: function () {
        console.log("拨打电话成功！")
      },
      fail: function () {
        console.log("拨打电话失败！")
      }
    });
  },
  //点击伸缩
  aa: function () {
    this.setData({
      show: !this.data.show,
    })
    console.log(this.data.show)
  },
  //点击跳转更多评论
  Sincerity: function () {
    // console.log(123)
    wx.navigateTo({
      url: "/pages/hotel/search/userComment/userComment"
    })
  },
  //点击查看企业资质
  Aptitude: function () {
    console.log(222);
    this.setData({

    })
  },
  //点击查找房间
  Home: function () {
    console.log(3333);
    this.setData({

    })
  },
  //点击跳转点评详情
  comment: function () {
    console.log(222);
    wx.navigateTo({
      url: "/pages/hotel/search/details/user_Comment/user_Comment"
    })
  },
  //点击跳转房源实拍
  Pic: function () {
    wx.navigateTo({
      url: '/pages/hotel/search/liveShot/liveShot',
      success: function (res) {
        // success
      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
      }
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
    xianshi:false,
    // xing:true,
    statusBarHeight: app.globalData.statusBarHeight,
    active: 1,
    head: [
      {
        id: "22",
        name: "酒店详情",
      },
      {
        id: "23",
        name: "入住须知",
      },
      {
        id: "24",
        name: "用户点评"
      },
      {
        id: "25",
        name: "企业资质"
      }
    ],
    pic: [
      {
        id: "30",
        img: "http://img3.imgtn.bdimg.com/it/u=3718982380,1647966333&fm=11&gp=0.jpg"
      },
      {
        id: "30",
        img: "http://img1.imgtn.bdimg.com/it/u=3590915963,2517811332&fm=26&gp=0.jpg"
      },
      {
        id: "30",
        img: "http://img2.imgtn.bdimg.com/it/u=1821703029,2619320097&fm=26&gp=0.jpg"
      },
      {
        id: "30",
        img: "http://img0.imgtn.bdimg.com/it/u=3919846956,1571053870&fm=26&gp=0.jpg"
      },
      {
        id: "30",
        img: "http://img3.imgtn.bdimg.com/it/u=3718982380,1647966333&fm=11&gp=0.jpg"
      },
    ],
    home: [
      {
        id: "33",
        img: "http://img3.imgtn.bdimg.com/it/u=3718982380,1647966333&fm=11&gp=0.jpg",
        name: '标准双人床',
        size: "30m²",
        window: "有窗",
        two: "双床1.2m",
        chenck: "入住当天18:00前可免费取消",
        moeny: "￥267",
        order: "订",
        pay: "在线付"
      },
      {
        id: "34",
        img: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=4053443723,695555357&fm=26&gp=0.jpg",
        name: '大床房',
        size: "30m²",
        window: "有窗",
        two: "双床1.2m",
        chenck: "入住当天18:00前可免费取消",
        moeny: "￥267",
        order: "订",
        pay: "在线付"
      },
      {
        id: "35",
        img: "https://ns-strategy.cdn.bcebos.com/ns-strategy/upload/fc_big_pic/part-00789-2247.jpg",
        name: '豪华房',
        size: "30m²",
        window: "有窗",
        two: "双床1.2m",
        chenck: "入住当天18:00前可免费取消",
        moeny: "￥267",
        order: "订",
        pay: "在线付"
      }
    ],
    hour: [
      {
        id: "36",
        img: "http://img3.imgtn.bdimg.com/it/u=3718982380,1647966333&fm=11&gp=0.jpg",
        name: '标准双人床',
        size: "30m²",
        window: "有窗",
        two: "双床1.2m",
        approve: "可住时段:",
        timer: "9:00-18:00,连住4小时",
        chenck: "入住当天18:00前可免费取消",
        moeny: "90",
        order: "订",
        pay: "在线付"
      },
      {
        id: "37",
        img: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=4053443723,695555357&fm=26&gp=0.jpg",
        name: '大床房',
        size: "30m²",
        window: "有窗",
        two: "双床1.2m",
        approve: "可住时段:",
        timer: "9:00-18:00,连住4小时",
        chenck: "入住当天18:00前可免费取消",
        moeny: "90",
        order: "订",
        pay: "在线付"
      },

    ],
    activeNames: ['1'],
    show: 'false',
    background: "",
    id: ""
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