
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hospitalItems: [],
    navLeftItems: [],
    navRighrItems: [],
    registerType:'',
    cueNav: 1,
    curIndex: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const that = this;
    that.data.registerType = options.registerType
    var openid = wx.getStorageSync('user').openid
    wx.request({
      url: 'https://api.seanai.cn/wise/1/hospital/list',
      method: 'POST',
      data: {
        sessionId: openid,
      },
      header: {
        'content-type': 'application/json' //默认值
      },
      success: res => {
        console.log('医院res==', res)
        that.setData({
          hospitalItems: res.data.data.items
        })

      }
    });
  
  },
  //事件处理函数
  switchNextTab: function (e) {
    let rowId = e.target.dataset.id,
      index = parseInt(e.target.dataset.index);
    // console.log("rowId==" + rowId,'index=='+index);
    wx.navigateTo({
      url: '../appointmentRegister/appointmentRegister?rowId=' + rowId +'&registerType='+this.data.registerType,
    })
   
  },
 

})