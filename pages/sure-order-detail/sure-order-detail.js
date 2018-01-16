// pages/ziti/ziti.js
Page({
  /**
   * 页面的初始数据
   */

  closeTimePop: function () {
    var that = this;
    that.setData({
      isShowTimePop: false
    })
  },
  chooseTime: function () {
    var that = this;
    that.setData({
      isShowTimePop: true
    })
  },
  closeChooseBags: function () {
    var that = this;
    that.setData({
      isShowChooseBagsPop: false
    })
  },
  chooseBags: function () {
    var that = this;
    that.setData({
      isShowChooseBagsPop: true
    })
  },
  data: {
    isShowTimePop:false,
    isShowChooseBagsPop: false,
    times: ['10:00-11:00', '11:00-12:00', '12:00-13:00', '13:00-14:00', '14:00-15:00', '15:00-16:00'],
  },

  bindChange: function (e) {
    const val = e.detail.value
    this.setData({
      time: this.data.times[val]
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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