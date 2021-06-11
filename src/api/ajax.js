// 封装axios
// 返回promise对象
// 1.优化：统一处理请求异常？在外层包Promise对象，在请求出错时，不reject(error)，而是显示错误提示
// 2.优化：异步得到的不是reponse，而是response.data
import { message } from 'antd'
import axios from 'axios'

export default function ajax(url,data={},method='GET'){

    return new Promise((resolve, reject) => {
        let promise
        //1.执行异步ajax请求
        if(method === 'GET'){
            promise =  axios.get(url,{
                            params: data
                        })
        }else{
            promise =  axios.post(url,data)
        }
        promise.then(response => {
            resolve(response.data)
        }).catch(error => {
            // reject(error)
            message.error('请求出错了：' + error.message)
        })
        //2.如果成功了，调用resolve
        //3.如果失败了，不是调用reject，而是提示异常信息
    })

    
}