import $ from 'jquery'
import { GET_LIST } from '../config/config'

import Factory from './Factory'

export default class List {
    constructor(app) {
        this.app = app
        this.$el = $('<div>')
    }
    init() {
         this.loadData().then(data => {
            this.initItemList(data)
        }).then(res => {
            this.render()
        })
    }
    // 获取数据
    loadData() {
        // 返回promise实例
        return fetch(GET_LIST).then(res => {
            return res.json()
        })
    }
    // 生成列表
    initItemList(data) {
        let factory = new Factory(this)
        console.log(data);
        data.forEach(itemData => {
            // 创建一个item 然后init
            let item = factory.create(itemData)
            item.init()
        })
    }
    // 渲染
    render() {
        this.app.$el.append(this.$el)
    }
}