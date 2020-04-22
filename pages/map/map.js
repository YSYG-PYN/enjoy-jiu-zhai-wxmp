// pages/map/map.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    Height: 0,
    scale: 13,
    latitude: "",//经纬度
    longitude: "",
    markers: [],
    controls: [{//放大缩小
      id: 1,
      iconPath: './../../images/amplify.png',
      position: {
        left: 320,
        top: 100 - 80,
        width: 20,
        height: 20
      },
      clickable: true
    },
    {
      id: 2,
      iconPath: './../../images/reduce.png',
      position: {
        left: 320,
        top: 100 - 50,
        width: 20,
        height: 20
      },
      clickable: true
    }
    ],
    circles: []

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var self = this;

    wx.getSystemInfo({
      success: function (res) {
        //设置map高度，根据当前设备宽高满屏显示
        self.setData({
          view: {
            Height: res.windowHeight/2
          }

        })

      }
    })

    wx.getLocation({
      type: 'wgs84', // 默认为 wgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标
      success: function (res) {

        self.setData({
          latitude: res.latitude,
          longitude: res.longitude,
          markers: [{//位置
            id: "1",
            latitude: res.latitude,
            longitude: res.longitude,
            width: 50,
            height: 50,
            iconPath: "./../../images/position.png",
            title: "哪里"

          }],
          circles: [{//范围
            latitude: res.latitude,
            longitude: res.longitude,
            fillColor: '#7cb5ec88',
            radius: 100,
            strokeWidth: 1
          }]

        })
      }

    })

  },

  // regionchange(e) {
  //   console.log("regionchange===" + e.type)
  // },

  //点击merkers
  markertap(e) {
    // console.log(e.markerId)

    wx.showActionSheet({
      itemList: ["A"],
      success: function (res) {
        console.log(res.tapIndex)
      },
      fail: function (res) {
        console.log(res.errMsg)
      }
    })
  },

  //点击缩放按钮动态请求数据
  controltap(e) {
    var that = this;
    // console.log("scale===" + this.data.scale)
    if (e.controlId === 1) {
      that.setData({
        scale: --this.data.scale
      })
    } else {
      that.setData({
        scale: ++this.data.scale
      })
    }

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

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})