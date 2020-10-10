const EventEmitter = require('events').EventEmitter

class Dog extends EventEmitter {
    constructor(name) {
        super()
        this.name = name
    }
}

let maozhi = new Dog('maozhi')
maozhi.on('bark', () => {
    console.log(maozhi.name+'bark');
})

setInterval(() => {
    maozhi.emit('bark')
}, 3000);