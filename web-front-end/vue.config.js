module.exports = {
/*
 * @Descripttion: aiyoudiao
 * @version: 1.0.0
 * @Author: aiyoudiao
 * @Date: 2020-03-24 13:40:32
 * @LastEditTime: 2020-03-25 23:55:17
 * @LastEditors: aiyoudiao
 * @FilePath: \vue-admin-template-small2\vue.config.js
 */
    devServer: {
        // port: 8080,
        // open: true,
        // overlay: {
        //     warnings: false,
        //     errors: true,
        // },
        // proxy: {
        //     '/api': {
        //         target: 'http://www.dell-lee.com/', // 对应自己的接口
        //         // target: 'http://xxxx/device/', // 对应自己的接口
        //         changeOrigin: true,
        //         ws: true,
        //         pathRewrite: {
        //             '^/api': '',
        //         },
        //     },
        // },
        before: require('./mock/mock-server.js'),
        // before: app => {
        //     app.get('/api/info', (req, res) => {
        //         res.json({
        //             errno: 0,
        //             data: {
        //                 info: 'success',
        //                 code: '0000',
        //             },
        //         })
        //     })
        // },
    },
}
