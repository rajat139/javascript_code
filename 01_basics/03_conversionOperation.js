let score = 33

// console.log(typeof score)
// console.log(typeof(score))

let valueInNumber = Number(score)
// console.log(typeof valueInNumber)
// console.log(valueInNumber)

// "33" => 33
// "33abc" => NAN
// true => 1;, false=> 0

let isLoggedIn = "" 
let booleanIsLoggedIn = Boolean(isLoggedIn)

// console.log(booleanIsLoggedIn)

// 1 => true; 0 => false
// "" => false; 
// "Sita-Ram" => true

let someNumber = 33
let stringNumber = String(someNumber)

// console.log(stringNumber)

// ************************ Operations ***************************

let value = 3
let negvalue = -3 
// console.log(negvalue)

let str1 = "hello"
let str2 = " world!"
let str3 = str1 + str2
// console.log(str3)

// console.log("1" + 1)
// console.log("1" + 1 + 2)
// console.log(2 + 2 + "1")

// console.log((3 * 4) * 6 / 2)

// console.log(+true)
// console.log(+"")

let num1, num2, num3
num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter
// console.log(gameCounter)

// console.log(3 > 4)
// console.log(3 >= 4)
// console.log(3 < 4)
// console.log(3 <= 4)
// console.log(3 == 4)

// console.log("2" > 1)
// console.log("02" >= 1)


// we should avoid this type of code, clean code has more priority and value
// console.log(null > 0)
// console.log(null == 0)
// console.log(null >= 0)

/*

The reason is that an equality check == and comparisons> < >= <= work differently.
Comparisions convert null to a number, treating it as 0.
that's why (3) 'null >= 0' is true and (1) 'null > 0' is false. 

*/
// we should avoid this type of code, clean code has more priority and value 
// console.log(undefined == 0)
// console.log(undefined > 0)
// console.log(undefined < 0)

// ===(strict conversion)


