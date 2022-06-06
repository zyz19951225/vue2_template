import Vue from 'vue';
import axios from "axios"

const http = axios.create({
    baseURL: '/api',
    headers:{ 'content-type': 'application/json' },
});

http.interceptors.request.use(
    //配置修改操作
    config => {
        return config
    },
    error =>
        Promise.error(error))

http.interceptors.response.use(
    response => {
        // 如果返回的状态码为200，说明接口请求成功，可以正常拿到数据
        // 否则的话抛出错误
        const res = response.data;
        if (res.code === 200) {
            return Promise.resolve(res);
        } else {
            //todo 特殊返回码处理
            Vue.prototype.$message({
                message: response.data.message || '页面加载失败',
                type: 'warning'
            })
            return Promise.reject(res);
        }
    },
    error => {
        if (error.response.status) {
            console.log("网络请求异常——error.response.status:",error.response.status)
            Vue.prototype.$message({
                message: error || '页面加载失败',
                type: 'error'
            })
            return Promise.reject(error.response);
        }
    },
);

export default http;

