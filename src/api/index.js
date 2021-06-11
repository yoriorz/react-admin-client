import ajax from './ajax'

export function reqLogin(username, password){
   return ajax('/login',{username, password},'POST')  //接口函数返回值都是promise
}

export function reqAddUser(user){
    return ajax('/manager/user/add',user,'POST')  //接口函数返回值都是promise
}