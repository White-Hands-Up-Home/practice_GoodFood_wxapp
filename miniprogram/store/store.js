import {observable, action} from 'mobx-miniprogram'

export const store = observable({
    isLogined: false,
    login: action(function(){
        this.isLogined = true;
    })
})