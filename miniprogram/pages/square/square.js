// pages/square/square.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        stores:[
            {
                id: 1,
                name: 'KFC',
                price: 50
            },
            {
                id: 2,
                name: 'KFC',
                price: 50
            },
            {
                id: 3,
                name: 'KFC',
                price: 50
            },
            {
                id: 4,
                name: 'KFC',
                price: 50
            },
            {
                id: 5,
                name: 'KFC',
                price: 50
            },
        ]
    },

    // 页面刷新请求数据
    getData(){
    wx.request({
      url: 'url',
    //   data: data,
    //   dataType: dataType,
    //   enableCache: true,
    //   enableHttp2: true,
    //   enableQuic: true,
    //   header: header,
    //   method: method,
    //   responseType: responseType,
    //   timeout: 0,
      success: (result) => {},
      fail: (res) => {},
      complete: (res) => {},
    })
    },
    // 跳转页面
    goToDetail(){
        wx.navigateTo({
          url: '/pages/square-detail/square-detail',
        })
    },

      // 评分
  scoring: function(e) {
    // console.log(e.detail.fraction)
    let optionsList = this.data.optionList
    optionsList.map(item => {
      const child = this.selectComponent(`#${item}`);
      // console.log(child.data.number)
      let key = `${item}Fraction`
      this.setData({
        [key]: child.data.number
      })
    })
  },


    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        
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
    onPullDownRefresh: function(){
        wx.stopPullDownRefresh()
    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})