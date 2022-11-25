// components/score.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
      
    },
  
    /**
     * 组件的初始数据
     */
    data: {
      list: [
        '/miniprogram/images/xrxmui(1)/svg/like.svg',
        '/miniprogram/images/xrxmui(1)/svg/like.svg',
        '/miniprogram/images/xrxmui(1)/svg/like.svg',
        '/miniprogram/images/xrxmui(1)/svg/like.svg',
        '/miniprogram/images/xrxmui(1)/svg/like.svg',
      ],
      number: 0
    },
  
    /**
     * 组件的方法列表
     */
    methods: {
      staring: function (e) {   
        let idx = e.target.dataset.index
        let list = [
          '/miniprogram/images/xrxmui(1)/svg/like.svg',
          '/miniprogram/images/xrxmui(1)/svg/like.svg',
          '/miniprogram/images/xrxmui(1)/svg/like.svg',
          '/miniprogram/images/xrxmui(1)/svg/like.svg',
          '/miniprogram/images/xrxmui(1)/svg/like.svg',
        ]
        for (let i = 0; i <= idx; i++) {
          list[i] = '/miniprogram/images/xrxmui(1)/svg/like_fill.svg'
        }
        this.setData({
          list,
          number: idx + 1
        })
        this.triggerEvent('staring', {fraction: this.data.number})
      }
    }
  })
  