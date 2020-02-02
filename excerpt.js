// pages/excerpt/excerpt.js
var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    folders:{},
    currentTab: 0,
    bookMarksSrc:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      folders: app.globalData.userWriteData,
      bookMarksSrc: "../../images/bookmarks.svg"
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
    this.setData({
      folders: app.globalData.userWriteData,
      bookMarksSrc: "../../images/bookmarks.svg"
    })
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

  },

  //切换
  switchNav:function(e){
    var id=e.currentTarget.id;
    this.setData({
      currentTab : id
    });
    if(id==0) this.setData({
      folders: app.globalData.userWriteData,
      bookMarksSrc: "../../images/bookmarks.svg"
    });
    if(id==1) this.setData({
      folders: app.globalData.userSaveData,
      bookMarksSrc: "../../images/bookmarksSave.svg"
    });
  },

  createNewFolder:function(){
    wx.navigateTo({
      url: '../newFolder/newFolder',
    })
  }
})