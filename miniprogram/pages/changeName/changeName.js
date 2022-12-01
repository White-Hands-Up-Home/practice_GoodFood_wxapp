// pages/changeName/changeName.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        myName:"阿尼亚",
    },
    goBack(){
        wx.navigateBack({
          delta: 1,
        })
    },
    changeName(e){
        if(e.detail.value.input.length<=1){
            return;
        }
        console.log(e);
        console.log(this.data.myName)
        this.setData({
            myName:e.detail.value.input,
        })
        wx.setStorageSync('user_name',this.data.myName);
        console.log(this.data.myName);
        this.goBack();
    },
    
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        // console.log(options)
        this.setData({
           myName:options.user_name
        })
        wx.setStorageSync('user_name',this.data.myName);
        console.log(this.data.myName)
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
        wx.request({
          url: '',
        })
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