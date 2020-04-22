let app = getApp()
const util = require('../utils/util.js');
var message = require('../../component/message/message.js');
var limit = 10, page = 1;
var newList = [], len = 0, hasMore = true;
Page({
  data: {

//newData
    resNewsData: [],
    hasMore: true,
    showLoading: true,
    imgServer: 'https://img.du-ms.com',

    //swipeData
     banner: [],

     informNews: [],

     //报告通知
     reportMesage:[],

    currentTab: 0,
    //这里只做tab名和显示图标
    items: [
      {
        "text": "首页",
        "iconPath": "/images/index.png",
        "selectedIconPath": "/images/index.png"
      },
      {
        "text": "新闻",
        "iconPath": "/images/news.png",
        "selectedIconPath": "/images/news.png"

      },
      {
        "text": "我的",
        "iconPath": "/images/my.png",
        "selectedIconPath": "/images/my.png"
      }
    ]
  },
  swichNav: function (e) {
    let that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  },
  onLoad: function (option) {
    this.newsLoad();
    this.informNewsLoad();
    this.reportMessageLoad();
    this.swiperLoad();
  },

  informNewsLoad: function () {
    var that = this;
    var openId = wx.getStorageSync('user').openid;
    console.log('openId', openId)
    wx.request({
      url: 'https://api.seanai.cn/wise/1/reserve/notices',
      method: 'POST',
      data: {
        sessionId: openId,
      },
      header: {
        'content-type': 'application/json' //默认值
      },
      success: res => {
        console.log('informNews==', res)
        // res.data.data.content
        that.setData({
          informNews: res.data.data.content
        })

      }
    });

  },

  reportMessageLoad: function () {
    var that = this;
    var openId = wx.getStorageSync('user').openid;
    console.log('openId', openId)
    wx.request({
      url: 'https://api.seanai.cn/wise/1/report/reportNotices',
      method: 'POST',
      data: {
        sessionId: openId,
      },
      header: {
        'content-type': 'application/json' //默认值
      },
      success: res => {
        console.log('reportMessage==', res)

        for (var i = 0; i < res.data.data.items.length; i++) {
          res.data.data.items[i]["reportTime"] = util.formatTimeTwo(res.data.data.items[i]["reportTime"], 'Y/M/D h:m:s')
        }
        that.setData({
          reportMesage: res.data.data.items
        })

      }
    });

  },


  swiperLoad: function () {
    var that = this;
    var openId = wx.getStorageSync('user').openId;
    wx.request({
      url: 'https://api.seanai.cn/wise/1/hospital/list',
      method: 'POST',
      data: {
        sessionId: openId,
      },
      header: {
        'content-type': 'application/json' //默认值
      },
      success: res => {
        console.log('swiperRes==', res)
        that.setData({
          banner: res.data.data.items
        })

      }
    });

  },
  newsLoad: function () {
    var that = this;
    page = 1;
    message.hide.call(that)
    //获取数据
    console.log("page", page, "pagesize", limit)
    var openid = wx.getStorageSync('user').openid
    wx.request({
      url: 'https://api.seanai.cn/wise/1/health/healths',
      method: 'POST',
      data: {
        sessionId: openid,
        pageNo: page,
        pageSize: limit,
      },
      header: {
        'content-type': 'application/json' //默认值
      },
      success: res => {
        // util.formatTimeTwo(newsDetail.createTime, 'Y/M/D h:m:s')
        newList = res.data.data.items;
        var totalPage = res.data.data.totalPage;
        hasMore = totalPage < page ? false : true;
        for (var i = 0; i < newList.length; i++) {
          newList[i]["createTime"] = util.formatTimeTwo(newList[i]["createTime"], 'Y/M/D h:m:s')
        }
        console.log('新闻res==', res)
        page++;
        that.setData({
          resNewsData: res.data.data.items,
          hasMore: hasMore,
          showLoading: false
        })
      }, fail: res => {
        that.setData({
          showLoading: false
        })
        message.show.call(that, {
          content: '网络开小差了',
          icon: 'offline',
          duration: 3000
        })
      }
    });

  },

})
