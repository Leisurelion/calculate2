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
    ans:0,
    time:0,
    memorys:[],
    // memory1:"",
    // memory2:0,
  },
  onReady:function ()  {
    for(let  i = 0;i<10;i++){
      this.del_bt();
   };
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
      this.sec_bt();
      if(this.data.progress=='0'){
        this.setData({
          progress:this.data.ans
        });
      }else{
      this.setData({
        progress: this.data.progress + this.data.ans
      });
    }
    }else if (this.data.progress == '0') {
      this.setData({
        progress: event.target.id
      });
    }
    else if (event.target.id == '=') {
      this.setData({
        progress:this.data.progress + event.target.id,
        result: this.calculate(this.data.progress)
      });
    }else if (event.target.id == '+') {
      this.setData({
        progress: this.data.progress + '+'
      });
    }else{
      this.setData({
        progress: this.data.progress + event.target.id
      });
    }
  },
  clear(){
    for(let  i = 0;i<=this.data.time;i++){
       this.del_bt();
    };
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
    this.sec_bt();
    wx.setStorageSync('index-memorys', this.data.memorys);
  },
  memory(){
    wx.navigateTo({
      url: '../memory/memory',
    })
  },
  save_bt() {
    wx.request({
      url: "https://zbmysql.huaxio.cn/api/18016683586RqUnj.php?", //请求的API地址
      data: {
        sql: 'INSERT INTO wx VALUES("'+this.data.progress+'","'+this.data.result+'");', //SQL语句
        api_pawsord: "voKQnzH0SMrjWXx" //API密码
      },
      method: 'post',
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      dataType: 'json',
      responseType: 'text',
      success: (res) => {
        console.log(res.data) //得到返回的数据
        if (res.data.affected = 1) {
          console.log('操作成功！')
        }
      },
      fail: () => {},
      complete: () => {}
    })
  },

  //删除数据
  del_bt() {
    wx.request({
      url: "https://zbmysql.huaxio.cn/api/18016683586RqUnj.php?", //请求的API地址
      data: {
        sql: 'DELETE FROM `wx` WHERE 1', //SQL语句
        api_pawsord: "voKQnzH0SMrjWXx" //API密码
      },
      method: 'post',
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      dataType: 'json',
      responseType: 'text',
      success: (res) => {
        console.log(res.data) //得到返回的数据
        if (res.data.affected = 1) {
          console.log('操作成功！')
        }
      },
      fail: () => {},
      complete: () => {}
    })
  },
  sec_bt() {
    wx.request({
      url: "https://zbmysql.huaxio.cn/api/18016683586RqUnj.php?", //请求的API地址
      data: {
        sql: 'SELECT * FROM `wx` WHERE "'+(this.data.time)+'"', //SQL语句
        api_pawsord: "voKQnzH0SMrjWXx" //API密码
      },
      method: 'post',
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      dataType: 'json',
      responseType: 'text',
      success: (res) => {
        console.log(res.data) //得到返回的数据
         this.setData({
          ans:res.data.result[this.data.time-1].result,
        })
        app.globalData.memorys=res.data.result;
        this.data.memorys=res.data.result;
        console.log(app.globalData.memorys)
        console.log(this.data.memorys)
      },
      fail: () => {},
      complete: () => {}
    })
  },
})
