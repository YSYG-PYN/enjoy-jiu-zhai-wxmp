// pages/hotel/search/search.js
const app = getApp();

Page({
  backToPreviousClick() {
    wx.navigateBack({
      url: "../../hotel/hotel"
    })
  },
  choose: function (e) {
    let index = e.currentTarget.dataset.index
    var bool = this.data.goods[index].checked
    let cc = this.data.mainActiveIndex;
    console.log(index);
    const that = this;
    this.setData({
      ['goods[' + index + '].checked']: !bool,
      currentData: e.detail.current,
      cc:this.data.mainActiveIndex
    })//判断按钮的下标点击切换下拉菜单
    if (index === 1) {
      this.setData({
        show: true,
      })
    } else if (index === 2) {
      console.log(index);
      this.setData({
        btn: true,
        state:1,
        hide:true,
        hidebed:true,
        hide1:false
      })
      // console.log(cc);
    } else if (index === 3) {
      this.setData({
        btn: true,
        state:2,
        hide:false,
        hidebed:false,
        hide1:true
      })
    } else if (index === 4) {
      this.setData({
        show3: true
      })
    } else if (index === 0) {
      this.setData({
        show4: true
      })
    }
  },
  
  //关闭弹窗
  onClose() {
    this.setData({
      show: false,
      btn: false,
      show2: false,
      show3: false,
      show4: false,
    });
  },
  //vant 复选框
  onChange(event) {
    this.setData({
      result: event.detail,
      currentValue: event.detail
    });
    
  },
  toggle(event) {
    const { index } = event.currentTarget.dataset;
    const checkbox = this.selectComponent(`.checkboxes-${index}`);
    // console.log(checkbox)
    // console.log(index);
    checkbox.toggle();
  },
  noop() { },
  //确认按钮 点击关闭下拉菜单
  sure() {
    this.setData({
      show: false,
      show1: false,
      show2: false,
      show3: false,
      show4: false,
    })
  },
  //点击切换，滑块index赋值
  checkCurrent: function (e) {
    const that = this;
    if (that.data.currentData === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentData: e.target.dataset.current
      })
    }
  },
  //分类选择
  onClickNav({ detail = {} }) {
    // console.log(event.detail.index)
    this.setData({
      mainActiveIndex: detail.index || 0,
      // show7: 'none'
     
    });
    console.log(this.data.mainActiveIndex)
    
    if (this.data.mainActiveIndex === 2 && this.data.show7 === "none") {
      this.setData({
        show7: 'block',
        
      })
    } else if (this.data.mainActiveIndex === 1) {
      this.setData({
        show7: 'none'
      })
    }
    
  },
  onClickItem: function (event) {
    console.log(event.detail)
    console.log(event)
  },
  //rili
  dateSelectAction: function (e) {

    var cur_day = e.currentTarget.dataset.idx;
    if (this.data.array[0] > cur_day) {
      return;
    }
    if (this.data.array[0] == cur_day) {
      for (var i = 0; i < this.data.days.length; i++) {
        this.data.days[i].isSelected = false;
        this.data.days[i].status = "住房";
      }
      this.setData({
        days: this.data.days,
        array: []
      })
      return;
    }
    let arr = this.data.days[cur_day];
    arr.isSelected = !arr.isSelected;
    if (this.data.array.length == 0) {
      this.data.array.push(cur_day);
    } else if (this.data.array.length > 0) {

      for (var i = 0; i < this.data.array.length; i++) {
        this.data.array.push(cur_day);
        if (this.data.array.length > 2) {

          this.data.days[this.data.array[1]].isSelected = false;
          this.data.days[this.data.array[1]].status = "住房";
          this.data.array.splice(1, 1);
        }
        if (this.data.array.length == 2) {
          let arr = this.data.days[this.data.array[1]];
          arr.isSelected = !arr.isSelected;
          arr.status = "退房";
        }

      }
    }
    console.log(this.data.array);
    this.setData({
      days: this.data.days
    })
    console.log(`点击的日期:${this.data.cur_year}年${this.data.cur_month}月${cur_day + 1}日`);
    let aa = `点击的日期:${this.data.cur_year}年${this.data.cur_month}月${cur_day + 1}日`;
  },
  setNowDate: function () {
    const date = new Date();
    const cur_year = date.getFullYear();
    const cur_month = date.getMonth() + 1;
    const todayIndex = date.getDate() - 1;
    console.log(`日期：${todayIndex}`);
    const weeks_ch = ['日', '一', '二', '三', '四', '五', '六'];
    this.calculateEmptyGrids(cur_year, cur_month);
    this.calculateDays(cur_year, cur_month);
    this.setData({
      cur_year: cur_year,
      cur_month: cur_month,
      weeks_ch,
      todayIndex,
    })
  },

  getThisMonthDays(year, month) {
    return new Date(year, month, 0).getDate();
  },
  getFirstDayOfWeek(year, month) {
    return new Date(Date.UTC(year, month - 1, 1)).getDay();
  },
  calculateEmptyGrids(year, month) {
    const firstDayOfWeek = this.getFirstDayOfWeek(year, month);
    let empytGrids = [];
    if (firstDayOfWeek > 0) {
      for (let i = 0; i < firstDayOfWeek; i++) {
        empytGrids.push(i);
      }

      this.setData({
        hasEmptyGrid: true,
        empytGrids
      });

    } else {
      this.setData({
        hasEmptyGrid: false,
        empytGrids: []
      });

    }
  },
  calculateDays(year, month) {
    let days = [];

    const thisMonthDays = this.getThisMonthDays(year, month);

    for (let i = 1; i <= thisMonthDays; i++) {
      days.push(i);
    }

    this.setData({
      days
    });
    let array = [];
    for (var i = 0; i < this.data.days.length; i++) {
      var time = this.data.days[i];
      array.push({ isSelected: false, time: time, status: '入住' });
    }

    this.setData({
      days: array
    })
  },
  handleCalendar(e) {
    const handle = e.currentTarget.dataset.handle;
    const cur_year = this.data.cur_year;
    const cur_month = this.data.cur_month;
    if (handle === 'prev') {
      let newMonth = cur_month - 1;
      let newYear = cur_year;
      if (newMonth < 1) {
        newYear = cur_year - 1;
        newMonth = 12;
      }

      this.calculateDays(newYear, newMonth);
      this.calculateEmptyGrids(newYear, newMonth);

      this.setData({
        cur_year: newYear,
        cur_month: newMonth
      })

    } else {
      let newMonth = cur_month + 1;
      let newYear = cur_year;
      if (newMonth > 12) {
        newYear = cur_year + 1;
        newMonth = 1;
      }

      this.calculateDays(newYear, newMonth);
      this.calculateEmptyGrids(newYear, newMonth);

      this.setData({
        cur_year: newYear,
        cur_month: newMonth
      })
    }
  },
  /* rili */
  changeBed(event){
    this.setData({
      bed: event.detail
    });
  },
  ClickBed(event) {
    const { name } = event.currentTarget.dataset;
    this.setData({
      bed: name
    });
  },
  select_use: function (e) {
    let index = e.currentTarget.dataset.key
    // console.log(index)
    this.setData({
      state: e.currentTarget.dataset.key,
    });
    console.log(this.data.state);
    if(e.currentTarget.dataset.key == 1){
      this.setData({
        hide:true,
        hide1:false,
        hidebed:true,
      })
    }
    if( e.currentTarget.dataset.key === 2 ){
      // console.log(11111);
      this.setData({
        hide:false,
        hide1:true,
        hidebed:false,
      })
      // console.log(aaaa);
    }
  },
  ChoseB: function (e) {
    let index = e.currentTarget.dataset.key
    console.log(index)
    this.setData({
      state1: e.currentTarget.dataset.key,
    });
    if(e.currentTarget.dataset.key === 0){
      this.setData({
        hidebed:false
      })
    }
    if(e.currentTarget.dataset.key === 1){
      console.log(123);
      this.setData({
        hidebed: true
      })
    }
  },
  changeChain(event){
    this.setData({
      chain: event.detail
    });
  },
  ClickChain(event) {
    const { name } = event.currentTarget.dataset;
    this.setData({
      chain: name
    });
  },
  /**
   * 页面的初始数据
   */
  data: {
    hidebed:true,
    hide:true,
    hide1:false,
    state:0,
    state1:0,
    break:[
      {
        break:"房型"
      },
      {
        break:"早餐"
      }
    ],
    use: [
      {
        name: "特价促销"
      },
      {
        name: "品牌连锁"
      },
      {
        name: '床型早餐'
      },
      {
        name: "酒店类型"
      },
      {
        name:"设施/服务"
      }
    ],
    chain:"1",
    bed:"1",
    btn:false,
    show: false,
    statusBarHeight: app.globalData.statusBarHeight,
    lists: [{
      "id": "1",
      "image": "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1463745830,2799306777&fm=26&gp=0.jpg",
      "title": "成都蓝城悦杏温泉酒店",
      "enouth": "充足",
      "money": "220",
      "number": "4.9分",
      "remark": "289条点评"
    },
    {
      "id": "2",
      "image": "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1463745830,2799306777&fm=26&gp=0.jpg",
      "title": "成都蓝城悦杏温泉酒店",
      "enouth": "充足",
      "money": "220",
      "number": "4.9分",
      "remark": "289条点评"
    },
    {
      "id": "3",
      "image": "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1463745830,2799306777&fm=26&gp=0.jpg",
      "title": "成都蓝城悦杏温泉酒店",
      "enouth": "充足",
      "money": "220",
      "number": "4.9分",
      "remark": "289条点评"
    },
    ],
    goods: [{
      id: "100",
      label: '10-26',
      checked: false
    }, {
      id: "101",
      label: '智能排序',
      checked: false
    }, {
      id: "102",
      label: '区域位置',
      checked: false
    }, {
      id: "103",
      label: '筛选',
      checked: false
    }, {
      id: "104",
      label: '星级/价格',
      checked: false
    }],
    list: ['综合排序', '低价优先', '高价优先', '好评优先', '距离优先'],

    star: [
      {
        id: "10",
        title: "不限"
      },
      {
        id: "11",
        title: "二星/经济"
      },
      {
        id: "12",
        title: "三星/舒适"
      },
      {
        id: "13",
        title: "四星/高档"
      },
      {
        id: "14",
        title: "五星/豪华"
      },
    ],
    result: ['a', 'b'],
    mainActiveIndex: 0,
    activeId: [],
    max: 10,
   
    //rili
    currentValue: 0,
    hasEmptyGrid: false,
    cur_year: '',
    cur_month: '',
    todayIndex: 1,
    array: [],
    //rili
    show7: 'none',
    activeId: null,
    aa:"`${this.data.cur_year}年${this.data.cur_month}月${cur_day + 1}日`",
    bb:"`${this.data.cur_year}年${this.data.cur_month}月${cur_day + 1}日`",
    cc:"this.data.mainActiveIndex"
  },



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setNowDate();
    console.log(options)
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