// pages/my/reservationRecordDetail/reservationRecordDetail.js
var util = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    reserveId:'',

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    var recordData = JSON.parse(options.recordData)
    console.log('recordDetail--', recordData) 
    this.data.reserveId = recordData.reserveId;
    var createTime = util.formatTimeTwo(recordData.createTime, 'Y/M/D h:m:s')
    this.setData({
      depName: recordData.depName,
      doctorName: recordData.doctorName,
      hospitalName: recordData.hospitalName,
      reserveNumber: recordData.reserveNumber,
      reserverTime: recordData.reserverTime, //预约会诊时间
      reserveStatus: recordData.reserveStatus,
      visitPersonName: recordData.visitPersonName,
      createTime: createTime, //预约时间
      week: recordData.week,
      price: recordData.price,
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

  cancelReservationTap:function(){
    var that = this;
    var openid = wx.getStorageSync('user').openid
    console.log('this.data.reserveId--', this.data.reserveId)
    wx.request({
      url: 'https://api.seanai.cn/wise/1/reserve/delReserve',
      method: 'POST',
      data: {
        sessionId: openid,
        reserveId: this.data.reserveId,
        
      },
      header: {
        'content-type': 'application/json' //默认值
      },
      success: res => {
        console.log('res==', res)
        if(res.data.retCode=='0'){
          wx.showToast({
            title: res.data.retMsg,
            icon: 'none',
            duration: 3000,
            mask: true
          })
        }
        wx.navigateBack({
          url:'../reservationRecord/reservationRecord'
        })
        
      }
    });

  }

 
})