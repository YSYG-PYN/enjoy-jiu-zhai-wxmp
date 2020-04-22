// pages/index/appointmentRegister/appointmentRegister.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    departmentItems:[],
    navRighrItems:[],
    hospitalId:'',
    registerType:'',
    cueNav:1,
    curIndex:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   
    var that = this;
    that.data.registerType = options.registerType
    this.data.hospitalId = options.rowId //医院id

    var openid = wx.getStorageSync('user').openid
    wx.request({
      url: 'https://api.seanai.cn/wise/1/hospital/deps',
      method: 'POST',
      data: {
        sessionId: openid,
        hospitalId: that.data.hospitalId,
        pageNo:1,
        pageSize:50
      },
      header: {
        'content-type': 'application/json' //默认值
      },
      success: res => {
        console.log('科室res==',res)
        //获取所有科室
        that.setData({
          departmentItems: res.data.data.items
        })

      }
    });
  },
  //事件处理函数
  switchRightTab: function (e) {
    let depId = e.target.dataset.id;
    wx.navigateTo({
      url: '../chooseDoctor/chooseDoctor?depId=' + depId + '&hospitalId=' + this.data.hospitalId + '&registerType=' + this.data.registerType,

      // url:'../chooseDoctorType/chooseDoctorType',
      // url:'../chooseDoctor/chooseDoctor',
      // url:'../confirmAppoint/confirmAppoint'
    })
   
  },
 
 
})