// pages/index/confirmAppoint/confirmAppoint.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    patientData:[],
    doctorData:[],
    visitPersionId:'',
    index: 0,

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    this.loadPatientData();
    var doctorData = JSON.parse(options.doctorData)
    that.data.doctorData =doctorData
    console.log('8888--', doctorData)
    that.setData({
      depName: doctorData.depName,
      depTime: doctorData.depTime,
      doctorName: doctorData.doctorName,
      week: doctorData.week,
      price: doctorData.price

    })

  },

  loadPatientData:function(){
    var that = this;
    //获取数据
    var openid = wx.getStorageSync('user').openid
    wx.request({
      url: 'https://api.seanai.cn/wise/1/user/visitPersionList',
      method: 'POST',
      data: {
        sessionId: openid,
      },
      header: {
        'content-type': 'application/json' //默认值
      },
      success: res => {
        console.log("就诊人返回的res=", res.data.data)
        if(res.data.data.length>0){
          that.data.visitPersionId = res.data.data[0].rowId;
        }
        that.data.patientData =res.data.data
        that.setData({
          patientData: res.data.data
        })

      }
    });
  },

  
  bindPickerChange_hx: function (e) {
    var that = this;
    console.log('picker发送选择改变，携带值为', e);
    
    var index = e.detail.value
    if(this.data.patientData.length>0){
      that.data.visitPersionId = this.data.patientData[index].rowId
      console.log('visitPersionId', that.data.visitPersionId)
      that.setData({   //给变量赋值
        index: index,  //每次选择了下拉列表的内容同时修改下标然后修改显示的内容，显示的内容和选择的内容一致
      }) 

    }else{

      
    }

  },

  confirmAppointTap:function(){
    console.log('000---',this.data.patientData)

    if (this.data.patientData.length==0){
      wx.showToast({
        title: '就诊人为空，请去就诊人管理添加就诊人',
        icon: 'none',
        duration: 3000,
        mask: true
      })
      return
    }else{
      var that = this;
      //确认预约
      wx.showModal({
        title: '提示',
        content: '确认预约挂号？',
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
            //获取数据
            var openid = wx.getStorageSync('user').openid
            // console.log('doctorData',that.data.doctorData)
            wx.request({
              url: 'https://api.seanai.cn/wise/1/reserve/reserve',
              method: 'POST',
              data: {
                sessionId: openid,
                doctorId: that.data.doctorData.doctorId,
                week: that.data.doctorData.week,
                depTime: that.data.doctorData.depTime,
                attendanceId: that.data.doctorData.attendanceId,
                visitPersionId: that.data.visitPersionId
              },
              header: {
              },
              success: res => {
                console.log("00110-res=", res)
                if (res.data.retCode == '0') {
                  wx.showToast({
                    title: res.data.retMsg,
                    icon: 'success',
                    duration: 3000,
                    mask: true
                  });
                  wx.switchTab({
                    url: '../../index/index',
                  });
                } else {
                  wx.showToast({
                    title: res.data.retCode,
                    icon: 'none',
                    duration: 3000,
                    mask: true
                  })
                }
              }
            });
          } else {
            console.log('用户点击取消')
          }

        }
      })
    }
  },
  toIndexPage(){
    wx.switchTab({
      url: '../../index/index',
    });
  },
})