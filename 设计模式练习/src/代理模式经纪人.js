let star = {
    name: '张柏芝',
    phone: '13515653674'
}

let agent = new Proxy(star, {
    get: function (target, key) {
        // 代理的作用体现在拦截
        if (key === 'phone') {
            return 'agent phone : 13656256472'
        }
        // 除了敏感信息，其它都可以返回
        return target[key]
    },
    set: function (target, key, val) {
        // 也可以设置属性
        if (key === 'price') {
            if (val < 1000) {
                alert('报价太低')
                return true

            }
            target[key] = val
            return true
        }
    }
})

console.log(agent.phone);
agent.price = 10
console.log(agent);
