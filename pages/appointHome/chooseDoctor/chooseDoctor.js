var util = require('../../utils/util.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {

    doctorList:[], 
    resData:[],
    dataArray:[],
    depId:'',
    hospitalId:'',
    dataBackgroundColor:'#0082D7',
    // clickId:'',
    selectData:'',
    idx: 0,
    

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('医生界面options',options)
    // doctor/doctorList
    var that = this;
    var openId = wx.getStorageSync('user').openid;
    var time='';
    if (options.registerType == '1') {//预约挂号
       time = util.getCurrentDate(1);
    }else{ //当天挂号
       time = util.getCurrentDate(0);
    }
    
    that.data.hospitalId = options.hospitalId;
    that.data.depId = options.depId;
    console.log('当前时间', time);
    console.log('传输参数--', openId, that.data.depId, that.data.hospitalId, time)
    wx.request({
      url: 'https://api.seanai.cn/wise/1/doctor/doctorList',
      method: 'POST',
      data: {
        sessionId: openId,
        depId: options.depId,
        hospitalId: options.hospitalId,
        depTime: time
      },
      header: {
        'content-type': 'application/json' //默认值
      },
      success: res => {
        console.log('informtiomdoctor==', res)
        // res.data.data.content
    
        that.setData({
          doctorList: res.data.data
        })

      }
    });
    if (options.registerType=='1'){ //预约挂号
      var dd = new Date();
      dd.setDate(dd.getDate() + 1);
      let time1 = util.formatDate(dd);
      let date = util.getDates(7, time1);

      that.setData({
        dataArray: date
      })
      // console.log('0000-', that.data.monthArray, that.data.dayArray);
      console.log('日期组', date);

    }else if(options.registerType =='2'){ //当天挂号
    

    }

  },




  doctorLoad:function(){
   

  },

  selectDataTab:function(e){
    console.log('dataselect--',e)
    var that = this;
    let index = e.currentTarget.dataset.index; 
    that.setData({
      idx: index
    })  
    var year =  e.currentTarget.dataset.text.year ;
    var month = e.currentTarget.dataset.text.month ;
    var day = e.currentTarget.dataset.text.day ;
    var openid = wx.getStorageSync('user').openid
    var data = year+month+day;
   
    // that.data.doctorList = [];
    // var dataArr = that.data.doctorList;
    
    // var bgColor = this.data.dataBackgroundColor == 'white' ? '#0082D7' : 'white';
    // // 设置背景颜色数据
    // this.setData({
    //   dataBackgroundColor: bgColor
    // });
    console.log('传输参数--', openid, that.data.depId, that.data.hospitalId, data)
    wx.request({
      url: 'https://api.seanai.cn/wise/1/doctor/doctorList',
      method: 'POST',
      data: {
        sessionId: openid,
        depId: that.data.depId,
        hospitalId: that.data.hospitalId,
        depTime: data
      },
      header: {
        'content-type': 'application/json' //默认值
      },
      success: res => {
        console.log('informtiomdoctor==', res)
        // that.data.doctorList = res.data.data
        // res.data.data.content
        that.setData({
          doctorList:res.data.data
        })

      }
    });

    console.log('shijian--',year,month,day)


  },

  toDoctorDetailTap:function(e){
    console.log('3333e--', e)
    var that = this;
    var index = e.currentTarget.dataset.index;
    var count = that.data.doctorList[index].reserveCount - that.data.doctorList[index].alreadyReserveCount;
    // console.log('count',count)
    console.log('传输数据==', that.data.doctorList[index])
    if (count){ 
      wx.navigateTo({
        url: '../chooseDoctorType/chooseDoctorType?doctorData=' + JSON.stringify(that.data.doctorList[index]),
      })  
    }else{

    }
     

  }
  
})