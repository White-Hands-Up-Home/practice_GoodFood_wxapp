// pages/publish/publish.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        optionList: ['level'],

        tempFilePaths: [],

        imageList: [],      // 上传图片集合
            form: {          // 用于其他功能提交的参数
                ossUrl: []
            }
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


 //选择图片
 ChooseImg: function () {
    let that = this;
    wx.chooseImage({
      count: 3, // 最多3张图片
      sizeType: ['original', 'compressed'], // 指定是原图或压缩图
      sourceType: ['album', 'camera'], // 指定来源是相册或相机
      success: res => {
        wx.showToast({
          title: '正在上传...',
          icon: 'loading',
          mask: true,
          duration: 1000
        })

        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        let tempFilePath = res.tempFilePaths;
        that.setData({
          tempFilePaths: tempFilePath
        })
      }
    })
  },

  //预览图片
  PreviewImg: function (e) {
    let index = e.target.dataset.index;
    let that = this;
    //console.log(that.data.tempFilePaths[index]);
    //console.log(that.data.tempFilePaths);
    wx.previewImage({
      current: that.data.tempFilePaths[index],
      urls: that.data.tempFilePaths,
    })
  },

  //长按删除图片
  DeleteImg: function (e) {
    var that = this;
    var tempFilePaths = that.data.tempFilePaths;
    var index = e.currentTarget.dataset.index;//获取当前长按图片下标
    wx.showModal({
      title: '提示',
      content: '确定要删除此图片吗？',
      success: function (res) {
        if (res.confirm) {
          //console.log('点击确定了');
          tempFilePaths.splice(index, 1);
        } else if (res.cancel) {
          //console.log('点击取消了');
          return false;
        }
        that.setData({
          tempFilePaths
        });
      }
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
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})