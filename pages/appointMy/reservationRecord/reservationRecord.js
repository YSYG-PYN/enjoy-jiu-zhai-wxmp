
const util = require('../../utils/util.js');
var message = require('../../../component/message/message.js');
var limit = 10, page = 1;
var newList = [], len = 0, hasMore = true;
Page({
  data: {
    resData: [],
    hasMore: true,
    showLoading: true,
    imgServer: 'https://img.du-ms.com'

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    

  },

  onShow:function(options){
    this.newsLoad();
  },

  newsLoad: function () {
    var that = this;
    page = 1;
    message.hide.call(that)
    //获取数据
    console.log("page", page, "pagesize", limit)
    var openid = wx.getStorageSync('user').openid
    wx.request({
      url: 'https://api.seanai.cn/wise/1/reserve/myReserveList',
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
        newList = res.data.data.content;
        var totalPage = res.data.data.totalPages;
        hasMore = totalPage < page ? false : true;
        for (var i = 0; i < newList.length; i++) {
          newList[i]["createTime"] = util.formatTimeTwo(newList[i]["createTime"], 'Y/M/D')
        }
        console.log('预约记录res==', res)
        page++;
        that.data.resData = res.data.data.content;
        that.setData({
          resData: res.data.data.content,
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
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    var that = this;
    page = 1;
    message.hide.call(that)
    //获取数据
    console.log("page", page, "pagesize", limit)
    var openid = wx.getStorageSync('user').openid
    wx.request({
      url: 'https://api.seanai.cn/wise/1/reserve/myReserveList',
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
        if (res.data.retCode == "0") {
          newList = res.data.data.content;
          var totalPage = res.data.data.totalPages;
          for (var i = 0; i < newList.length; i++) {
            newList[i]["createTime"] = util.formatTimeTwo(newList[i]["createTime"], 'Y/M/D')
          }
          hasMore = totalPage < page ? false : true;
          // for (var i = 0; i < totalPage; i++) {
          // }
          console.log('下拉刷新新闻res==', res)
          page++;
          that.data.resData = res.data.data.content;
          that.setData({
            resData: res.data.data.content,
            hasMore: hasMore,
            showLoading: false
          });
          wx.stopPullDownRefresh();
        } else {
          wx.stopPullDownRefresh();
          util.showToast(res.data.retMsg)
        }
      }, fail: res => {
        wx.stopPullDownRefresh();
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

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    var that = this;
    message.hide.call(that)
    //获取数据
    console.log("page", page, "pagesize", limit)
    var openid = wx.getStorageSync('user').openid
    wx.request({
      url: 'https://api.seanai.cn/wise/1/reserve/myReserveList',
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
        if (that.data.hasMore) {
          var totalPage = res.data.data.totalPages;
          for (var i = 0; i < res.data.data.content.length; i++) {
            res.data.data.content[i]["createTime"] = util.formatTimeTwo(res.data.data.content[i]["createTime"], 'Y/M/D h:m:s')
          }
          newList = newList.concat(res.data.data.content || []);
          for (var i = 0; i < newList.length; i++) {
            newList[i]["createTime"] = util.formatTimeTwo(newList[i]["createTime"], 'Y/M/D')
          }

          console.log('加载的newlist==', newList)
          hasMore = totalPage < page ? false : true;
          console.log('加载的page==', page)
          console.log('上拉加载更多预约记录res==', res)
          page++;
          that.data.resData = newList;
          that.setData({
            resData: newList,
            hasMore: hasMore,
            showLoading: false
          });
        } else {
          util.showToast(res.data.retMsg)
        }
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

  toReservationDetailTap: function (e) {
    var index = e.currentTarget.dataset.index
    wx.navigateTo({
      url: '../reservationRecordDetail/reservationRecordDetail?recordData=' + JSON.stringify(this.data.resData[index]),
    })
  }
})