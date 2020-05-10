// pages/buyTicket/buyTicket.js
var getProductList = require("./../../data/test-data.js");

Page({

	/**
	 * 页面的初始数据
	 */
  data: {
    productsList: [],
    show: false,
    radio: "1",
  },
  showAll() {
    this.setData({
      show: true,
      actions: [{
          name: '唐卡'
      },
      {
          name: '珍惜草药'
      },
      {
          name: '藏刀'
      },
      {
          name: '风情饰品'
      },
      {
          name: '纺织品'
      }]
    });
  },
  showSome() {
    this.setData({
      show: true,
      actions: [{
                name: '综合排序'
            },
            {
                name: '低价优先'
            },
            {
                name: '高价优先'
            },
            {
                name: '好评优先'
            },
            {
                name: '销量优先'
            }
      ]
    });
  },
    onClose(){
        this.setData({
            show: false,
        });
    },
  onSelect(event) {
    // console.log(event.detail)
    this.setData({
      show: false
    })
  },
  clickMask() {
    this.setData({
      show: false
    })
  },
    toFeaturesProducts() {
        wx.navigateTo({
            url: '/pages/featuresProducts/featuresProductsDetail/featuresProductsDetail',
        })
    },
    onChange(event) {
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
	/**
	 * 生命周期函数--监听页面加载
	 */
  onLoad: function (options) {
    this.setData({
        productsList: JSON.parse(getProductList.productsList),
        productsDetailList: JSON.parse(getProductList.productsDetailList)
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
