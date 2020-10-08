class LoginForm {
    constructor() {
        this.state = false
    }
    login() {
        if (this.state) {
            return alert('已经登录了')
        }
        this.state = true
        return alert('登录成功')
    }
}

LoginForm.getInstance = (function () {
    let instance = null
    return function () {
        if (!instance) {
            instance = new LoginForm()
        }
        return instance
    }
})()


export default (function () {
    let l1 = LoginForm.getInstance()
    let l2 = LoginForm.getInstance()

    l1.login()
    l2.login()
    console.log(l1 === l2);
})()

