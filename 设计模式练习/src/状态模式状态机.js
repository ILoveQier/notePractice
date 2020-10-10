import StateMachine from 'javascript-state-machine'

let fsm = new StateMachine({
    init:'收藏',
    transitions:[
        {
            name:'store',
            from:'收藏',
            to:'取消收藏'
        },
        {
            name:'deleteStore',
            from:'取消收藏',
            to:'收藏'
        }
    ],
    methods: {
        onStore(){
            updateText()
        },
        onDeleteStore() {
            updateText()
        }
    },
})

function updateText() {
    document.body.innerHTML = fsm.state
}
updateText()

document.body.addEventListener('click',function () {
    if (fsm.is('收藏')) {
        return fsm.store()
    }
    return fsm.deleteStore()
})