let sum: (x: number, y: number) => number = (a, b) => { return 2 }

const result = sum(1, 3)

type PlusType = (x: number, y: number) => number
let sum2: PlusType

type Direction = 'up' | 'down'
let a: Direction = 'up'

interface IName {
    name: string
}

// type IPerson = IName & { age: number }

let person: IPerson = { name: '4', age: 2 }

let aa: string = 'd'

interface IPerson {
    name: string
    age: number
}

type IPersonPar = Partial<IPerson>

let wc: IPerson = { name: 'ad', age: 2 }
let wc2: IPersonPar = { name: 'g' }

type IOmit = Omit<IPerson, 'name'>
let wc3: IOmit = { age: 3 }