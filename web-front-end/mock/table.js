const Mock = require('mockjs')
const { groupRecordQueryURL, groupRecordQueryByFormDataURL } = require('../src/common/requestUrl')
/*
 * @Descripttion: aiyoudiao
 * @version: 1.0.0
 * @Author: aiyoudiao
 * @Date: 2020-03-24 18:05:54
 * @LastEditTime: 2020-03-25 16:04:21
 * @LastEditors: aiyoudiao
 * @FilePath: \vue-admin-template-small2\mock\table.js
 */

function getData(body = {}) {
    const { 关键字, 群名称, 起始日期, 结束日期, 起始时间, 结束时间 } = body

    let data = null
    if (Object.keys(body).length > 0) {
        return Mock.mock({
            'dataQuery|1-30': [{
                id: '@increment(1)',
                from: '@cname()',
                to: '@cname()',
                'type|1': ['text'],
                message: 关键字 ? (关键字 + ' @cparagraph()') : '@cparagraph()',
                room: 群名称 ? (群名称 + ' @region() @province() @county() @ip() ') : ' @region() @province() @county() @ip() ',
                date: '@datetime',
                // pageviews: '@integer(300, 5000)',
            }],
        })
    }
    data = Mock.mock({
        'dataQuery|30': [{
            id: '@increment(1)',
            from: '@cname()',
            to: '@cname()',
            'type|1': ['text'],
            message: '@cparagraph()',
            room: ' @region() @province() @county() @ip() ',
            date: '@datetime',
            // pageviews: '@integer(300, 5000)',
        }],
    })
    return data
}


module.exports = [
    {
        url: groupRecordQueryURL || '/api/table',
        type: 'get',
        response: (req, res) => {
            const dataQuery = getData().dataQuery

            return {
                code: 0,
                data: {
                    total: dataQuery.length,
                    dataQuery,
                },
            }
        },
    },
    {
        url: groupRecordQueryByFormDataURL || '/api/searchByFormData',
        type: 'post',
        response: (req, res) => {
            const query = req.query
            const body = req.body

            const dataQuery = getData(body).dataQuery

            return {
                body,
                query,
                code: 0,
                data: {
                    total: dataQuery.length,
                    dataQuery,
                },
            }
        },
    },
]
