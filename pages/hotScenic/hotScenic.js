// pages/hotScenic/hotScenic.js
const app = getApp()
var getDataList = require("./../../data/test-data.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    slideIndex:0,
    ticketList: [],
    show: false,
    idx:0,
    actions: [],
    statusBarHeight: app.globalData.statusBarHeight,
  
    circular: true, //是否衔接
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    vertical: false,
    indicatorColor: "#aaa", //原点颜色
    banner: [],
    defaultSize: 'default',
    primarySize: 'default',
    warnSize: 'default',
    disabled: false,
    plain: false,
    loading: false,
    dataArray: [
      {
      "id": '001',
      "name": "全部",
    },
    {
      "id": '002',
      "name": "四姑娘山",
    },
      {
        "id": '003',
        "name": "黄龙",
      },
      {
        "id": '004',
        "name": "九寨沟",
      },
      {
        "id": '002',
        "name": "四姑娘山",
      },
      {
        "id": '003',
        "name": "黄龙",
      },
      {
        "id": '004',
        "name": "九寨沟",
      },
    ],
    scenicIntroduData:[
      {
        "id":101,
        "title":'九寨沟黄龙山风景区',
        "markF":'全程12个景点',
        "markS":'适合全年',
        "introduce":'黄龙风景名胜区位于四川省阿坝藏族羌族自治州松潘县。面积700平方公里。   是中国唯一保护完好的高原湿地，与九寨沟相距100千米，海拔1700-5588米。',
        "detail": '黄龙以彩池、雪山、峡谷、森林“四绝”著称于世，再加上滩流、古寺、民俗称为“七绝”。景区由黄龙沟、丹云峡、牟尼沟、雪宝鼎、雪山梁、红星岩，西沟等景区组成。主要景观集中于长约3.6公里的黄龙沟，沟内遍布碳酸钙华沉积。并呈梯田状排列，以丰富的动植物资源享誉人间，享有“世界奇观”、“人间瑶池”等美誉。1992年列入《世界自然遗产名录》。除了高山景观，还可以在这里发现各种不同的森林生态系统，以及石灰岩构造、瀑布和温泉。这一地区还生存着许多濒临灭绝的动物，包括大熊猫和四川疣鼻金丝猴。 [黄龙以规模宏大、结构奇巧、色彩丰艳的地表钙华景观为主景，以罕见的岩溶地貌蜚声中外，堪称人间仙境。2016年10月9日，国家旅游局发布十一假日旅游“红黑榜”，黄龙景区上榜综合秩序最佳景区。 是世界自然遗产，世界人与生物圈保护区，“绿色环球21”证书，国家AAAAA级旅游景区，国家重点风景名胜区。',
        "logoUrl":'http://img5.imgtn.bdimg.com/it/u=802330263,3184809752&fm=26&gp=0.jpg'
      },
      {
        "id": 102,
        "title": '九寨沟黄龙山风景区',
        "markF": '全程12个景点',
        "markS": '适合全年',
        "introduce": '黄龙风景名胜区位于四川省阿坝藏族羌族自治州松潘县。面积700平方公里。  是中国唯一保护完好的高原湿地，与九寨沟相距100千米，海拔1700-5588米。',
        "detail": '黄龙以彩池、雪山、峡谷、森林“四绝”著称于世，再加上滩流、古寺、民俗称为“七绝”。景区由黄龙沟、丹云峡、牟尼沟、雪宝鼎、雪山梁、红星岩，西沟等景区组成。主要景观集中于长约3.6公里的黄龙沟，沟内遍布碳酸钙华沉积。并呈梯田状排列，以丰富的动植物资源享誉人间，享有“世界奇观”、“人间瑶池”等美誉。1992年列入《世界自然遗产名录》。除了高山景观，还可以在这里发现各种不同的森林生态系统，以及石灰岩构造、瀑布和温泉。这一地区还生存着许多濒临灭绝的动物，包括大熊猫和四川疣鼻金丝猴。 [黄龙以规模宏大、结构奇巧、色彩丰艳的地表钙华景观为主景，以罕见的岩溶地貌蜚声中外，堪称人间仙境。2016年10月9日，国家旅游局发布十一假日旅游“红黑榜”，黄龙景区上榜综合秩序最佳景区。 是世界自然遗产，世界人与生物圈保护区，“绿色环球21”证书，国家AAAAA级旅游景区，国家重点风景名胜区。',
        "logoUrl": 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1578309565581&di=5b6aef334f89d100ea2b5b5e5ac87835&imgtype=0&src=http%3A%2F%2Fimg1001.pocoimg.cn%2Fimage%2Fpoco%2Fworks%2F21%2F2012%2F0210%2F22%2F52778280201202102231492312423441230_000_52778280.jpg'
      },
      {
        "id": 103,
        "title": '九寨沟黄龙山风景区',
        "markF": '全程12个景点',
        "markS": '适合全年',
        "introduce": '黄龙风景名胜区位于四川省阿坝藏族羌族自治州松潘县。面积700平方公里。 是中国唯一保护完好的高原湿地，与九寨沟相距100千米，海拔1700-5588米。',
        "detail": '黄龙以彩池、雪山、峡谷、森林“四绝”著称于世，再加上滩流、古寺、民俗称为“七绝”。景区由黄龙沟、丹云峡、牟尼沟、雪宝鼎、雪山梁、红星岩，西沟等景区组成。主要景观集中于长约3.6公里的黄龙沟，沟内遍布碳酸钙华沉积。并呈梯田状排列，以丰富的动植物资源享誉人间，享有“世界奇观”、“人间瑶池”等美誉。1992年列入《世界自然遗产名录》。除了高山景观，还可以在这里发现各种不同的森林生态系统，以及石灰岩构造、瀑布和温泉。这一地区还生存着许多濒临灭绝的动物，包括大熊猫和四川疣鼻金丝猴。 [黄龙以规模宏大、结构奇巧、色彩丰艳的地表钙华景观为主景，以罕见的岩溶地貌蜚声中外，堪称人间仙境。2016年10月9日，国家旅游局发布十一假日旅游“红黑榜”，黄龙景区上榜综合秩序最佳景区。[2]  是世界自然遗产，世界人与生物圈保护区，“绿色环球21”证书，国家AAAAA级旅游景区，国家重点风景名胜区。',
        "logoUrl": 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1578309565581&di=5b6aef334f89d100ea2b5b5e5ac87835&imgtype=0&src=http%3A%2F%2Fimg1001.pocoimg.cn%2Fimage%2Fpoco%2Fworks%2F21%2F2012%2F0210%2F22%2F52778280201202102231492312423441230_000_52778280.jpg'
      },
      {
        "id": 104,
        "title": '九寨沟黄龙山风景区',
        "markF": '全程12个景点',
        "markS": '适合全年',
        "introduce": '黄龙风景名胜区位于四川省阿坝藏族羌族自治州松潘县。面积700平方公里。是中国唯一保护完好的高原湿地，与九寨沟相距100千米，海拔1700-5588米。',
        "detail": '黄龙以彩池、雪山、峡谷、森林“四绝”著称于世，再加上滩流、古寺、民俗称为“七绝”。景区由黄龙沟、丹云峡、牟尼沟、雪宝鼎、雪山梁、红星岩，西沟等景区组成。主要景观集中于长约3.6公里的黄龙沟，沟内遍布碳酸钙华沉积。并呈梯田状排列，以丰富的动植物资源享誉人间，享有“世界奇观”、“人间瑶池”等美誉。1992年列入《世界自然遗产名录》。除了高山景观，还可以在这里发现各种不同的森林生态系统，以及石灰岩构造、瀑布和温泉。这一地区还生存着许多濒临灭绝的动物，包括大熊猫和四川疣鼻金丝猴。 [黄龙以规模宏大、结构奇巧、色彩丰艳的地表钙华景观为主景，以罕见的岩溶地貌蜚声中外，堪称人间仙境。2016年10月9日，国家旅游局发布十一假日旅游“红黑榜”，黄龙景区上榜综合秩序最佳景区。[2]  是世界自然遗产，世界人与生物圈保护区，“绿色环球21”证书，国家AAAAA级旅游景区，国家重点风景名胜区。',
        "logoUrl": 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1578309565581&di=5b6aef334f89d100ea2b5b5e5ac87835&imgtype=0&src=http%3A%2F%2Fimg1001.pocoimg.cn%2Fimage%2Fpoco%2Fworks%2F21%2F2012%2F0210%2F22%2F52778280201202102231492312423441230_000_52778280.jpg'
      }
    ]
  },
  showAll() {
   
  },
  showSome() {
   
  },
  onSwiperTap(){
    
  },

  backToPreviousClick(){
    wx.navigateBack({
      
    })
  },

  selectDataTab(e){
    var that = this;
    let index = e.currentTarget.dataset.index;
    that.setData({
      idx: index
    })  
  },
  onSlideChangeEnd(e) {
    //current 改变时会触发change事件，event.detail= {current:current,source:source}
    var that = this;
    // console.log('slideIndex--', e.detail.current + 1);
    that.setData({
      slideIndex: e.detail.current
    })

    var list = this.data.banner[this.data.slideIndex]
    console.log(list['image']);

  },

  toScenictDetail() {
    wx.navigateTo({
      url: '/pages/hotScenic/hotScenicDetail/hotScenicDetail',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      ticketList: JSON.parse(getDataList.ticketList),
      banner: JSON.parse(getDataList.swiperData)
    })
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