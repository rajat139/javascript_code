// var c = 30
let a = 300
if (true){
    let a = 10
    const b = 20
    // console.log("Inner : ", a);
}
// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "abhinav"

    function two(){
        const website = "youtube"
        // console.log(username);
    }
    // console.log(website);
    two()
}
one()

if(true){
    const username = "abhinav"
    if(username === "abhinav"){
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++++++

// console.log(addone(5));     // 6
function addone(num){
    return num + 1
}

// addtwo(5)       // Cannot access 'addtwo' before initialization
const addtwo = function(num){
    return num + 2
}
// console.log(addtwo(5));     // 7
