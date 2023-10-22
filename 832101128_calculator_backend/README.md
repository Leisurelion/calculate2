# caculator2

##  Introduction

> Based on the previous learning, in this project, new features will be added to the original and the original features will be optimised. On the basis of the front-end, we will also go for designing and connecting to the back-end database for data storage and transmission, so as to retain the historical data and realise the required historical records and historical calculation functions.

## Project source address

| **The Link Your Class**               | [2301-MUSE社区-CSDN社区云](https://bbs.csdn.net/forums/ssynkqtd-04) |
| ------------------------------------- | ------------------------------------------------------------ |
| **Link to the finished project code** | https://bbs.csdn.net/topics/617378696#                       |
| **The Aim of This Assignment**        | Separate front and rear end calculator                       |
| **MU STU ID and FZU STU ID**          | <21125121 832101128>                                         |

github：https://github.com/Leisurelion/caculator3.git

 

### PSP form 

|     Personal Software Process Stages     | Estimated time (minutes) | Actual time (minutes) |
| :--------------------------------------: | :----------------------: | :-------------------: |
|               **Planning**               |                          |                       |
|                 Estimate                 |            30            |          40           |
|             **Development**              |                          |                       |
|                 Analysis                 |            40            |          40           |
|               Design Spec                |            45            |          60           |
|              Design Review               |            30            |          35           |
|             Coding Standard              |            70            |          75           |
|                  Design                  |            20            |          20           |
|                  Coding                  |           120            |          130          |
|               Code Review                |            15            |          30           |
|                   Test                   |            45            |          45           |
|              **Reporting**               |                          |                       |
|               Test Report                |            15            |          30           |
|             Size Measurement             |            10            |          10           |
| **Postmortem &Process Improvement Plan** |                          |                       |
|                   Sum                    |           440            |          515          |

## Finished product displ

### Overall function

<img src="https://img-community.csdnimg.cn/images/fe5f9b0dafb443018c9169072c0ab267.gif" alt="img" style="zoom:33%;" />

![点击并拖拽以移动](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==)

 

![img](https://img-community.csdnimg.cn/images/727ecfd7f86743398c68d27ab39fc6ad.png)

![点击并拖拽以移动](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==)

### Specific features are demonstrated:

- **Trigonometric function**

sin( )                cos()            tan()

<img src="https://img-community.csdnimg.cn/images/c3b0b6a2a36747139949e5b76897d7e5.gif" alt="img" style="zoom:25%;" />![点击并拖拽以移动](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==)<img src="https://img-community.csdnimg.cn/images/89d435a5a5934b64839a9a1de4ba640c.gif" alt="img" style="zoom:25%;" />![点击并拖拽以移动](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==)<img src="https://img-community.csdnimg.cn/images/57777c8c15ed43848e8b146ed8298a38.gif" alt="img" style="zoom:25%;" />![点击并拖拽以移动](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==)

-  **Power function** 

<img src="https://img-community.csdnimg.cn/images/274f4d0ca63c427fbdc1c8c57b8dbca9.gif" alt="img" style="zoom:25%;" />

![点击并拖拽以移动](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==)

- **Historical record**

 <img src="https://img-community.csdnimg.cn/images/a44aff88427748fb96f51e6ee57073cd.gif" alt="img" style="zoom:25%;" />![点击并拖拽以移动](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==)

 

## The process of design:

### **1. Functional design and optimization**

Based on the previous job, the calculation of the previous job is continuous and cannot achieve the calculation of the entire equation, which has a significant impact on the backend. Therefore, in this project, I changed the calculation logic and obtained a more flexible and easy-to-use database math.min.js by collecting data. Calling this file can effectively implement the required functions and enable the calculation of equations.

```javascript
const math = require('/math.min.js');
```

![点击并拖拽以移动](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==)

In order to better display historical records, an additional page will be added and global data will be called to make the pages interconnected.

```javascript
  globalData: {
    memorys:[]
  }
```

![点击并拖拽以移动](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==)

### **2.Front and rear connections:**

In terms of database connection, the three equations of adding, deleting, and obtaining are set up to connect to the database and realise the corresponding functions, so as to achieve the connection between the front and back ends, and to allow the data to be transferred continuously between the two.、

The link to the cloud database used is: http://datahost01.huaxio.cn/pma_f8e1527b/sql.php?db=rnjry6cog3&table=wx&server=1&target=&token=72dda55eb51a04b147f08d152dc03868#PMAURL-0:sql.php?db=rnjry6cog3&table=wx&server=1&target=&token=72dda55eb51a04b147f08d152dc03868

## Code Interpretation:

### **1.Interface Design**

On the interface, the original simple style is still maintained, and more buttons have been added according to the addition of new functions.

![img](https://img-community.csdnimg.cn/images/1bcefe6322eb44e69a09db34a08528b4.png)![点击并拖拽以移动](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==)

```html
<!--pages/index/index.wxml-->
<view class="op">
{{progress}}
</view>

<view class="infor">
<text>{{result}}</text>
</view>

<view class="btns">
  <view>
    <view bindtap="clear">C</view>
    <view bindtap="del">Del</view>
    <view bindtap="clickButton" id='a'>ans</view>
    <view bindtap="clickButton" id="(">(</view>
    <view bindtap="clickButton" id=")">)</view>
</view>
<view>
    <view bindtap="clickButton" id="sin(">sin</view>
    <view bindtap="clickButton" id="cos(">cos</view>
    <view bindtap="clickButton" id="tan(">tan</view>
    <view bindtap="clickButton" id="deg">deg</view>
    <view bindtap="clickButton" id="^">^</view>
</view>
<view>
  <view bindtap="clickButton"  id="7">7</view>
    <view bindtap="clickButton"  id="8">8</view>
    <view bindtap="clickButton"  id="9">9</view>
    <view bindtap="clickButton" id="*">*</view>
</view>
<view>
  <view bindtap="clickButton"  id="4">4</view>
    <view bindtap="clickButton"  id="5">5</view>
    <view bindtap="clickButton"  id="6">6</view>
    <view bindtap="clickButton" id="-">-</view>
</view>
<view>
  <view bindtap="clickButton"  id="1">1</view>
    <view bindtap="clickButton"  id="2">2</view>
    <view bindtap="clickButton"  id="3">3</view>
    <view bindtap="clickButton" id="+">+</view>
</view>
<view>
    <view bindtap="clickButton" id="0">0</view>
    <view bindtap="clickButton" id=".">.</view>
    <view bindtap="clickButton" id="=">=</view>
    <view bindtap="clickButton" id="/">/</view>
</view>
<view>
  <view bindtap="memory">memory</view>
</view>
</view>
```

Due to the addition of history recording function, I have designed a new history page, using a combination of wheat and grey, and using warm colors to make the user's appearance more comfortable.

![img](https://img-community.csdnimg.cn/images/d98f313e46c8424ea5b915090e9dbe2b.png)![点击并拖拽以移动](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==)

```html
<view class='content'>Memory
  <block wx:for="{{memory}}" wx:for-item="memory1">
    <view class='item'>
    {{memory1.progress}} = {{memory1.result}}
    </view>
  </block>
</view>
```

### **2.Front-end computing:**

Creates the progress string based on the user's input, implemented in a call to the evaluate() function in math.min.js. And based on this, implement the deletion of the string, and the clearing of all the data. Within this, design functions that connect to the next page and turn the page. After connecting to the back-end, in the implementation of recording history according to the designed function, as well as calling the results of the calculation to participate in the calculation.

```javascript
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
  onReady: function ()  {
    for(let k = 0;k<10;k++){
      this.del_bt();
    }
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
```

![点击并拖拽以移动](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==)

 

And when jumping to the history screen, the function will be run directly to have the history displayed on that screen.

```javascript
data:{ 
   memory:[]
  },
  
  onShow: function () {
    const memorys1=  app.globalData.memorys
    const last10Memorys = memorys1.length >= 10 ? memorys1.slice(-10) : memorys1;
    const newemorys = last10Memorys.map(m =>{
        m.progress = m.progress.replace(/ /g, '+');
      return m;
    })
    this.setData({
      memory:newemorys
    });
  },
```

![点击并拖拽以移动](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==)

 

I designed three equations to connect to the database, based on API links and SQL statements, to enable the transfer of data to the cloud database, the ability to delete and modify it, and finally the ability to retrieve the data from the database to enable the reproduction of historical records.

```javascript
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
      },
      fail: () => {},
      complete: () => {}
    })
  },
```

![点击并拖拽以移动](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==)

## Summary

> In this class, I really appreciated the connection between the front-end and the back-end, and learnt and went on to really practice transferring between the database and the software, and gained a better understanding of the hard work that goes into actually making the software, as well as having a clearer handle on the task.
