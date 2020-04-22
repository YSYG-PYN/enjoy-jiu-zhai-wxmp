const REQUESTURL = 'https://api.seanai.cn/wise/1';


//公共请求方法
function mypost(url, params, success, fail, method) {
  console.log("pdata======" + JSON.stringify(pdata));
  wx.request({
    url: REQUESTURL + url,
    data: params,
    header: {
      'content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    method: method || 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
    success: function (res) {
      // success

      wx.hideNavigationBarLoading()
      if (message != "") {
        wx.hideLoading()
      }
      if (res.statusCode == 200) {
        success(res.data)
      } else {
        fail()
      }
      console.log("返回结果===" + JSON.stringify(res));
    },
    fail: function(res){
      wx.hideNavigationBarLoading()
      if (message != "") {
        wx.hideLoading()
      }
      fail()
    },
    complete: function () {
      // complete
    }
  })
}

function formatTime(time) {
  if (typeof time !== 'number' || time < 0) {
    return time
  }
  var hour = parseInt(time / 3600)
  time = time % 3600
  var minute = parseInt(time / 60)
  time = time % 60
  var second = time

  return ([hour, minute, second]).map(function (n) {
    n = n.toString()
    return n[1] ? n : '0' + n
  }).join(':')
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}


/** 
 * 时间戳转化为年 月 日 时 分 秒 
 * number: 传入时间戳 
 * format：返回格式，支持自定义，但参数必须与formateArr里保持一致 
*/
function formatTimeTwo(number, format) {

  var formateArr = ['Y', 'M', 'D', 'h', 'm', 's'];
  var returnArr = [];

  var date = new Date(number);
  returnArr.push(date.getFullYear());
  returnArr.push(formatNumber(date.getMonth() + 1));
  returnArr.push(formatNumber(date.getDate()));

  returnArr.push(formatNumber(date.getHours()));
  returnArr.push(formatNumber(date.getMinutes()));
  returnArr.push(formatNumber(date.getSeconds()));

  for (var i in returnArr) {
    format = format.replace(formateArr[i], returnArr[i]);
  }
  return format;
}

function getCurrentDate(addDayCount) {
  //获取当前时间戳  
  var dd = new Date();
  dd.setDate(dd.getDate() + addDayCount);
  var timestamp = Date.parse(dd);
  timestamp = timestamp / 1000;
  console.log("当前时间戳为：" + timestamp);
  //获取当前时间  
  var n = timestamp * 1000;
  var date = new Date(n);
  var Y = date.getFullYear();  //年  
  var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1); //月   
  var D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate(); //日 
  var h = date.getHours();//时  
  var m = date.getMinutes();//分  
  var s = date.getSeconds(); //秒 
  console.log("当前时间：" + Y + M + D + h + ":" + m + ":" + s);
  return [Y, M, D].join('')


}



//得到时间格式2018-10-02

const formatDate = date => {

  const year = date.getFullYear()

  const month = date.getMonth() + 1

  const day = date.getDate()

  return [year, month, day].map(formatNumber).join('-')

}

//todate默认参数是当前日期，可以传入对应时间 todate格式为2018-10-05

function getDates(days, todate) {

  var dateArry = [];

  for (var i = 0; i < days; i++) {

    var dateObj = dateLater(todate, i);

    dateArry.push(dateObj)

  }

  return dateArry;

}

function dateLater(dates, later) {

  let dateObj = {};

  let show_day = new Array('周日', '周一', '周二', '周三', '周四', '周五', '周六');

  let date = new Date(dates);

  date.setDate(date.getDate() + later);

  let day = date.getDay();

  let yearDate = date.getFullYear();

  let month = ((date.getMonth() + 1) < 10 ? ("0" + (date.getMonth() + 1)) : date.getMonth() + 1);

  let dayFormate = (date.getDate() < 10 ? ("0" + date.getDate()) : date.getDate());

  dateObj.time = yearDate + '-' + month + '-' + dayFormate;

  dateObj.week = show_day[day];

  return dateObj;

}

function getTime() {
  var time = new Date()
  var hours = time.getHours()
  hours = hours < 10 ? '0' + hours : hours
  var minute = time.getMinutes()
  minute = minute < 10 ? '0' + minute : minute
  var second = time.getSeconds()
  second = second < 10 ? '0' + second : second
  return [hours, minute].join(':')
}


/**
   * 传入时间后几天
   * param：传入时间：dates:"2018-04-02",later:往后多少天
   */
function dateLater(dates, later) {
  let dateObj = {};
  let show_day = new Array('周日', '周一', '周二', '周三', '周四', '周五', '周六');
  let date = new Date(dates);
  date.setDate(date.getDate() + later);
  let day = date.getDay();
  dateObj.year = date.getFullYear();
  dateObj.month = ((date.getMonth() + 1) < 10 ? ("0" + (date.getMonth() + 1)) : date.getMonth() + 1);
  dateObj.day = (date.getDate() < 10 ? ("0" + date.getDate()) : date.getDate());
  dateObj.week = show_day[day];
  return dateObj;
}

//获取d当前时间多少天后的日期和对应星期
function getDates(days, todate = getCurrentMonthFirst()) {//todate默认参数是当前日期，可以传入对应时间
  var dateArry = [];
  for (var i = 0; i < days; i++) {
    var dateObj = dateLater(todate, i);
    dateArry.push(dateObj)
  }
  return dateArry;
}

//检查是否登录
function checkLogin(fun) {
  wx.getStorage({
    key: 'privateToken',
    success: function (res) {
      console.log(res.data)
      if (!res.data) {
        wx.navigateTo({
          url: "../login/login"
        })
      } else {
        fun();
      }
    }
  })
}

//去登陆
function goLogin(showFlag, showinfo) {
  if (showFlag) {
    showToast(showinfo || '身份过期,请重新登录');
  }
  setTimeout(function () {
    wx.navigateTo({
      url: '../login/login',
    })
  }, 1500)
}
//检查金额数字
function checkMoney(num) {
  var pReg = /^(([1-9]\d{0,9})|0)(\.\d{1,2})?$/;
  return pReg.test(num);
};

//检查是否为空
function isNull(value) {
  value = value.replace(/(^\s*)|(\s*$)/g, "");
  return (value === "null" || value === null || value === "" || value === "undefined") ? true : false;
}

//检查6位数字密码
function isPwd(pwd) {
  var pReg = /^[0-9]*$/;
  return pReg.test(pwd);
}
//显示toast
function showToast(title) {
  wx.showToast({
    title: title || '',
    icon: 'success',
    image: '',
    duration: 1500,
    mask: true,
    success: null,
    fail: null,
    complete: null
  })
}

function checkPhone(phone) {
  var pReg = /^1[0-9]{10}$/;
  return pReg.test(phone);
}

module.exports = {
  mypost: mypost,
  formatTime: formatTime,
  formatTimeTwo: formatTimeTwo,
  getTime: getTime,
  checkLogin: checkLogin,
  showToast: showToast,
  checkPhone: checkPhone,
  isNull: isNull,
  checkMoney: checkMoney,
  getCurrentDate: getCurrentDate,
  goLogin: goLogin,
  isPwd: isPwd,
  formatDate: formatDate,
  getDates: getDates
}
