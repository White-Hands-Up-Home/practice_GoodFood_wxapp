// pages/square/square.js
import { createStoreBindings } from 'mobx-miniprogram-bindings'
import { store } from '../../store/store'
Page({

    /**
     * 页面的初始数据
     */
    data: {
        defalutLiked:false,
        info: {
            
            user_name: "阿尼亚",
            comment: []
        },
    },
    getComments(){
        wx.request({
          url: 'https://mock.apifox.cn/m1/1961063-0-default/user/',
          method:"GET",
          success:(res)=>{
            // console.log(res);
            res.data.comment.forEach((comment)=>{
                comment.isLiked = this.data.defalutLiked
            })
            console.log(res.data.comment);
            this.setData({
                "info.comment":[...this.data.info.comment,...res.data.comment],
            })
          },
          complete:()=>{
              wx.hideLoading({
                success: (res) => {},
              })
          }
        })
        

    },
    onMyEvent: function (event) {
        if (!this.data.isLogined) {
            wx.navigateTo({
              url: '../login/login',
            })
            return
        }
        // console.log(event);
        const this_comment_Index = this.data.info.comment.findIndex((item) =>
            item.comment_id == event.detail.this_id
        )
        // console.log(this_comment);
        console.log(this_comment_Index);
        if (this.data.info.comment[this_comment_Index].isLiked) 
        {
            this.setData({
                [`info.comment[${this_comment_Index}].isLiked`]: false,
                [`info.comment[${this_comment_Index}].comment_like_count`]:this.data.info.comment[this_comment_Index].comment_like_count - 1
            });
            // this_comment.isLiked=false;
        } else 
        {
            this.setData({
                [`info.comment[${this_comment_Index}].isLiked`]: true,
                [`info.comment[${this_comment_Index}].comment_like_count`]:this.data.info.comment[this_comment_Index].comment_like_count + 1
            });
            // this_comment.isLiked=true;
        }
        // console.log(this_comment);
        // console.log(this.data.info);
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

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        this.getComments();
        this.storeBindings = createStoreBindings(this,{
            store,
            fields: ['isLogined'],
            actions: ['login'],
        })
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
        console.log("hh")
        wx.showLoading({
            title: '加载数据中',
        })
        this.getComments();
        this.getComments();
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})