import StateMachine from 'javascript-state-machine'

let fsm = new StateMachine({
    init: "pending",
    transitions: [
        {
            name: 'resolve',
            from: 'pending',
            to: 'fullfilled'
        },
        {
            name: 'rejected',
            from: 'pending',
            to: 'failed'
        }
    ],
    methods: {
        onResolve(state,date) {
            date.successList.forEach(fn => fn())
        },
        onRejected(state,date) {
            date.failList.forEach(fn => fn())
        }
    },
})

class MyPromise {
    constructor(fn) {
        this.successList = []
        this.failList = []
        fn(() => {
            fsm.resolve(this)
        }, () => {
            fsm.rejected(this)
        })
    }
    then(successFn, failFn) {
        this.successList.push(successFn)
        this.failList.push(failFn)
    }
}

// 测试
let res = loadImg('http://img599.net/images/2020/09/06/Inked22314c9.gif')
res.then(success => {
    alert('成功')
}, fail => {
    alert('失败')
})
function loadImg(src) {
    return new MyPromise((resolve, rejected) => {
        let img = document.createElement('img')
        img.onload = function () {
            document.body.append(img)
            resolve()
        }
        img.onerror = function () {
            rejected()
        }
        img.src = src
    })

}