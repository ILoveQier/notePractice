import Item from './Item'

export default class Factory {
    constructor(list) {
        this.list = list
    }
    create(itemData) {
        if (itemData.discount !== 1) {
            itemData = this.filterDiscount(itemData)
        }
        return new Item(this.list, itemData)
    }
    filterDiscount(itemData) {
        return new Proxy(itemData, {
            get: (target, key) => {
                if (key === 'name') {
                    return `${target[key]} 【打折】`
                }
                if (key === 'price') {
                    return ` ${target[key] * itemData.discount} (原价：${target[key]})`
                }
                return target[key]
            }
        })
    }
}