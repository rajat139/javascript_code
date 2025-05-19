//  singleton
//  object.create   // through Constructor

//  objects literals

const mysym = Symbol("key1")

const jsUser = {
    name : "Abhinav",
    "full name" : "Abhinav Chaudhary",
    [mysym] : "mykey1",
    age : 18,
    location : "Agra",
    email : "abhinav@google.com",
    isLoggedIn : false,
    lastloginDays : ["Monday", "Saturday"]
}

// console.log(jsUser.email)
// console.log(jsUser["age"])
// console.log(jsUser["full name"])
// console.log(jsUser[mysym])
// console.log(jsUser);

jsUser.email = "abhinav@chatgpt.com"
// Object.freeze(jsUser)       // lock (value cann't be change now)
jsUser.email = "abhinav@microsoft.com"
// console.log(jsUser)

jsUser.greeting = function(){
    console.log("Hello Js user");
}
jsUser.greetingTwo = function(){
    console.log(`Hello Js user, ${this.name}`);
}

console.log(jsUser.greeting())
console.log(jsUser.greetingTwo())

