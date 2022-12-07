// pages/shops-detail/shops-detail.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        like_svg: "../../images1/image/like.svg",
        shop_name: null,
        shop_comment_count: null,
        shop_score: null,
        data_count: 12,
        info: [
        ]

    },
    getComments(){
        wx.request({
          url: 'http://127.0.0.1:4523/m1/1961063-0-default/shop/details',
          method:"GET",
          success:(res)=>{
              this.setData({
                  info:[...this.data.info,...res.data],
              })
          },
          complete:()=>{
              wx.hideLoading({
                success: (res) => {},
              })
          }
        })
    },
    // changeLike(e) {
    //     console.log(e);
    //     if (this.data.like_svg == "../../images1/image/like_fill.png") {
    //         this.setData({
    //             like_svg: "../../images1/image/like.svg",
    //         })
            
    //     } else {
    //         this.setData({
    //             like_svg: "../../images1/image/like_fill.png",
    //         })
    //     }

    // },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        var getData = require('../shops/shops.js');
        var name = wx.getStorageSync('shop_name');
        var score = wx.getStorageSync('shop_score');
        var comment = wx.getStorageSync('shop_comment');
        this.setData({
            shop_name: name,
            shop_comment_count: comment,
            shop_score: score,
        });
        this.getComments();

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {
        
    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {
        wx.showLoading({
          title: '加载数据中',
        })
        this.getComments();
        // console.log(22);
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})