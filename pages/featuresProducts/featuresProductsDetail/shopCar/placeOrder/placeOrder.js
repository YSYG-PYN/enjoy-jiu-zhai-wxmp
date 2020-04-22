var getShopCarGoodsList = require("./../../../../../data/test-data.js");

Page({

  /**
   * 页面的初始数据
   */
  data: {
      totalPrice: 0,
      show: false,
      zz: true,
      radio: '1',
      actions: [
          {
              name: '选项'
          },
          {
              name: '选项'
          },
          {
              name: '选项',
              subname: '副文本',
              openType: 'share'
          }
      ]
  },

  onClose() {
      this.setData({ show: false });
  },
  onSelect(event) {
      console.log(event.detail);
  },
  toggleActionsheet3() {
      this.toggle('show');
  },
  toggle(type) {
      this.setData({
          [type]: !this.data[type]
      });
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
          items: JSON.parse(getShopCarGoodsList.shopCarGoodsList)
      });
      this.toTotalPrice();
  },

  // 总价
  toTotalPrice: function() {
      var items = this.data.items;                  // 获取购物车列表
      var total = 0;
      for (var i = 0; i < items.length; i++) {         // 循环列表得到每个数据
          total += parseInt(items[i].goods.price);     // 所有价格加起来
          total=total
      }

      this.setData({                                // 最后赋值到data中渲染到页面
          items: items,
          totalPrice: total
      });
      console.log(this.data.totalPrice)
  },

  toSuccessfulPayment() {
      wx.navigateTo({
          url: "/pages/featuresProducts/featuresProductsDetail/successfulPayment/successfulPayment"
      })
  },
  toAddressList() {
      wx.navigateTo({
          url: "/pages/featuresProducts/featuresProductsDetail/shopCar/placeOrder/addressList/addressList"
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
