function sayMyName(){
    console.log("A")
    console.log("b")
    console.log("h")
    console.log("i")
    console.log("n")
    console.log("a")
    console.log("v")
}

// sayMyName()

// function sum(number1, number2){         // parameter
//     console.log(number1 + number2);
// }

function sum(number1, number2){         // parameter
    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = sum(6, 3)       // arguments
// console.log("result : ", result);


function loginUserMessage(username = "sam"){
    if(!username){      // !username means (username === undefined)
        console.log("Please enter a username")
        return 
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("abhinav"));
// console.log(loginUserMessage());


function calculateCartPrice(val1, val2, ...num1){
    return num1
}
// console.log(calculateCartPrice(100, 200, 300, 2000));


const user = {
    userName : "Abhinav",
    price : 199
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.userName} and price ${anyObject.price}`);
}
// handleObject(user)
handleObject({
    userName : "sam",
    price : 399
})

const mynewArr = [200, 300, 500, 600]

function returnsecondvalue(getArr){
    return getArr[1]
}
// console.log(returnsecondvalue(mynewArr));
console.log(returnsecondvalue([200, 300, 500, 600]));






