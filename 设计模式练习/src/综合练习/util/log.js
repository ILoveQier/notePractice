export function log(type) {
    return function (target, name, des) {
        let oldval = des.value
        des.value = function () {
            console.log(`日志上报${type}`);
            return oldval.apply(this, arguments)
        }
        return des
    }
}