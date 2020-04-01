<template>
  <div style="padding: 10px">
    <div style="background: #fff; border-radius: 8px; padding: 20px;">
      <Form :model="formItem" :label-width="80">
        <Row>
          <Col span="11">
            <FormItem label="关键字">
              <Input
                v-model="formItem.input.关键字"
                placeholder="请输入关键词"
                clearable
              />
            </FormItem>
          </Col>
          <Col span="13">
            <FormItem label="起始时间">
              <DatePicker
                type="date"
                placeholder="选择日期"
                v-model="formItem.date.起始日期"
              ></DatePicker
              >-
              <TimePicker
                type="time"
                placeholder="选择时间"
                v-model="formItem.time.起始时间"
              ></TimePicker>
            </FormItem>
          </Col>
        </Row>

        <Row>
          <Col span="11">
            <FormItem label="群名称">
              <Input
                v-model="formItem.input.群名称"
                placeholder="请输入群名称"
                clearable
              />
            </FormItem>
          </Col>
          <Col span="13">
            <FormItem label="结束时间">
              <DatePicker
                type="date"
                placeholder="选择日期"
                v-model="formItem.date.结束日期"
              ></DatePicker
              >-
              <TimePicker
                type="time"
                placeholder="选择时间"
                v-model="formItem.time.结束时间"
              ></TimePicker>
            </FormItem>
          </Col>
        </Row>
        <FormItem>
          <Row>
            <Col span="5" offset="7">
              <Button type="primary" @click="searchByFormData">查询</Button>
            </Col>
            <Col span="5" offset="0">
              <Button type="primary" html-type="reset">重置</Button>
            </Col>
          </Row>
        </FormItem>
      </Form>
      <Table
        height="270"
        border
        stripe
        :columns="columnsQuery"
        :data="dataQueryResult"
      ></Table>
      <br />
      <Page
        :total="total"
        :current="current"
        :page-size="pageSize"
        @on-page-size-change="changePageSize"
        @on-change="changePage"
        show-total
        show-sizer
        show-elevator
      />
    </div>

    <!-- <Modal v-model="modal11" fullscreen title="Fullscreen Modal">
      <div>This is a fullscreen modal</div>
    </Modal> -->

    <Drawer :closable="false" width="640" v-model="value4" title="群记录详情">
      <div class="demo-drawer-profile">
        <p :style="pStyle">
          <Row>
            <Col span="11">
              id: <span :style="sStyle">{{ details.id }}</span>
            </Col>
            <Col  offset="2" span="11">
              from: <span :style="sStyle">{{ details.from }}</span>
            </Col>
          </Row>
        </p>
        <p :style="pStyle">
          <Row>
            <Col span="11">
              to: <span :style="sStyle">{{ details.to }}</span>
            </Col>
            <Col offset="2" span="11">
              type: <span :style="sStyle">{{ details.type }}</span>
            </Col>
          </Row>
        </p>
        <p :style="pStyle">
          <Row>
            <Col span="11">
              room: <span :style="sStyle">{{ details.room }}</span>
            </Col>
            <Col  offset="2"  span="11">
              date : <span :style="sStyle">{{ details.date }}</span>
            </Col>
          </Row>
        </p>
        <p :style="pStyle">
          message:
          <span :style="sStyle2">{{ details.message }}</span
          >
        </p>
      </div>
    </Drawer>
  </div>
</template>

<script>
import { groupRecordQueryURL, groupRecordQueryByFormDataURL } from '../common/requestUrl'

