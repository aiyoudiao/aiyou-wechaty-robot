// import Mock from 'mockjs'
const Mock = require('mockjs')
// import { param2Obj } from '../src/utils'
const param2Obj = function (url) {
    const search = url.split('?')[1]
    if (!search) {
        return {}
    }
    return JSON.parse(
        '{"'
      + decodeURIComponent(search)
      .replace(/"/g, '\\"')
      .replace(/&/g, '","')
      .replace(/=/g, '":"')
      .replace(/\+/g, ' ')
      + '"}'
    )
}

// const user = require('./user')
const table = require('./table')

// const mocks = [...user, ...table]
const mocks = [...table]

// for front mock
// please use it cautiously, it will redefine XMLHttpRequest,
// which will cause many of your third-party libraries to be invalidated(like progress event).
function mockXHR() {
    // mock patch
    // https://github.com/nuysoft/Mock/issues/300
    Mock.XHR.prototype.proxy_send = Mock.XHR.prototype.send
    Mock.XHR.prototype.send = function () {
        if (this.custom.xhr) {
            this.custom.xhr.withCredentials = this.withCredentials || false

            if (this.responseType) {
                this.custom.xhr.responseType = this.responseType
            }
        }
        this.proxy_send(...arguments)
    }

    function XHR2ExpressReqWrap(respond) {
        return function (options) {
            let result = null
            if (respond instanceof Function) {
                const { body, type, url } = options
                // https://expressjs.com/en/4x/api.html#req
                result = respond({
                    method: type,
                    body: JSON.parse(body),
                    query: param2Obj(url),
                })
            } else {
                result = respond
            }
            return Mock.mock(result)
        }
    }

    for (const i of mocks) {
        Mock.mock(
            new RegExp(i.url),
            i.type || 'get',
            XHR2ExpressReqWrap(i.response)
        )
    }
}

// for mock server
const responseFake = (url, type, respond) => ({
    // url: new RegExp(`${process.env.VUE_APP_BASE_API}${url}`),
    url,
    type: type || 'get',
    response(req, res) {
        console.log('request invoke:' + req.path)
        res.json(
            Mock.mock(respond instanceof Function ? respond(req, res) : respond)
        )
    },
})

module.exports = {
    mocks: mocks.map(route => responseFake(route.url, route.type, route.response)),
    mockXHR,
}
