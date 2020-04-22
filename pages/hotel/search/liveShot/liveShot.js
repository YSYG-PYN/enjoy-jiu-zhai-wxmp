// pages/hotel/search/liveShot/liveShot.js
import Dialog from '../../../../miniprogram_npm/@vant/weapp/dialog/dialog';
const app = getApp();
Page({
  select_use: function (e) {
    let index = e.currentTarget.dataset.key
    console.log(index)
    this.setData({
      state: e.currentTarget.dataset.key,

    });
    if (index === 0) {
      this.setData({
        hideAll: false,
        hideBusines: false,
        hideBusin: false,
        hideBusin2: false,
        hideExterior: false
      })
    }
    if (index === 1) {
      this.setData({
        hideAll: true,
        hideBusines: false,
        hideBusin: true,
        hideBusin2: true,
        hideExterior: true
      })
    } if (index === 2) {
      this.setData({
        hideAll: true,
        hideBusines: true,
        hideBusin: false,
        hideBusin2: true,
        hideExterior: true
      })
    } if (index === 3) {
      this.setData({
        hideAll: true,
        hideBusines: true,
        hideBusin: true,
        hideBusin2: true,
        hideExterior: false
      })
    }
  },
  ExteriorMore: function () {
    this.setData({
      show1: !this.data.show1,
      hide: !this.data.hide
    })
  },
  businessMore: function () {
    this.setData({
      show2: !this.data.show2,
      hideTwo: !this.data.hidea
    })
  },
  bigMore(){
    this.setData({
      show3:!this.data.show3,
      hideOne:!this.data.hideOne,

    })
  },
  userUploading(){
    this.setData({
      show4:!this.data.show4,
      uploading:!this.data.uploading
    })
  },
  exterior(){
    this.setData({
      show5:!this.data.show5,
      exteriorMore:!this.data.exteriorMore
    })
  },
  Reservation: function () {
    console.log(1);

    this.setData({

    })
  },
  onClickShow() {
    this.setData({ show: true });
  },

  onClickHide() {
    // this.setData({ show: false });
  },

  noop() { },
  closeHide: function () {
    this.setData({
      show: false
    })
  },
  // 长按保存图片
  saveImg: function (e) {
    let that = this
    console.log(e.currentTarget.dataset.url);
    let saveUrl = e.currentTarget.dataset.url
    wx.getSetting({
      success(res) {
        //未授权 先授权 然后保存
        if (!res.authSetting['scope.writePhotosAlbum']) {
          wx.authorize({
            scope: 'scope.writePhotosAlbum',
            success(re) {
              that.saveToBlum();

            }
          })
        } else {
          //已授 直接调用保存到相册方法
          that.saveToBlum(saveUrl);
        }
      }
    })

  },
  saveToBlum: function (url) {
    wx.downloadFile({
      url: url,
      success: function (res) {
        wx.saveImageToPhotosAlbum({
          filePath: res.tempFilePath,
          success(result) {
            wx.showToast({
              title: '保存成功',
              icon: 'success'
            })
          }
        })
      }
    })
  },
  onSlideChangeEnd(e){
    //current 改变时会触发change事件，event。detail= {current:current,source:source}
    var that = this;
    this.data.slideIndex = e.detail.current
    console.log('slideIndex--',e.detail.current+1);
    that.setData({
      slideIndex: e.detail.current,
      swiper:e.detail.current+1,
    })
    // console.log(this.data.pic);
    let list = this.data.pic[this.data.slideIndex];
  },
  downloadImg: function (e) {
    //保存的图片的地址
    let list = this.data.pic[this.data.slideIndex];　　　　　
    // console.log(list['img'])　　　　　　　　//触发函数
    // console.log(e.currentTarget.dataset.url)
    wx.downloadFile({
      url: list['img'],　　　　　　　//需要下载的图片url
      success: function (res) {　　　　　　　　　　　　//成功后的回调函数
        wx.saveImageToPhotosAlbum({　　　　　　　　　//保存到本地
          filePath: res.tempFilePath,
          success(res) {
            wx.showToast({
              title: '下载成功',
              icon: 'success',
              duration: 2000
            })
          },
          fail: function (err) {
            if (err.errMsg === "saveImageToPhotosAlbum:fail auth deny") {
              wx.openSetting({
                success(settingdata) {
                  console.log(settingdata)
                  if (settingdata.authSetting['scope.writePhotosAlbum']) {
                    console.log('获取权限成功，给出再次点击图片保存到相册的提示。')
                  } else {
                    console.log('获取权限失败，给出不给权限就无法正常使用的提示')
                  }
                }
              })
            }
          }
        })
      }
    });
  },
  swiperBorder(){
    let list = this.data.pic[this.data.slideIndex];
    if(list===0){
      this.setData({
        width:46
      })
    }else if(list===1){
      this.setData({
        width:92
      })
    }
  },
  /**
   * 页面的初始数据
   */
  data: {
    use: [
      {
        name: "全部"
      },
      {
        name: "外景"
      },
      {
        name: '客房'
      },
      {
        name: "设施"
      }
    ],
    pic: [
      {
        id: "30",
        img: "http://img3.imgtn.bdimg.com/it/u=3718982380,1647966333&fm=11&gp=0.jpg",
      },
      {
        id: "31",
        img: "http://img1.imgtn.bdimg.com/it/u=3590915963,2517811332&fm=26&gp=0.jpg",
      },
      {
        id: "32",
        img: "http://img2.imgtn.bdimg.com/it/u=1821703029,2619320097&fm=26&gp=0.jpg",
      },
    ],
    show: false,
    show1: 'false',
    hide: false,
    show2: 'false',
    hideOne:false,
    show3:'false',
    uploading:false,
    show4:"false",
    exteriorMore:false,
    show5:"false",
    hideTwo: false,
    hideAll: false,
    hideBusines: false,
    hideBusin: false,
    hideBusin2: false,
    hideExterior: false,
    idata: true,
    slideIndex: 0,
    swiper:1,
    width:46,
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