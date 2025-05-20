const user = {
    username : "abhinav",
    price : 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()
// console.log(this);

// function chai(){
//     let username = "abhinav"
//     console.log(this.username);
// }
// chai()

// const chai = function(){
//     let username = "abhinav"
//     console.log(this.username);
// }
const chai = () =>{
    let username = "abhinav"
    console.log(this.username);
}
// chai()

// const addtwo = (num1, num2) => {     // explicit return
//     return num1 + num2
// }

// const addtwo = (num1, num2) => num1 + num2       // implicit return
// const addtwo = (num1, num2) => ( num1 + num2 )   // implicit return
const addtwo = (num1, num2) => ( {username : "abhinav"} )  


console.log(addtwo(2,4))

const myArr = [1, 2, 3, 4, 5]
// myArr.forEach(function() {})
// myArr.forEach(() => {})
// myArr.forEach()

