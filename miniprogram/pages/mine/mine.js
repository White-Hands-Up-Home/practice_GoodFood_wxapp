// pages/mine/mine.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        if_ChiHu:true,
        school_num:20223000000,
        info: {
            image: "http://dummyimage.com/400x400",
            user_name: "阿尼亚",
            comment: [{
                    "user_name": "武娜",
                    "shop_name": "斗但次老法",
                    "score": 9,
                    "image_1": "http://dummyimage.com/400x400",
                    "content": "eu",
                    "image_2": "http://dummyimage.com/400x400",
                    "like_num": 81,
                    "huitie_num": 84
                },
                {
                    "user_name": "钱秀英",
                    "shop_name": "指信器流么",
                    "score": 7,
                    "image_1": "http://dummyimage.com/400x400",
                    "content": "consequat",
                    "image_2": "http://dummyimage.com/400x400",
                    "like_num": 68,
                    "huitie_num": 12
                },
                {
                    "user_name": "罗丽",
                    "shop_name": "查住毛别治",
                    "score": 31,
                    "image_1": "http://dummyimage.com/400x400",
                    "content": "cillum consectetur",
                    "image_2": "http://dummyimage.com/400x400",
                    "like_num": 88,
                    "huitie_num": 28
                },
                {
                    "user_name": "高娟",
                    "shop_name": "养立只十确关身",
                    "score": 59,
                    "image_1": "http://dummyimage.com/400x400",
                    "content": "dolore",
                    "image_2": "http://dummyimage.com/400x400",
                    "like_num": 10,
                    "huitie_num": 3
                },
                {
                    "user_name": "陆秀兰",
                    "shop_name": "量心无民不验任",
                    "score": 81,
                    "image_1": "http://dummyimage.com/400x400",
                    "content": "anim nisi aliqua eu",
                    "image_2": "http://dummyimage.com/400x400",
                    "like_num": 72,
                    "huitie_num": 92
                }
            ]
        },
    },
    goToCollection(){
        wx.navigateTo({
          url: '../collection/collection',
          success: (result) => {},
          fail: (res) => {},
          complete: (res) => {},
        })
    },
    goToHelp(){
        wx.navigateTo({
          url: '../help/help',
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