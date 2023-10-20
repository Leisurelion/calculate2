// pages/memory/memory.js
const app=getApp();
Page({
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
  // display(){
  //   const memorys1=  app.globalData.memorys
  //   const newemorys = memorys1.map(m =>{
  //       m.progress = m.progress.replace(/ /g, '+');
  //        console.log(m.progress);
  //     return m;
  //   })
  //   this.setData({
  //     memory:newemorys
  //   });
  //   console.log(app.globalData);
  //   console.log(this.data.memory)
  // },

  /**
   * 生命周期函数--监听页面加载
   */
  // onLoad(options) {

  // },

  // /**
  //  * 生命周期函数--监听页面初次渲染完成
  //  */
  // onReady() {

  // },

  // /**
  //  * 生命周期函数--监听页面显示
  //  */
  // onShow() {

  // },

  // /**
  //  * 生命周期函数--监听页面隐藏
  //  */
  // onHide() {

  // },

  // /**
  //  * 生命周期函数--监听页面卸载
  //  */
  // onUnload() {

  // },

  // /**
  //  * 页面相关事件处理函数--监听用户下拉动作
  //  */
  // onPullDownRefresh() {

  // },

  // /**
  //  * 页面上拉触底事件的处理函数
  //  */
  // onReachBottom() {

  // },

  // /**
  //  * 用户点击右上角分享
  //  */
  // onShareAppMessage() {

  // }
})