// const tinderUser = new Object() // singleton object

// non singleton object
const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "Abhinav"
tinderUser.age = 18
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email : "abhinav@chatgpt.com",
    fullname : {
        userfullname : {
            firstname : "abhinav",
            lastname : "chaudhary"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname);
// console.log(regularUser.fullname.userfullname["lastname"])

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = {obj1, obj2}

//  const returnedTarget = Object.assign(target, source);
// const obj3 = Object.assign({}, obj1,obj2, obj4)
// {} target ,(obj1, obj2, obj4) source

const obj3 = {...obj1, ...obj2, ...obj4}    // Spread operator

// console.log(obj3)

const user = [
    {
        id : 1,
        email : "some@google.com"
    },
    {
        id : 1,
        email : "some@google.com"
    },
    {
        id : 1,
        email : "some@google.com"
    },
    {
        id : 1,
        email : "some@google.com"
    }
]

user[1].email

console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLoggedIn')); // search key is present or not









