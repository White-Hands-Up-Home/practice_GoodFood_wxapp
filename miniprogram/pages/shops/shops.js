// pages/shops/shops.js
//待完成请求数据的下拉触底的加载，以及节流,以及初始化的请求数据
Page({

    /**
     * 页面的初始数据
     */
    data: {
        count: 12,
        info: [
        ]

    },
    //跳转到详情页
    jumpToShopsDetail(e){
        console.log(e.currentTarget.dataset);
        let name = e.currentTarget.dataset.name;
        let score = e.currentTarget.dataset.score;
        let comment = e.currentTarget.dataset.comment;
        wx.setStorageSync('shop_name', name);
        wx.setStorageSync('shop_score', score);
        wx.setStorageSync('shop_comment', comment);
        wx.navigateTo({
          url: '/pages/shops-detail/shops-detail',
          success: (result) => {},
          fail: (res) => {},
          complete: (res) => {},
        })
    },
    //编程式导航
    goToSquare() {
        wx.switchTab({
            url: '/pages/square/square',
        })
    },
    getInfo(){
        wx.request({
            url: 'https://mock.apifox.cn/m1/1961063-0-default/shop',
            method:"GET",
            success:(res)=>{
               console.log(res);
               this.setData({
                   info:[...this.data.info,...res.data.data]
               })
            },
            complete:()=>{
              wx.hideLoading({
                success: (res) => {},
              })
            },
          })
          
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
      this.getInfo()
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
        this.getInfo();
 
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
    //下拉刷新
    onPullDownRefresh: function () {
        wx.stopPullDownRefresh();
    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom:function(){
        wx.showLoading({
          title: '数据加载中',
        }),
        this.getInfo();
        console.log(1);
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})