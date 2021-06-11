/* eslint-disable import/no-anonymous-default-export */
// 进行local数据存储管理的工具模块
//保存user
import store from 'store'
const USER_KEY = 'user_key'
export default{

    saveUser(user) {
        // localStorage.setItem(USER_KEY,JSON.stringify(user))
        store.set(USER_KEY,user)
    },

    //读取user
    getUser(){
        // return (localStorage.getItem(USER_KEY) || '{}')
        return store.get(USER_KEY) || {}
    },
    // 删除user 
    removeUser(){
        // localStorage.removeItem(USER_KEY)
        store.remove(USER_KEY)
    }
}