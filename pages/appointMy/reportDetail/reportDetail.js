// pages/my/reportDetail/reportDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    checkReport:'',

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    console.log('报告checkReport', options)
    
    this.setData({
      checkReport: options.checkReport
    })

  },
  previewImage: function (e) {
    wx.previewImage({
      current: this.data.checkReport, // 当前显示图片的http链接   
      urls: [this.data.checkReport] // 需要预览的图片http链接列表   
    })
    // wx.getImageInfo({// 获取图片信息（此处可不要）
    //   src: 'https://www.cslpyx.com/weiH5/jrkj.jpg',
    //   success: function (res) {
    //     console.log(res.width)
    //     console.log(res.height)
    //   }
    // })

  },




  
})