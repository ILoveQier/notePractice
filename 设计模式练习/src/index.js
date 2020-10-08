import StateMachine from 'javascript-state-machine'

let fsm = new StateMachine({
  init: 'pending',
  transitions: [
    {
      name: 'resolve',
      from: 'pending',
      to: 'fullfilled'
    },
    {
      name: 'reject',
      from: 'pending',
      to: 'rejected'
    }
  ],
  methods: {
    onResolve(state, item, data) {
      item.successList.forEach(fn => fn(data))
    },
    onReject: function (state, item, data) {
      item.failList.forEach(fn => fn(data))
    },

  },
})

class MyPromise {
  constructor(fn) {
    this.successList = []
    this.failList = []
    fn(data => {
      fsm.resolve(this, data)
    }, data => {
      fsm.reject(this, data)
    })
  }
  then(fn1, fn2) {
    this.successList.push(fn1)
    this.failList.push(fn2)
  }
}



let img = document.createElement('img')
function loadImg(src) {
  let promise = new MyPromise((resolve, reject) => {
    img.onload = function () {
      resolve('good')
    }
    img.onerror = function () {
      reject('bad')
    }
    img.src = src
  })
  return promise
}

setTimeout(() => {
  let result = loadImg('https://img.tupianzj.com/uploads/allimg/190715/34-1ZG51123060-L.jpg')
  result.then(data => {
    document.body.append(img)
  }, data => {
    alert(data)
  })
}, 1000);