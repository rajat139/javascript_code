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
console.log(loginUserMessage());



