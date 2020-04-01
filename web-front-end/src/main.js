import Vue from 'vue'
/*
 * @Descripttion: aiyoudiao
 * @version: 1.0.0
 * @Author: aiyoudiao
 * @Date: 2020-03-24 13:40:32
 * @LastEditTime: 2020-03-27 14:42:39
 * @LastEditors: aiyoudiao
 * @FilePath: \vue-admin-template-small2\src\main.js
 */
import axios from 'axios'
import ViewUI from 'view-design'
// import VueAxios from 'vue-axios'
import VueCookie from 'vue-cookie'
import App from './App'
import store from './store'
import router from './router'
import 'view-design/dist/styles/iview.css'
import './permission'

Vue.config.productionTip = false
Vue.use(ViewUI)
// Vue.use(VueAxios, axios)
Vue.use(VueCookie)

// 设置基础URL
// axios.defaults.baseURL = 'http://localhost:8989'
// 设置请求超时时间
axios.defaults.timeout = 5000

/* {code: 0, data: '', message: ''} */
axios.interceptors.request.use((request) => {
    /* loading、请求地址的替换、修改等等 */
    const req = 'loading'
    console.log(req + '...@')
    return request
})

axios.interceptors.response.use(
    /* 业务代码 */
    response => {
        const res = response.data
        /* 业务相关的错误、响应结果的处理 */
        if (res.code !== 0) {
            console.log(`res.message ${res.message}`)
        }
        return response
    },
    /* 网络请求相关的错误机制 */
    reason => Promise.reject(reason),
)

Vue.prototype.$axios = axios

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App),
})
