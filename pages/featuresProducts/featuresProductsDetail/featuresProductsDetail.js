// pages/buyTicket/buyTicket.js
var getProductSwiperList = require("./../../../data/test-data.js");

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
        indicatorColor: "#aaa", //原点颜色
        banner: [],
        // background: [],
        // indicatorDots: true, //是否显示面板上的点
        // autoplay: true, //自动播放
        // interval: 2000, //自动切换间隔时间
        // duration: 10, //滑动动画时长
        // circular: true, //是否衔接
        // indicatorColor: "#aaa", //原点颜色
        lineCommandData: [], //路线推荐
        hotSpotsData: [], //热门景点
        hotFoodData: [], //美食推荐
        selectData: [], //精选推荐
        //     motto: 'Hello World',
        //     userInfo: {},
        //     hasUserInfo: false,
        //     canIUse: wx.canIUse('button.open-type.getUserInfo')
        shopNum: 2,
        index: 0,
        show: false
    },

    toshop() {
        wx.navigateTo({
            url: '/pages/featuresProducts/featuresProductsDetail/shop/shop',
        })
    },

    toshopCar() {
        wx.navigateTo({
            url: '/pages/featuresProducts/featuresProductsDetail/shopCar/shopCar',
        })
    },

    toPayment() {
        wx.navigateTo({
            url: '/pages/featuresProducts/featuresProductsDetail/payment/payment'
        })
    },

    handle() {
        var that = this;
        that.data.shopNum++;
        that.setData({
            shopNum: that.data.shopNum
        })
    },
    onClickIcon() {
        this.data.index++;
        console.log(this.data.index);

    },

    onClose() {
        this.setData({ show: false });
    },

    showPopup() {
        this.setData({ show: true });
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.setData({
            proDetailSwiperList: JSON.parse(getProductSwiperList.proDetailSwiperList)
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
