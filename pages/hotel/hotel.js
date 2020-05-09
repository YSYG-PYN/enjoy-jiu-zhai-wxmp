// pages/hotel/hotel.js
const app = getApp();
var getHotelData = require("./../../data/test-data.js");
var util = require("../../utils/util.js")
Page({
    //选择日期
    bindDateChange1: function (e) {
        console.log(e.detail.value)
        this.setData({
            startTime:
                e.detail.value
        })
    },
    bindDateChange2: function (e) {
        this.setData({
            endTime: e.detail.value
        })
    },
    onChange(e) {
        // console.log(e);
        this.setData({
            value: e.detail
        });
    },
    //点击跳转到搜索页面
    Search() {
        wx.navigateTo({
            url: '/pages/hotel/search/search',
        })
    },
    //点击跳转路径到更多
    More() {
        console.log(111)
    },
    //点击跳转到订单
    Order() {
        wx.navigateTo({
            url: '/pages/hotel/Order/Order',
        })
    },
    //点击跳转到收藏
    Collect() {
        wx.navigateTo({
            url: '/pages/hotel/hotelCollect/hotelCollect',
        })
    },
    onInput(event) {
        this.setData({
            currentDate: event.detail
        });
        // console.log(event)
    },
    shosedata(e) {
        this.setData({
            show: !this.data.show
        })
    },
    shosedata1(e) {
        this.setData({
            show1: !this.data.show1
        })
    },
    confirm(event) {
        this.setData({
            riqi: util.js_date_time(event.detail),
            show: true,

        })
    },
    confirm1(event) {
        this.setData({
            riqi1: util.js_date_time(event.detail),
            show1: true

        })
    },
    cancel() {
        this.setData({
            show: true
        })
    },
    cancel1() {
        this.setData({
            show1: true
        })
    },
    /**
     * 页面的初始数据
     */
    data: {
        idx: 0,
        riqi: "",
        riqi1: "",
        swipers: [],
        value: '',
        show: true,
        show1: true,
        // currentDate: new Date().getTime(),
        // minDate: new Date().getTime()
        currentDate: new Date().getTime(),
        minDate: new Date().getTime(),
        formatter(type, value) {
            if (type === 'year') {
                return `${value}年`;
            } else if (type === 'month') {
                return `${value}月`;
            }
            return value;
        },
        dataArray: [
            {
                "id": '0',
                "name": "全部",
            },
            {
                "id": '1',
                "name": "钟点房",
            },
            {
                "id": '2',
                "name": "特价酒店",
            },
            {
                "id": '3',
                "name": "民宿",
            },
            {
                "id": '4',
                "name": "特色酒店",
            },
        ],
    },

    selectDataTab(e) {
        console.log(e.target.dataset);
        this.setData({
            idx:e.target.dataset.text.id
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function () {
        this.setData({
            swipers: JSON.parse(getHotelData.swiperData),
            hotelData: JSON.parse(getHotelData.hotelList)
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
