// pages/foodBeverage/foodBeverage.js
var getIndexData = require("./../../data/test-data")
import Dialog from '@vant/weapp/dialog/dialog';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    foodList: [],
    id: 0,
    sid: 0,
    show: false,
    ashow: false,
    checkArray: [
      {
        id: 1,
        name: '综合排序',
      },
      {
        id: 2,
        name: '环境优先',
      },
      {
        id: 3,
        name: '人气优先',
      },
      {
        id: 4,
        name: '好评优先',
      },
      {
        id: 5,
        name: '距离优先',
      }
    ],
    addressItems: [
      {
        // 导航名称
        text: '热门商区',
        // 该导航下所有的可选项
        children: [
          {
            // 名称
            text: '全部',
            // id，作为匹配选中状态的标识
            id: 1,
          },
          {
            text: '沟口',
            id: 2
          }
        ]
      },
      {
        // 导航名称
        text: '漳扎镇',
        // 该导航下所有的可选项
        children: [
          {
            // 名称
            text: '九寨沟县城',
            // id，作为匹配选中状态的标识
            id: 1,
          },
          {
            text: '神仙池',
            id: 2
          }
        ]
      }
    ],
    mainActiveIndex: 0,
    activeId: null,
    radio: "",
    pshow: false,
    btnList: [
      {
        id: 1,
        name: "不限"
      },
      {
        id: 2,
        name: "营业中"
      },
      {
        id: 3,
        name: "品质商家"
      },
      {
        id: 4,
        name: "新店"
      },
      {
        id: 5,
        name: "接受预定"
      },

    ]
  },
  // dia(){
  //   Dialog.alert({
  //     title: '标题',
  //     message: '弹窗内容'
  //   }).then(() => {
  //     // on close
  //   });

  // },
  clickPriceBtn(e) {
    this.setData({
      sid: e.currentTarget.dataset.id
    })
  },
  onClickNav({ detail = {} }) {
    this.setData({
      activeId:null,
      mainActiveIndex: detail.index || 0,
    });
  },

  onClickItem({ detail = {} }) {
    const activeId = this.data.activeId === detail.id ? null : detail.id;

    this.setData({ activeId });
  },
  onClick() {
    // 点击tab
    this.setData({
      id: 0
    })

  },
  chooseTerm(e) {
    this.setData({
      id: e.currentTarget.dataset.id
    })
    if (e.currentTarget.dataset.id == 1) {
      this.setData({
        show: true
      })
    } else if (e.currentTarget.dataset.id == 2) {
      this.setData({
        ashow: true
      })
    } else if (e.currentTarget.dataset.id == 3) {
      this.setData({
        pshow: true
      })
    }

    console.log(e.currentTarget.dataset.targetclick)
    if (e.currentTarget.dataset.targetclick == 1) {
      console.log("全部", e.currentTarget.dataset.targetclick)
    } else if (e.currentTarget.dataset.targetclick == 2) {
      console.log("藏餐", e.currentTarget.dataset.targetclick)
    } else if (e.currentTarget.dataset.targetclick == 3) {
      console.log("火锅", e.currentTarget.dataset.targetclick)
    }
  },
  onChange(event) {
    this.setData({
      radio: event.detail
    });
  },
  choose_time() {
    console.log(this.data.radio)
    this.setData({
      show: false
    })
  },
  loadMore() {
    console.log('load')
  },
  goBack() {
    wx.navigateBack({})
  },
  toFoodDetail(e) {
    var foodDetailId = e.currentTarget.dataset.foodid
    wx.navigateTo({
      url: '/pages/foodBeverage/foodDetail/foodDetail?foodDetailId=' + foodDetailId,
    })
  },
  clickOverlay() {
    this.setData({
      show: false,
      ashow: false,
      pshow: false,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      foodList: JSON.parse(getIndexData.foodList)
    })

    // 获取顶部栏信息
    // wx.getSystemInfo({
    //   success: res => {
    //     //导航高度
    //     this.globalData.navHeight = res.statusBarHeight + 46;
    //   }, fail(err) {
    //     console.log(err);
    //   }
    // })

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
    wx.showToast({
      title: '正在刷新数据...',
      icon: 'loading',
      duration: 2000
    });
    this.setData({ foodList: [] });//先清空数据
    // this.loadIndex();//再重新加载数据
    this.setData({
      foodList: JSON.parse(getIndexData.foodList)
    })

    wx: wx.stopPullDownRefresh();//停止刷新操作
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
  onPageScroll: function (e) {
    // console.log(e.scrollTop);
    //   if (e.scrollTop >= 100) {
    //   // 动态设置title
    //     wx.setNavigationBarTitle({
    //       title: this.data.title
    //     })
    //   } else {
    //     wx.setNavigationBarTitle({
    //       title: ''
    //     })
    //   }
  }
})