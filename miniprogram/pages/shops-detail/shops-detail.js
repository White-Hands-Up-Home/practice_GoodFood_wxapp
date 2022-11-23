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
        info: [{
                user: {
                    time: "2021-11-17",
                    user_name: "Tom",
                    user_profile_photo_url: "image_url",
                    is_ChiHu: true,
                    comment: {
                        comment_id: "001",
                        comment_content: "xxxx",
                        comment_like_count: 12,
                        comment_review_count: 13
                    },
                    image_url: [
                        "iamge1_url",
                        "image2_url",
                        "iamge3_url"
                    ]
                },
                shop: {
                    shop_id: "str",
                    shop_name: "工学部小吃",
                    shop_score: 10
                }
            },
            {
                user: {
                    time: "2021-11-17",
                    user_name: "Tom",
                    user_profile_photo_url: "image_url",
                    is_ChiHu: true,
                    comment: {
                        comment_id: "001",
                        comment_content: "xxxx",
                        comment_like_count: 12,
                        comment_review_count: 13
                    },
                    image_url: [
                        "iamge1_url",
                        "image2_url",
                        "iamge3_url"
                    ]
                },
                shop: {
                    shop_id: "str",
                    shop_name: "工学部小吃",
                    shop_score: 10
                }
            },
            {
                user: {
                    time: "2021-11-17",
                    user_name: "Tom",
                    user_profile_photo_url: "image_url",
                    is_ChiHu: true,
                    comment: {
                        comment_id: "001",
                        comment_content: "xxxx",
                        comment_like_count: 12,
                        comment_review_count: 13
                    },
                    image_url: [
                        "iamge1_url",
                        "image2_url",
                        "iamge3_url"
                    ]
                },
                shop: {
                    shop_id: "str",
                    shop_name: "工学部小吃",
                    shop_score: 10
                }
            },
            {
                user: {
                    time: "2021-11-17",
                    user_name: "Tom",
                    user_profile_photo_url: "image_url",
                    is_ChiHu: true,
                    comment: {
                        comment_id: "001",
                        comment_content: "xxxx",
                        comment_like_count: 12,
                        comment_review_count: 13
                    },
                    image_url: [
                        "iamge1_url",
                        "image2_url",
                        "iamge3_url"
                    ]
                },
                shop: {
                    shop_id: "str",
                    shop_name: "工学部小吃",
                    shop_score: 10
                }
            },
            {
                user: {
                    time: "2021-11-17",
                    user_name: "Tom",
                    user_profile_photo_url: "image_url",
                    is_ChiHu: true,
                    comment: {
                        comment_id: "001",
                        comment_content: "xxxx",
                        comment_like_count: 12,
                        comment_review_count: 13
                    },
                    image_url: [
                        "iamge1_url",
                        "image2_url",
                        "iamge3_url"
                    ]
                },
                shop: {
                    shop_id: "str",
                    shop_name: "工学部小吃",
                    shop_score: 10
                }
            },
            {
                user: {
                    time: "2021-11-17",
                    user_name: "Tom",
                    user_profile_photo_url: "image_url",
                    is_ChiHu: true,
                    comment: {
                        comment_id: "001",
                        comment_content: "xxxx",
                        comment_like_count: 12,
                        comment_review_count: 13
                    },
                    image_url: [
                        "iamge1_url",
                        "image2_url",
                        "iamge3_url"
                    ]
                },
                shop: {
                    shop_id: "str",
                    shop_name: "工学部小吃",
                    shop_score: 10
                }
            },
            {
                user: {
                    time: "2021-11-17",
                    user_name: "Tom",
                    user_profile_photo_url: "image_url",
                    is_ChiHu: true,
                    comment: {
                        comment_id: "001",
                        comment_content: "xxxx",
                        comment_like_count: 12,
                        comment_review_count: 13
                    },
                    image_url: [
                        "iamge1_url",
                        "image2_url",
                        "iamge3_url"
                    ]
                },
                shop: {
                    shop_id: "str",
                    shop_name: "工学部小吃",
                    shop_score: 10
                }
            },
            {
                user: {
                    time: "2021-11-17",
                    user_name: "Tom",
                    user_profile_photo_url: "image_url",
                    is_ChiHu: true,
                    comment: {
                        comment_id: "001",
                        comment_content: "xxxx",
                        comment_like_count: 12,
                        comment_review_count: 13
                    },
                    image_url: [
                        "iamge1_url",
                        "image2_url",
                        "iamge3_url"
                    ]
                },
                shop: {
                    shop_id: "str",
                    shop_name: "工学部小吃",
                    shop_score: 10
                }
            },
            {
                user: {
                    time: "2021-11-17",
                    user_name: "Tom",
                    user_profile_photo_url: "image_url",
                    is_ChiHu: true,
                    comment: {
                        comment_id: "001",
                        comment_content: "xxxx",
                        comment_like_count: 12,
                        comment_review_count: 13
                    },
                    image_url: [
                        "iamge1_url",
                        "image2_url",
                        "iamge3_url"
                    ]
                },
                shop: {
                    shop_id: "str",
                    shop_name: "工学部小吃",
                    shop_score: 10
                }
            },
            {
                user: {
                    time: "2021-11-17",
                    user_name: "Tom",
                    user_profile_photo_url: "image_url",
                    is_ChiHu: true,
                    comment: {
                        comment_id: "001",
                        comment_content: "xxxx",
                        comment_like_count: 12,
                        comment_review_count: 13
                    },
                    image_url: [
                        "iamge1_url",
                        "image2_url",
                        "iamge3_url"
                    ]
                },
                shop: {
                    shop_id: "str",
                    shop_name: "工学部小吃",
                    shop_score: 10
                }
            },
            {
                user: {
                    time: "2021-11-17",
                    user_name: "Tom",
                    user_profile_photo_url: "image_url",
                    is_ChiHu: true,
                    comment: {
                        comment_id: "001",
                        comment_content: "xxxx",
                        comment_like_count: 12,
                        comment_review_count: 13
                    },
                    image_url: [
                        "iamge1_url",
                        "image2_url",
                        "iamge3_url"
                    ]
                },
                shop: {
                    shop_id: "str",
                    shop_name: "工学部小吃",
                    shop_score: 10
                }
            },
            {
                user: {
                    time: "2021-11-17",
                    user_name: "Tom",
                    user_profile_photo_url: "image_url",
                    is_ChiHu: true,
                    comment: {
                        comment_id: "001",
                        comment_content: "xxxx",
                        comment_like_count: 12,
                        comment_review_count: 13
                    },
                    image_url: [
                        "iamge1_url",
                        "image2_url",
                        "iamge3_url"
                    ]
                },
                shop: {
                    shop_id: "str",
                    shop_name: "工学部小吃",
                    shop_score: 10
                }
            },
            {
                user: {
                    time: "2021-11-17",
                    user_name: "Tom",
                    user_profile_photo_url: "image_url",
                    is_ChiHu: true,
                    comment: {
                        comment_id: "001",
                        comment_content: "xxxx",
                        comment_like_count: 12,
                        comment_review_count: 13
                    },
                    image_url: [
                        "iamge1_url",
                        "image2_url",
                        "iamge3_url"
                    ]
                },
                shop: {
                    shop_id: "str",
                    shop_name: "工学部小吃",
                    shop_score: 10
                }
            },
            {
                user: {
                    time: "2021-11-17",
                    user_name: "Tom",
                    user_profile_photo_url: "image_url",
                    is_ChiHu: true,
                    comment: {
                        comment_id: "001",
                        comment_content: "xxxx",
                        comment_like_count: 12,
                        comment_review_count: 13
                    },
                    image_url: [
                        "iamge1_url",
                        "image2_url",
                        "iamge3_url"
                    ]
                },
                shop: {
                    shop_id: "str",
                    shop_name: "工学部小吃",
                    shop_score: 10
                }
            },
        ]

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