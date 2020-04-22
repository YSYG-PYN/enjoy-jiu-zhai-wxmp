// pages/my/personInfoManage/personInfoManage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
    index: 0,
    multiIndex: [0, 0],
    array: ['游客(普通)', '游客(携带儿童)', '游客(有慢病史)', '游客(携带儿童且有慢病史)'],
    index: 0,
    multiArray: [['本地人', '游客'],['本地人']],
    objectMultiArray: [
      [
        {
          "tourist_id": 1,      //第一级
          "typeName": "本地人",
        },
        {
          "tourist_id": 2,      //第一级
          "typeName": "游客"
        }
      ],
      [
        {
          "tourist_id": 3,      //第一级
          "typeName": "本地人"
        }
      ]
    ],
    selectType:[],
    rowId:'',//用户主键
    doctorList:[],
    touristType:'',
    touristTypeArrayData: [
      {
        "tourist_id": 1,      //第一级
        "typeName": "本地人",
        "nextList": [
          {
            "tourist_id": 3,    //第二级
            "typeName": "本地人"
          },
        ]
      },
      {
        "tourist_id": 2,
        "typeName": "游客",
        "nextList": [
          {
            "tourist_id": 4,
            "typeName": "游客(普通)"
          },
          {
            "tourist_id": 5,
            "typeName": "游客(带小孩)"
          },
          {
            "tourist_id": 6,
            "typeName": "游客(慢病)"
          },
          {
            "tourist_id": 7,
            "typeName": "游客(带小孩兼慢病)"
          },
        ]
      }
    ],

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
    // this.setData({
    //   patientData: res.data.data
    // })

    // /user/userDetail
    var that = this
    var openid = wx.getStorageSync('user').openid
    wx.request({
      url: 'https://api.seanai.cn/wise/1/user/userDetail',
      method: 'POST',
      data: {
        openId: openid,
      },
      header: {
        'content-type': 'application/json' //默认值
      },
      success: res => {
        console.log('输出当前的归属类型--',res)
        that.data.selectType= res.data.data
        that.data.rowId = res.data.data.rowId
       
        var childFlag = res.data.data.childFlag
        var diseaseFlag = res.data.data.diseaseFlag
        var ordinaryFlag = res.data.data.ordinaryFlag
        var touristFlag = res.data.data.touristFlag  //是否游客
        var selsectTouristType; //1、普通，2、慢病，3、携带儿童，4、慢病且携带儿童
         if(touristFlag){ //是游客 
             if(childFlag){ //带小孩
               if(diseaseFlag){ //慢病
                 that.data.multiIndex = [1,3]
                 that.data.index = 3;
                 selsectTouristType =4
               }else{ //非慢病
                 that.data.multiIndex = [1, 1]
                 that.data.index = 1;
                 selsectTouristType = 3
               }
             }else{//不带小孩
               if (diseaseFlag) { //慢病
                 that.data.multiIndex = [1, 2]
                 that.data.index = 2;
                 selsectTouristType = 2
               } else { //非慢病
                 that.data.multiIndex = [1, 0]
                 that.data.index = 0;
                 selsectTouristType = 1
               }  
             }
         }else{ //是本地人
         that.data.multiIndex = [0,0]
         }
        that.data.touristType = selsectTouristType
        that.bindDoctorRequestData();
        // console.log('that.multiIndex', that.data.multiIndex)
        that.setData({
          // multiIndex: that.data.multiIndex,
          // multiArray:that.data.multiArray
          index:that.data.index
        })
      }
    });

  },
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
    var that = this
    var openid = wx.getStorageSync('user').openid
    var childFlag;
    var diseaseFlag;
    var ordinaryFlag;
    var touristFlag;
    var selsectTouristType; //1、普通，2、慢病，3、携带儿童，4、慢病且携带儿童
    if (e.detail.value == '0') { 
      touristFlag = 1
      selsectTouristType = 1
      childFlag = 0
      diseaseFlag = 0
      ordinaryFlag = 1
    } else if (e.detail.value == '1') {
      touristFlag = 1
      selsectTouristType = 3
      childFlag = 1
      diseaseFlag = 0
      ordinaryFlag = 0

    } else if (e.detail.value == '2') {
      touristFlag = 1
      selsectTouristType = 2
      childFlag = 0
      diseaseFlag = 1
      ordinaryFlag = 0

    } else if (e.detail.value == '3') {
      touristFlag = 1
      childFlag = 1
      selsectTouristType = 4
      diseaseFlag = 1
      ordinaryFlag = 0
    }
    that.data.touristType = selsectTouristType
    wx.request({
      url: 'https://api.seanai.cn/wise/1/user/userModify',
      method: 'POST',
      data: {
        rowId: that.data.rowId,
        touristFlag: touristFlag,
        childFlag: childFlag,
        diseaseFlag: diseaseFlag,
        ordinaryFlag: ordinaryFlag
      },
      header: {
        'content-type': 'application/json' //默认值
      },
      success: res => {
        // console.log('修改000的归属类型--', res)
        if (res.data.retCode == '0') {
          wx.showToast({
            title: res.data.retMsg,
            icon: 'success',
            duration: 3000,
            mask: true
          });
          that.bindDoctorRequestData();
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
  },

  bindMultiPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      multiIndex: e.detail.value
    })
    var that = this
    var openid = wx.getStorageSync('user').openid
    var childFlag ;
    var diseaseFlag ;
    var ordinaryFlag ;
    var touristFlag ;
     if(e.detail.value[0]=='0'){
       touristFlag = 0
       childFlag = 0
       diseaseFlag = 0
       ordinaryFlag = 0
     }else if(e.detail.value[0]=='1'){
       touristFlag = 1
       if (e.detail.value[1] == '0') {
         ordinaryFlag = 1
         childFlag = 0
         diseaseFlag = 0
       }else if(e.detail.value[1]=='1'){
         ordinaryFlag = 0
         childFlag = 1
         diseaseFlag = 0
       }else if(e.detail.value[1]=='2'){
         ordinaryFlag = 0
         childFlag = 0
         diseaseFlag = 1
       }else if(e.detail.value[1]=='3'){
         ordinaryFlag = 0
         childFlag = 1
         diseaseFlag = 1
       }
       
     }
    
    wx.request({
      url: 'https://api.seanai.cn/wise/1/user/userModify',
      method: 'POST',
      data: {
        rowId: that.data.rowId,
        touristFlag: touristFlag,
        childFlag: childFlag,
        diseaseFlag: diseaseFlag,
        ordinaryFlag: ordinaryFlag,
      },
      header: {
        'content-type': 'application/json' //默认值
      },
      success: res => {
        console.log('修改000的归属类型--', res)
        if (res.data.retCode=='0'){
          wx.showToast({
            title: res.data.retMsg,
            icon: 'success',
            duration: 3000,
            mask: true
          }); 
          that.bindDoctorRequestData();   

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

  },

   bindDoctorRequestData:function(){
     var that=this;
     wx.request({
       url: 'https://api.seanai.cn/wise/1/user/hdList',
       method: 'POST',
       data: {
         userId: that.data.rowId,
         touristType: that.data.touristType
       },
       header: {
         'content-type': 'application/json' //默认值
       },
       success: res => {
         console.log('绑定医师列表--', res)
        //  that.data.selectType = res.data.data
         
         that.setData({
           doctorList: res.data.data
         })
       }
     });
   },

  bindMultiPickerColumnChange: function (e) {
    console.log('修改的列为', e.detail.column, '，值为', e.detail.value);
    var data = {
      multiArray: this.data.multiArray,
      multiIndex: this.data.multiIndex
    };
    data.multiIndex[e.detail.column] = e.detail.value;
    switch (e.detail.column) {
      case 0:
        switch (data.multiIndex[0]) {
          case 0:
            data.multiArray[1] = ['本地人'];
            // data.multiArray[2] = [];
            break;
          case 1:
            data.multiArray[1] = ['游客(普通)', '游客(带小孩)', '游客(慢病)', '游客(带小孩和慢病))'];
            // data.multiArray[2] = ;
            break;
        }
        data.multiIndex[1] = 0;
        break;

    }
    console.log(data.multiIndex);
    this.setData(data);
  },
  
   bindPickerChange_hx: function (e) {
    var that = this;
    console.log('picker发送选择改变，携带值为', e);

    var index = e.detail.value
    if (this.data.patientData.length > 0) {
      that.data.visitPersionId = this.data.patientData[index].rowId
      console.log('visitPersionId', that.data.visitPersionId)
      that.setData({   //给变量赋值
        index: index,  //每次选择了下拉列表的内容同时修改下标然后修改显示的内容，显示的内容和选择的内容一致
      })

    } else {


    }

  },
})