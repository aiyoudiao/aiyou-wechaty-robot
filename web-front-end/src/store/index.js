import Vue from 'vue'
/*
 * @Descripttion: aiyoudiao
 * @version: 1.0.0
 * @Author: aiyoudiao
 * @Date: 2020-03-24 13:40:32
 * @LastEditTime: 2020-03-24 17:40:13
 * @LastEditors: aiyoudiao
 * @FilePath: \vue-admin-template-small\src\store\index.js
 */
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        // 左侧菜单栏数据
        menuItems: [
            {
                name: 'home', // 要跳转的路由名称 不是路径
                size: 18, // icon大小
                type: 'md-home', // icon类型
                text: '主页', // 文本内容
            },
            {
                text: '群消息管理',
                type: 'ios-paper',
                children: [
                    {
                        type: 'ios-grid',
                        name: 'groupRecordQuery',
                        text: '群记录查询',
                        // hidden 属性 隐藏此菜单 可以通过在地址栏上输入对应的 URL 来显示页面
                        // hidden: true,
                    },
                    {
                        text: '三级菜单',
                        type: 'ios-paper',
                        hidden: true,
                        children: [
                            {
                                type: 'ios-notifications-outline',
                                name: 'msg',
                                text: '查看消息',
                                // hidden: true,
                            },
                            {
                                type: 'md-lock',
                                name: 'password',
                                text: '修改密码',
                                // hidden: true,
                            },
                            {
                                type: 'md-person',
                                name: 'userinfo',
                                text: '基本资料',
                                // hidden: true,
                            },
                        ],
                    },
                ],
            },
        ],
    },
    mutations: {
        setMenus(state, items) {
            state.menuItems = [...items]
        },
    },
})

export default store
