// pages/my/addPatientManage/addPatientManage.js
Page({
  data: {
    patientName:'',
    patientCardID:'',
    manageType:'',
    rowId:'',

  },

  patientNameInput:function(e){
    this.setData({
      patientName:e.detail.value
    })

  },
  patientCardIDInput:function(e){
    this.setData({
      patientCardID:e.detail.value
    })

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('009999---',options)
    var that = this;
    if (!options.patientData){
      that.data.manageType = '0';
      wx.setNavigationBarTitle({ title: '添加就诊人' })  
    }else{
      that.data.manageType = '1';
      wx.setNavigationBarTitle({ title: '修改就诊人' })
      var patientData = JSON.parse(options.patientData)
      that.data.rowId = patientData.rowId
      that.setData({
        patientName: patientData.name,
        patientCardID: patientData.cardId
      })
      
    }
    
    

  },

  addPatientTap:function(options){
    console.log('addOptions',options)
    var that = this;
    var name = that.data.patientName;
    var cardID = that.data.patientCardID
    var openid = wx.getStorageSync('user').openid
    if(!name){
      wx:wx.showToast({
        title: '请输入姓名',
        icon: 'none',
      })
      return false
    }else if(!cardID){
      wx:wx.showToast({
        title: '请输入身份证号',
        icon:'non e',
      })
      return false

    }else{
      if (that.data.manageType == '0'){
        cardID = that.data.patientCardID
        wx.request({
          url: 'https://api.seanai.cn/wise/1/user/addVisitPersion',
          method: 'POST',
          data: {
            sessionId: openid,
            name: name,
            cardId: cardID
          },
          header: {
            'content-type': 'application/json' //默认值
          },
          success: res => {
            console.log("添加就诊人返回的res=", res)
            if (res.data.retCode == "就诊人最多添加5个") {
              wx.showToast({
                title: "就诊人最多添加5个",
                icon: 'none',
                duration: 2000,
                mask: true
              })
              return false

            } else {
              wx.showToast({
                title: res.data.retMsg,
                icon: 'success',
                duration: 3000,
                mask: true
              })
              var pages = getCurrentPages();
              var beforePage = pages[pages.length - 2];
              //调用列表页的数据获取函数
              beforePage.loadData();
              wx.navigateBack({
                url: '../patientManageDetail/patientManageDetail',
              })
            }
          }
        });

      }else{ //修改就诊人
        cardID = that.data.patientCardID
        wx.request({
          url: 'https://api.seanai.cn/wise/1/user/modifyVisitPersionInfo',
          method: 'POST',
          data: {
            sessionId: openid,
            visitPersionId:that.data.rowId,
            name: name,
            cardId: cardID
          },
          header: {
            'content-type': 'application/json' //默认值
          },
          success: res => {
            console.log("添加就诊人返回的res=", res)
            if (res.data.retCode == "就诊人最多添加5个") {
              wx.showToast({
                title: "就诊人最多添加5个",
                icon: 'none',
                duration: 2000,
                mask: true
              })
              return false

            } else {
              wx.showToast({
                title: res.data.retMsg,
                icon: 'success',
                duration: 3000,
                mask: true
              })
              var pages = getCurrentPages();
              var beforePage = pages[pages.length - 2];
              //调用列表页的数据获取函数
              beforePage.loadData();
              wx.navigateBack({
                url: '../patientManageDetail/patientManageDetail',
              })
            }
          }
        });
      }



     
    }
  }
})