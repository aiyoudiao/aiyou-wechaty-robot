// import axios from 'axios'
// import config from '../Config/config'

// let http = axios.create({
//     baseURL: config.token_server_base_url + 'tokenserver/v1.0/',
//     withCredentials: true,
//     headers: {
//         'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
//     },
//     transformRequest: [function (data) {
//         let newData = ''
//         for (let k in data) {
//             if (data.hasOwnProperty(k) === true) {
//                 newData += encodeURIComponent(k) + '=' + encodeURIComponent(data[k]) + '&'
//             }
//         }
//         return newData
//     }],
// })

// function apiAxios(method, url, params, response) {
//     http.defaults.headers.common.Authorization = window.localStorage.getItem('userProfile')
//     http({
//         method,
//         url,
//         data: method === 'POST' || method === 'PUT' ? params : null,
//         params: method === 'GET' || method === 'DELETE' ? params : null,
//     }).then((res) => {
//         if (res && res.data.returnStr) {
//             window.localStorage.setItem('userProfile', res.data.data.returnStr)
//         }
//         response(res)
//     }).catch((err) => {
//         response(err)
//     })
// }

// export default {
//     get(url, params, response) {
//         return apiAxios('GET', url, params, response)
//     },
//     post(url, params, response) {
//         return apiAxios('POST', url, params, response)
//     },
//     put(url, params, response) {
//         return apiAxios('PUT', url, params, response)
//     },
//     delete(url, params, response) {
//         return apiAxios('DELETE', url, params, response)
//     },
// }


// // WEBPACK FOOTER //
// // ./client/common/Api/api.js
