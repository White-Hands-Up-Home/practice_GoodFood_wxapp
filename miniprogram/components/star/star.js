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
<<<<<<< HEAD
        '../../images/xrxmui(1)/svg/经典案例_空五角星_收藏.svg',
        '../../images/xrxmui(1)/svg/经典案例_空五角星_收藏.svg',
        '../../images/xrxmui(1)/svg/经典案例_空五角星_收藏.svg',
        '../../images/xrxmui(1)/svg/经典案例_空五角星_收藏.svg',
        '../../images/xrxmui(1)/svg/经典案例_空五角星_收藏.svg',
=======
        '../../images/xrxmui(1)/svg/like.svg',
        '../../images/xrxmui(1)/svg/like.svg',
        '../../images/xrxmui(1)/svg/like.svg',
        '../../images/xrxmui(1)/svg/like.svg',
        '../../images/xrxmui(1)/svg/like.svg',
>>>>>>> master
      ],
      number: 0
    },
  
    /**
     * 组件的方法列表
     */
    methods: {
      scoring: function (e) {   
        let idx = e.target.dataset.index
        let list = [
<<<<<<< HEAD
            '../../images/xrxmui(1)/svg/经典案例_空五角星_收藏.svg',
            '../../images/xrxmui(1)/svg/经典案例_空五角星_收藏.svg',
            '../../images/xrxmui(1)/svg/经典案例_空五角星_收藏.svg',
            '../../images/xrxmui(1)/svg/经典案例_空五角星_收藏.svg',
            '../../images/xrxmui(1)/svg/经典案例_空五角星_收藏.svg',
        ]
        for (let i = 0; i <= idx; i++) {
          list[i] = '../../images/xrxmui(1)/svg/经典案例_五角星_收藏后.svg'
=======
          '../../images/xrxmui(1)/svg/like.svg',
          '../../images/xrxmui(1)/svg/like.svg',
          '../../images/xrxmui(1)/svg/like.svg',
          '../../images/xrxmui(1)/svg/like.svg',
          '../../images/xrxmui(1)/svg/like.svg',
        ]
        for (let i = 0; i <= idx; i++) {
          list[i] = '../../images/xrxmui(1)/svg/like.svg'
>>>>>>> master
        }
        this.setData({
          list,
          number: idx + 1
        })
        this.triggerEvent('scoring', {fraction: this.data.number})
      }
    }
  })
  