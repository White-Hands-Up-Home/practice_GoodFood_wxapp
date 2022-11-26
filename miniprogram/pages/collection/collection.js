// pages/collection/collection.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        count: 12,
        info: [{
                shop_name: "工学部小吃",
                shop_profile_photo: "iamge_url",
                shop_score: 10,
                comment_count: 56,
                shop_isChiHu:true
            },
            {
                shop_name: "信部小吃",
                shop_profile_photo: "iamge_url",
                shop_score: 5,
                comment_count: 84,
                shop_isChiHu:false
            },
            {
                shop_name: "医学部小吃",
                shop_profile_photo: "iamge_url",
                shop_score: 4,
                comment_count: 67,
                shop_isChiHu:true
            },
            {
                shop_name: "工学部小吃",
                shop_profile_photo: "iamge_url",
                shop_score: 10,
                comment_count: 56,
                shop_isChiHu:false
            },
            {
                shop_name: "信部小吃",
                shop_profile_photo: "iamge_url",
                shop_score: 5,
                comment_count: 84,
                shop_isChiHu:true
            },
            {
                shop_name: "医学部小吃",
                shop_profile_photo: "iamge_url",
                shop_score: 4,
                comment_count: 67,
                shop_isChiHu:true
            }, {
                shop_name: "工学部小吃",
                shop_profile_photo: "iamge_url",
                shop_score: 10,
                comment_count: 56,
                shop_isChiHu:true
            },
            {
                shop_name: "信部小吃",
                shop_profile_photo: "iamge_url",
                shop_score: 5,
                comment_count: 84,
                shop_isChiHu:true
            },
            {
                shop_name: "医学部小吃",
                shop_profile_photo: "iamge_url",
                shop_score: 4,
                comment_count: 67,
                shop_isChiHu:true
            }, {
                shop_name: "工学部小吃",
                shop_profile_photo: "iamge_url",
                shop_score: 10,
                comment_count: 56,
                shop_isChiHu:true
            },
            {
                shop_name: "信部小吃",
                shop_profile_photo: "iamge_url",
                shop_score: 5,
                comment_count: 84,
                shop_isChiHu:true
            },
            {
                shop_name: "医学部小吃",
                shop_profile_photo: "iamge_url",
                shop_score: 4,
                comment_count: 67,
                shop_isChiHu:true
            }
        ]

    },
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
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})