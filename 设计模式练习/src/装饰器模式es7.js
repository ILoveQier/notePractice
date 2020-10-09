
// 装饰类:普通装饰器 
// @testDec
// class Demo { }
// function testDec(target) {
//     target.isDec = true
// }
// alert(Demo.isDec)

// 装饰类:传递参数的装饰器
// @testDec(false)
// class Demo { }
// function testDec(isDesc) {
//     return function (target) {
//         target.isDec = isDesc
//     }
// }
// alert(Demo.isDec)

//装饰类:mixin混入
// function mixins(...obj) {
//     return function (target) {
//         Object.assign(target.prototype, ...obj)
//     }
// }
// let Foo = {
//     test() {
//         alert('123')
//     }
// }
// @mixins(Foo)
// class Demo { }
// let demo = new Demo()
// demo.test()

//装饰方法:实现log打印 descriptor是属性描述符
function log(target, name, descriptor) {
    let oldVal = descriptor.value
    descriptor.value = function () {
        // 新增装饰打印
        console.log('打印了');
        // 执行之前的逻辑
        return oldVal.apply(this, arguments)
    }
    return descriptor
}
class Math {
    @log
    add() {
        return 5 + 2
    }
}
let math = new Math()
math.add()
