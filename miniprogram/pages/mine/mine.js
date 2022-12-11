// pages/mine/mine.js
import { createStoreBindings } from 'mobx-miniprogram-bindings'
import { store } from '../../store/store'

Page({

    /**
     * 页面的初始数据
     */
    data: {
        user_img:"../../images1/image/user-img.png",
        defalutLiked:false,
        show:false,
        if_ChiHu:true,
        school_num:20223000000,
        is_ChiHu:{
            is2: false
          },
        info: {
            // image: "http://dummyimage.com/400x400",
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
    changePhoto(){
        wx.chooseImage({
          count: 1,
          sizeType: ['original','compressed'],
          success:(res)=>{
              this.setData({
                  user_img:res.tempFilePaths
              })
          }
        })
    },
    goToCollection(){
        if (!this.data.isLogined) {
            wx.navigateTo({
              url: '../login/login',
            })
            return
        }
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
    onClickShow() {
        if (!this.data.isLogined) {
            wx.navigateTo({
              url: '../login/login',
            })
            return
        }
        this.setData({ show: true });
        console.log("show");
      },
    
      onClickHide() {
        this.setData({ show: false });
        console.log("hide");
      },
      submitSchoolNum(e){
          console.log(e.detail.value.input);
          wx.showLoading({
            title: '认证中',
          })
          wx.request({
            url: 'https://mock.apifox.cn/m1/1961063-0-default/user/renzheng',
            method:"POST",
            data:{
                id:e.detail.value.input
            },
            success:(res)=>{
                console.log(res.data);
                this.setData({
                    "is_ChiHu.is2":res.data.is2
                })
                
            },
            fail:()=>{
                console.log("fail");
            },
            complete:()=>{
                wx.hideLoading({
                    success: (res) => {
                        if (this.data.is_ChiHu.is2==false) {
                            wx.showToast({
                              title: '认证失败',
                              icon:"error",
                              duration:1500,
                            })
                        }
                    },
                  })
                  
            }
          })
      },
      goToChangeName(){
        if (!this.data.isLogined) {
            wx.navigateTo({
              url: '../login/login',
            })
            return
        }
          wx.navigateTo({
            url: '../changeName/changeName?user_name=' + this.data.info.user_name,
          })
      },
      noop() {},
      judge(){
         
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
        var name = wx.getStorageSync('user_name');
        if(name!=''){
        this.setData({
            "info.user_name":name,
        })}
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
        this.storeBindings.destoryStoreBindings();
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
          title: '数据加载中',
        })
        this.getComments();
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})