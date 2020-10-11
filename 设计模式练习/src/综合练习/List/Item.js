import $ from 'jquery'
import getCart from '../ShoppingCart/Cart'
import {log} from '../util/log'

import StateMachine from 'javascript-state-machine'

export default class Item {
    constructor(list, data) {
        this.list = list
        this.data = data
        this.$el = $('<div>')
        this.cart = getCart()
    }
    init() {
        this.initContent()
        this.initBtn()
        this.render()
    }

    initContent() {
        this.$el.append($(`<p>名称：${this.data.name}</p>`))
        this.$el.append($(`<p>价格：${this.data.price}</p>`))
        if (this.data.discount !== 1) {
            this.$el.append($(`<p>折扣：${this.data.discount}</p>`))
        }
    }
    initBtn() {
        let $btn = $('<button>')
        let fsm = new StateMachine({
            init: '加入购物车',
            transitions: [
                {
                    name: 'addToCart',
                    from: '加入购物车',
                    to: '移除购物车'
                },
                {
                    name: 'delFromCart',
                    from: '移除购物车',
                    to: '加入购物车'
                }
            ],
            methods: {
                onAddToCart: () => {
                    this.addToCartHandler()
                    updateText()
                },
                onDelFromCart: () => {
                    this.delFromCartHandler()
                    updateText()
                }
            },
        })
        updateText()
        function updateText() {
            $btn.text(fsm.state)
        }
        $btn.on('click', () => {
            if (fsm.is('加入购物车')) {
                fsm.addToCart()
            } else {
                fsm.delFromCart()
            }
        })
        this.$el.append($btn)
    }
    @log('add')
    addToCartHandler() {
        this.cart.add(this.data)
    }
    @log('del')
    delFromCartHandler() {
        this.cart.del(this.data.id)
    }
    render() {
        this.list.$el.append(this.$el)
    }
}