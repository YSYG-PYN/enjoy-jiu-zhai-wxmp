// pages/appointMy/appointMy.js
var app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    menuitems: [
      {
        text: '就诊人管理',
        url: '../appointMy/patientManageDetail/patientManageDetail',
        icon: '../images/news.png'
      },
      {
        text: '挂号记录',
        url: '../appointMy/reservationRecord/reservationRecord',
        icon: '../images/news.png'
      },
      {
        text: '报告查询',
        url: '../appointMy/reportQuery/reportQuery',
        icon: '../images/news.png'
      },
      {
        text: '游客归属分类',
        url: '../appointMy/personInfoManage/personInfoManage',
        icon: '../images/news.png'

      }
    ],
    // userName:" ",
    // userAvatarUrl:""

    //判断小程序的API，回调，参数，组件等是否在当前版本可用。
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    isHide: false
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    // 查看是否授权
    wx.getSetting({
      success: function (res) {
        if (res.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success: function (res) {
              // 用户已经授权过,不需要显示授权页面,所以不需要改变 isHide 的值
              // 根据自己的需求有其他操作再补充
              // 我这里实现的是在用户授权成功后，调用微信的 wx.login 接口，从而获取code
              wx.login({
                success: res => {
                  // 获取到用户的 code 之后：res.code
                  console.log("用户授权每次登陆的code:" + res.code);
                  // 可以传给后台，再经过解析获取用户的 openid
                  // 或者可以直接使用微信的提供的接口直接获取 openid ，方法如下：
                  // wx.request({
                  //   // url: 'https://api.weixin.qq.com/sns/jscode2session?appid=wx506ed415ead76ba0&secret=d080fe8d66bc200781a7db2f8e3c8959&js_code=' + res.code + '&grant_type=authorization_code',
                  //   url: 'https://api.seanai.cn/wise/1/user/wxAuth',
                  //   method: 'POST',
                  //   data: {
                  //     code: res.code,
                  //     // appid: 'wxa7741b0a4e40087d',
                  //     // secret: '23a679ea910980b886dc697b0a6e888a'
                  //   },
                  //     success: res => {
                  //       console.log("返回的res=",res)
                  //         // 获取到用户的 openid
                  //         console.log("用户的openid:" + res.data.openid);

                  //     }
                  // });
                }
              });
            }
          });
        } else {
          // 用户没有授权
          // 改变 isHide 的值，显示授权页面
          that.setData({
            isHide: true
          });
        }
      }
    });

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
    var that = this;
    wx.login({
      success: function () {
        wx.getUserInfo({
          success: function (res) {
            var simpleUser = res.userInfo;
            console.log('nickname', simpleUser.nickName);
            console.log(simpleUser.avatarUrl);
            console.log('res====', res);
            that.setData({
              userName: simpleUser.nickName,
              userAvatarUrl: simpleUser.avatarUrl
            });
          }
        });
      }
    });

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

  },
  // toLogin: function(e) {
  //   var that = this;
  //   wx.login({
  //     success: function() {
  //       this.https()
  //       wx.getUserInfo({
  //         success: function(res) {
  //           var simpleUser = res.userInfo;
  //           console.log(simpleUser.nickName);
  //           console.log(simpleUser.avatarUrl);
  //           console.log(res);
  //           this.setData({
  //             userName: simpleUser.nickName,
  //             userAvatarUrl: simpleUser.avatarUrl
  //           });
  //         }
  //       });
  //     }
  //   });

  //   console.log('这是获取授权按钮')
  // },



  getAuthorization: function () {
    wx.login({
      success: res => {
        // 获取到用户的 code ：res.code
        console.log("用户刚授权的code:" + res.code);
        // 可以传给后台，再经过解析获取用户的 openid
        wx.request({
          // url: 'https://api.weixin.qq.com/sns/jscode2session?appid=wx506ed415ead76ba0&secret=d080fe8d66bc200781a7db2f8e3c8959&js_code=' + res.code + '&grant_type=authorization_code',
          url: 'https://api.seanai.cn/wise/1/user/wxAuth',
          method: 'POST',
          data: {
            code: res.code,
            // appid: 'wxa7741b0a4e40087d',
            // secret: '23a679ea910980b886dc697b0a6e888a'
          },
          header: {
            'content-type': 'application/json' //默认值
          },
          success: res => {
            console.log("返回的res=", res)
            // 获取到用户的 openid
            console.log("用户的openid:" + res.data.data.openid);
            var obj = {};
            obj.openid = res.data.data.openid;
            console.log("openid:" + obj.openid);
            console.log("session_key:" + res.data.data.session_key);
            obj.expires_in = Date.now() + res.data.data.expires_in;
            wx.setStorageSync('user', obj);//存储openid 
            // var openid = wx.getStorageSync('user').openid
          }
        });
      }
    });

  },

  bindGetUserInfo: function (e) {
    if (e.detail.userInfo) {
      //用户按了允许授权按钮
      var that = this;
      that.getAuthorization();
      // 获取到用户的信息了，打印到控制台上看下
      console.log("用户的信息如下：");
      console.log(e.detail.userInfo);
      //授权成功后,通过改变 isHide 的值，让实现页面显示出来，把授权页面隐藏起来
      var simpleUser = e.detail.userInfo;
      that.setData({
        userName: simpleUser.nickName,
        userAvatarUrl: simpleUser.avatarUrl,
        isHide: false
      });
    } else {
      //用户按了拒绝按钮
      wx.showModal({
        title: '警告',
        content: '您点击了拒绝授权，将无法进入小程序，请授权之后再进入!!!',
        showCancel: false,
        confirmText: '返回授权',
        success: function (res) {
          // 用户没有授权成功，不需要改变 isHide 的值
          if (res.confirm) {
            console.log('用户点击了“返回授权”');
          }
        }
      });
    }
  },


})