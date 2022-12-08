// components/comment-card/comment-card.js
Component({
    options:{
        styleIsolation:'isolated'
    },
    /**
     * 组件的属性列表
     */
    properties: {
        // for_开头代表循环内数据
        shop_name:String,
        for_shop_score:Number,
        if_image_url_1:Number,
        if_image_url_2:Number,
        if_image_url_3:Number,
        for_user_name:String,
        for_like_count:Number,
        for_review_count:Number,
        for_comment_content:String,
        for_like_url:String,
        for_comment_id:String,

    },

    /**
     * 组件的初始数据
     */
    data: {

    },

    /**
     * 组件的方法列表
     */
    methods: {
        changeLike(e){
            const this_id = e.currentTarget.id;
            console.log(this_id);
            this.triggerEvent('myevent',{
                this_id
            });
            console.log(this.properties.for_like_url);

            // console.log(this_comment);
        },
        goToComment(){
            console.log("fun");
            wx.navigateTo({
              url: '../../pages/square-detail/square-detail',
            //   events: events,
              success: (result) => {},
              fail: (res) => {},
              complete: (res) => {},
            })
        }
    }
})
