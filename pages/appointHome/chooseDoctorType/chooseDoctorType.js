

Page({
  data: {
    tabs: ["预约挂号", "医生简介"],
    activeIndex: 0,
    slideOffset: 0,
    slideLeft: 0,
    locked: false,
    doctorData:[],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var doctorData = JSON.parse(options.doctorData)
    that.data.doctorData = doctorData;
    // var patientData = JSON.parse(options.patientData)
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex,
          screenWidth: res.windowWidth,
          depName: doctorData.depName,
          doctorName: doctorData.doctorName,
          gradeDesc: doctorData.gradeDesc,
          doctorDesc: doctorData.doctorDesc,
          depTime: doctorData.depTime,
          week: doctorData.week,
          icon:doctorData.icon,
        });
      }
    });


  },
  refreshbyindex: function (goallist, isMore) {
    if (this.data.locked == true) {
      return;
    } else {
      this.data.locked = true

    }
  },
  tabClick: function (e) {
    console.log(e)
    if (!this.data.locked) {
      this.setData({
        sliderOffset: e.currentTarget.offsetLeft,
        activeIndex: e.currentTarget.id
      })
    }
  },

  appointDoctorTap:function(){
    var  that =this;
    wx.navigateTo({
      url: '../confirmAppoint/confirmAppoint?doctorData=' + JSON.stringify(this.data.doctorData),
    })


  },

})