export default {
    name: 'groupRecordQuery',

    data() {
        return {
            // #region 表格 Code Module

            columnsQuery: [
                {
                    title: 'id',
                    key: 'id',
                },
                {
                    title: 'from',
                    key: 'from',
                },
                {
                    title: 'to',
                    key: 'to',
                },
                {
                    title: 'type',
                    key: 'type',
                },
                {
                    title: 'message',
                    key: 'message',
                },
                {
                    title: 'room',
                    key: 'room',
                },
                {
                    title: 'date',
                    key: 'date',
                },
                {
                    title: '操作',
                    key: 'action',
                    width: 80,
                    align: 'center',
                    render: (h, params) => h('div', [
                        h(
                            'Button',
                            {
                                props: {
                                    type: 'primary',
                                    size: 'small',
                                },
                                style: {
                                    // marginRight: '5px'
                                    textAlign: 'center',
                                },
                                on: {
                                    click: () => {
                                        this.value4 = true
                                        console.log(params.row.detail)
                                        this.initDetail(params.row)
                                    },
                                },
                            },
                            '详情',
                        ),
                        // h('Button', {
                        //     props: {
                        //         type: 'error',
                        //         size: 'small',
                        //     },
                        //     on: {
                        //         click: () => {
                        //             this.remove(params.index)
                        //         },
                        //     },
                        // }, 'Delete'),
                    ]),
                },
            ],
            dataQuery: [],
            current: 1,
            total: 0,
            pageSize: 10,

            // #endregion 表格 Code Module End

            // #region 表单 Code Module

            formItem: {
                input: {
                    关键字: '',
                    群名称: '',
                },
                date: {
                    起始日期: '',
                    结束日期: '',
                },
                time: {
                    起始时间: '',
                    结束时间: '',
                },
            },

            // #endregion 表单 Code Module End

            // #region 弹窗 Code Module
            // modal11: false,

            // #endregion 弹窗 Code Module End

            // #region 抽屉 Code Module

            value4: false,
            pStyle: {


                fontSize: '20px',
                color: 'rgba(0, 0, 0, 0.5)',
                lineHeight: '30px',
                display: 'block',
                marginBottom: '16px',
                fontWeight: 600,
            },
            sStyle: {
                fontSize: '18px',
                color: 'rgba(0,0,0,0.85)',
                textIndent: '.5rem',
                wordBreak: 'break-all',
                fontWeight: 'normal',
            },
            sStyle2: {
                fontSize: '18px',
                color: 'rgba(0,0,0,0.85)',
                textIndent: '1rem',
                display: ' inline-block',
                wordBreak: 'break-all',
                fontWeight: 'normal',
            },
            details: {
                id: '',
                from: '',
                to: '',
                type: '',
                message: '',
                room: '',
                date: '',
            },

            // #endregion 抽屉 Code Module End
        }
    },
    props: {
        menuList: {
            type: Array,
        },
    },
    computed: {
        isActive() {
            const currentRoute = this.$route.path
            return item => currentRoute.indexOf(item.link) !== -1
        },
        dataQueryResult() {
            const index = this.current - 1
            const size = this.total < this.pageSize ? this.total : this.pageSize
            const start = index * size
            const end = start + size

            return this.dataQuery.slice(start, end).map(value => {
                value.detail = value.message
                value.message = value.message.substr(0, 10) + '...'

                return value
            })
        },
    },
    // beforeRouteEnter(to, from, next) {
    //     if (to.path !== '/') return next()
    //     next((vm) => vm.$router.replace('/app'))
    // },
    methods: {
        clickTitle(item) {
            if (item.children.length === 0) {
                this.$router.push(item.link)
            } else {
                return false
            }
        },
        clickChild(item) {
            this.$router.push(item.link)
        },
        async initTable() {
            const result = await this.$axios.get(groupRecordQueryURL)
            const {
                data: { total, dataQuery },
            } = result
            this.total = total
            this.dataQuery = dataQuery
        },
        changePage(pageNumber) {
            this.current = pageNumber
        },
        changePageSize(pageSize) {
            this.pageSize = pageSize
        },
        initDetail(row) {
            this.details.id = row.id
            this.details.from = row.from
            this.details.to = row.to
            this.details.type = row.type
            this.details.message = row.detail
            this.details.room = row.room
            this.details.date = row.date
        },
        async searchByFormData() {
            const { 关键字, 群名称 } = this.formItem.input
            const { 起始日期, 结束日期 } = this.formItem.date
            const { 起始时间, 结束时间 } = this.formItem.time

            console.log(`关键字 ： ${关键字}`)
            console.log(`群名称 ： ${群名称}`)
            console.log(`起始日期 ： ${起始日期}`)
            console.log(`结束日期 ： ${结束日期}`)
            console.log(`起始时间 ： ${起始时间}`)
            console.log(`结束时间 ： ${结束时间}`)

            try {
                const result = await this.$axios.post(groupRecordQueryByFormDataURL, {
                    关键字, 群名称, 起始日期, 结束日期, 起始时间, 结束时间,
                })
                const {
                    data: { total, dataQuery },
                } = result
                this.total = total
                this.dataQuery = dataQuery
            } catch (error) {
                console.log(`
        await this.$axios.post(groupRecordQueryByFormDataURL, {
        关键字, 群名称, 起始日期, 结束日期, 起始时间, 结束时间,
        })
                `, error)
            }
        },
    },
    mounted() {
        this.initTable()
    },
}
</script>

<style scoped></style>
