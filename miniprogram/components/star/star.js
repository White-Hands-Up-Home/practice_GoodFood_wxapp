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

        '../../images/xrxmui(1)/svg/star-no-fill.svg',
        '../../images/xrxmui(1)/svg/star-no-fill.svg',
        '../../images/xrxmui(1)/svg/star-no-fill.svg',
        '../../images/xrxmui(1)/svg/star-no-fill.svg',
        '../../images/xrxmui(1)/svg/star-no-fill.svg',

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
            '../../images/xrxmui(1)/svg/star-no-fill.svg',
            '../../images/xrxmui(1)/svg/star-no-fill.svg',
            '../../images/xrxmui(1)/svg/star-no-fill.svg',
            '../../images/xrxmui(1)/svg/star-no-fill.svg',
            '../../images/xrxmui(1)/svg/star-no-fill.svg',
        ]
        for (let i = 0; i <= idx; i++) {
          list[i] = '../../images/xrxmui(1)/svg/star-fill.svg'

        }
        this.setData({
          list,
          number: idx + 1
        })
        this.triggerEvent('scoring', {fraction: this.data.number})
      }
    }
  })
  