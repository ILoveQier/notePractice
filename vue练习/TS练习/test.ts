const hello = (name: string) => {
    return `hello ${name}`
}

hello('wangchao')

interface Person {
    readonly id: number
    name: string
    age?: number
}

let me: Person = {
    id: 4,
    name: 'ah',
    age: 4
}
me.name = 'gsdg'
if (me.name === 'a') {
    let arr: Array<number> = [1, 2, 3]
}

function test<T, U>(p1: T, p2: U): [U, T] {
    return [p2, p1]
}
let a1 = 1