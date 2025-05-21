// if 
// const isUserLoggedIn = true
// const temprature = 41 

// if (temprature === 41){
//     console.log("less than 50");    
// }
// else {
//     console.log("temprature is greate than 50");
// }
// console.log("Execute")

// <, >, <=, >=, ==, !=, ===, !==


// const score = 200

// if(score > 100){
//     const power = "fly"
//     console.log(`User Power: ${power}`);
// }
// console.log(`User Power: ${power}`);


// const balance = 1000
// // if(balance > 500) console.log("text");

// if(balance < 500) {
//     console.log("less than");    
// }
// else if (balance < 900){
//     console.log("less than 750");
// }
// else {
//     console.log("less than 1200");
// }

const userLoggedIn = true
const debitCard = true 
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3){
    console.log("Allow to buy course");
}
if (loggedInFromGoogle || loggedInFromEmail){
    console.log("user logged In");
}
