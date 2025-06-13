// let myName = 'Abhinav     '
// let mychannel = 'chai      '
// console.log(myName.trueLength);


let myHeros = ['thor', 'spiderman']

let heroPower = {
    thor: 'Hammer',
    spiderman: 'sling',

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.abhinav = function(){
    console.log(`abhinav is present in all objects`);
}

Array.prototype.heyAbhinav = function(){
    console.log(`Abhinav says hello`);
}

// heroPower.abhinav()
// myHeros.abhinav()
// myHeros.heyAbhinav()
// heroPower.heyAbhinav()

// inheritance 

const User = {
    name: 'chai',
    email: 'chai@google.com'
}
const Teacher = {
    makeVideo: true
}
const TeachingSupport = {
    isAvailable: false 
}
const TASupport = {
    makeAssignment: 'JS Assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

// Teacher.__proto__ = User

// Modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "javascript     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    // console.log(`${this.name}`);
    console.log(`True length is: ${this.trim().length}`)
}

anotherUsername.trueLength()
'anhinav'.trueLength()
'iceTea'.trueLength()