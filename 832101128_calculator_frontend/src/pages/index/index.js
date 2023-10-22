// pages/index/index.js
// const { SubEmitter } = require('XrFrame/components/emitter/SubEmitter');
const math = require('/math.min.js');
var app = getApp();
// import { evaluate } from 'math.min.js'
Page({
  data: {
    result:"",
    num1:'',
    num2:'',
    flag:'',
    progress:"0",
    times:0,
    ans:"",
    time:0,
    memorys:[],
    // memory1:"",
    // memory2:0,
  },
  onReady:function ()  {
  //   for(let  i = 0;i<10;i++){
      this.del_bt();
  //  };
  },
  clickButton: function (event) {
    // console.log(event);
    if(this.data.times == 1){
      this.setData({
        result:"",
        progress:"0",
        times:0
      })
    }
    if(event.target.id == 'ans'){
      this.sec_bt()
        if (this.data.progress == '0') {
          this.setData({
            progress: this.data.ans,
          });
        } else {
          this.setData({
            progress: this.data.progress + this.data.ans,
          });
        }
      
    }
    else if (this.data.progress == '0') {
      this.setData({
        progress: event.target.id,
      });
    }
    else if (event.target.id == '=') {
      this.setData({
        progress:this.data.progress + event.target.id,
        result: this.calculate(this.data.progress)
      });
      this.sec_bt();
    }
    else{
      this.setData({
        progress: this.data.progress + event.target.id
      });
    }
  },
  clear(){
    // for(let  i = 0;i<=this.data.time;i++){
       this.del_bt();
    // };
    this.setData({
      progress:"0",
      result:" ",
      times:0,
      ans:0,
      time:0,
      memorys:[]
    });
  },
  del(){
    this.setData({
      progress: this.data.progress.length == 1 ? '0' : this.data.progress.substring(0, this.data.progress.length - 1)
    });
  },
  calculate(determinant) {
    var sum =(math.evaluate(determinant)).toFixed(4);
    this.setData({
      result:sum,
      times:1,
      time:this.data.time+1
    }); 
    // this.del_bt();
    this.save_bt();

// setTimeout(function(){ 
//   var that = this;
//   wx.request({
//     url: "http://localhost:5000/sel", //请求的API地址
//     method: 'GET',
//     dataType: 'json',
//     responseType: 'text',
//     success: (res) => {
//       console.log(res.data) //得到返回的数据
//        this.setData({
//         ans:res.data[that.data.times-1][1],
//       })
//       app.globalData.memorys=res.data;
//       that.data.memorys=res.data;
//       console.log(that.data.ans)
//       console.log(app.globalData.memorys)
//       console.log(that.data.memorys)
//     },
//     // success: function (res) {
//     //   console.log('Calculation history:', res.data);

//       // console.log(this.data.ans)
//       // console.log(app.globalData.memorys)
//       // console.log(this.data.memorys)
//     // },
//     fail: function (error) {
//       console.error('Failed to get calculation history:', error);
//     },
//     complete: () => {}
//   })
//   console.log("延时1秒后执行"); 
// }, 1000);

//     // wx.setStorageSync('index-memorys', this.data.memorys);
  },
  memory(){
    this.sec_bt(),
    setTimeout(function(){ 
      wx.navigateTo({
        url: '../memory/memory',
      })
    },1)
    
  },
  save_bt() {
    wx.request({
      url: "http://localhost:5000/save", //请求的API地址
      data: {
        // times:this.data.times,
        progress:this.data.progress,
        result:this.data.result
      },
      // dataType: 'json',
      // header: {
      //   'content-type': 'application/json'
      // },
      method:'POST',
      success: function (res) {
        console.log('Data saved to backend:', res.data.message);
      },
      fail: function (error) {
        console.error('Failed to save data:', error);
      }
    });
  },

  //删除数据
  del_bt() {
    wx.request({
      url: 'http://localhost:5000/del',
      method: 'DELETE',
      success: function (res) {
        console.log('Calculation history deleted:', res.data.message);
      },
      fail: function (error) {
        console.error('Failed to delete calculation history:', error);
      }
    });
  },
  sec_bt() {
    wx.request({
      url: "http://localhost:5000/sel", //请求的API地址
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: (res) => {
        console.log(res.data) //得到返回的数据
        // console.log(res.data[0])
        if (res.data.data && res.data.data.length > 0) {
          const firstData = res.data.data[0];
          const secondValue = firstData[1];
          this.setData({
            ans:parseFloat(secondValue),
          })
          console.log('Second Value of First Data:', secondValue);
          console.log(this.data.ans);
        } else {
          console.error('No data found in the response or data array is empty.');
        }
        app.globalData.memorys=res.data;
        this.data.memorys=res.data;
        console.log(app.globalData.memorys)
        console.log(this.data.memorys)
      },
      // success: function (res) {
      //   console.log('Calculation history deleted:', res.data.message);
      // },
      fail: function (error) {
        console.error('Failed to delete calculation history:', error);
      },
      complete: () => {}
    })
  },
})
