const util = require('../../utils/util.js');
var message = require('../../component/message/message.js');
var limit = 10, page = 1;
var newList = [], len = 0, hasMore = true;
Component({
  properties:{
    resNewsData:{
      type:Object,//类型
    },

    hasMore: {
      type:Boolean,
      value:true,
    },
    showLoading:{
      type: Boolean,
      value: true,

    },

    imgServer:{
      type:String,
      value:'https://img.du-ms.com'
    }

  },
    methods:{
      onLoad: function (options) {
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
            if (res.data.retCode == "0") {
              newList = res.data.data.items;
              var totalPage = res.data.data.totalPage;
              for (var i = 0; i < newList.length; i++) {
                newList[i]["createTime"] = util.formatTimeTwo(newList[i]["createTime"], 'Y/M/D h:m:s')
              }
              hasMore = totalPage < page ? false : true;
              // for (var i = 0; i < totalPage; i++) {
              // }
              console.log('下拉刷新新闻res==', res)
              page++;
              that.setData({
                resNewsData: res.data.data.items,
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
            if (that.data.hasMore) {
              // newList = res.data.data.items;
              var totalPage = res.data.data.totalPage;
              for (var i = 0; i < res.data.data.items.length; i++) {
                res.data.data.items[i]["createTime"] = util.formatTimeTwo(res.data.data.items[i]["createTime"], 'Y/M/D h:m:s')
              }
              // var moreList =[];
              newList = newList.concat(res.data.data.items || []);

              console.log('加载的newlist==', newList)
              hasMore = totalPage < page ? false : true;
              console.log('加载的page==', page)
              console.log('上拉加载更多新闻res==', res)
              page++;
              that.setData({
                resNewsData: newList,
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
      toNewsDetail: function (e) {
        var dataId = e.currentTarget.dataset.id;
        var index = e.currentTarget.dataset.index;
        wx.navigateTo({
          url: "../appointNew/newsDetail/newsDetail?newsDetail=" + JSON.stringify(this.properties.resNewsData[index]) + '&hospitalId=' + dataId,
        })
      }
    }
})