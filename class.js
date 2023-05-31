class Person {
    constructor() {
    }
    talk() {
        console.log('Taking in Person object')
    }
    talk(c) {
        console.log('Taking in Person object with one parameter in talk')
    }

}
class Male extends Person {
    constructor(name) {
        super()
        this.name = name
    }
    talk() {
        console.log('Play football in Male object')
    }
    talk(a, b) {
        console.log('Taking in Person object with two parameter in talk')
    }
}
const male = new Male('HaiDang')
let a = 3;
male.talk(a)
console.log(male)