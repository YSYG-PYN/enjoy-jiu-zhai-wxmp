
Component({
  properties: {
    banner: {
      type: Object,//类型
    },
    informNews: {
      type: Object,//类型
    },
    reportMesage: {
      type: Object,//类型
    }
  },
  methods: {


    //轮播图跳转详情
    onSwiperTap: function (event) {
      var index = event.currentTarget.dataset.index
      // console.log('hospitalId--', hospitalId);
      wx.navigateTo({
        url: '../appointHome/hospitalIntroduceDetail/hospitalIntroduceDetail?hosOverview=' + this.properties.banner[index].hosOverview,
      })
    },

    toAppointmentRegister: function () {
      wx.navigateTo({
        url: '../appointHome/chooseHospital/chooseHospital?registerType=' + 1
      })
    },
    toAppointmentTodayRegister: function () {
      wx.navigateTo({
        url: '../appointHome/chooseHospital/chooseHospital?registerType=' + 2
      })
    },
    toEmergencyGuide: function () {
      wx.navigateTo({
        url: '../appointHome/emergencyGuide/emergencyGuide',
      })

    },
    toPatientFlow: function () {
      wx.navigateTo({
        url: '../appointHome/patientFlow/patientFlow',
      })

    },


    informNewsDetailTap: function (e) {
      console.log('infordetailtap-', e)
      var index = e.currentTarget.dataset.index;
      wx.navigateTo({
        url: '../appointMy/reservationRecordDetail/reservationRecordDetail?recordData=' + JSON.stringify(this.properties.informNews[index]),
      })

    },

    reportDetailTap: function (e) {
      console.log('reportDetailTap-', e)
      var index = e.currentTarget.dataset.index;
      console.log('report点击数据-', this.properties.reportMesage[e.currentTarget.dataset.index])
      wx.navigateTo({
        url: '../appointMy/reportDetail/reportDetail?checkReport=' + this.properties.reportMesage[index].checkReport + '&reportId=' + e.currentTarget.dataset.id,
      })

    },

   
  }
})