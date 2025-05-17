// In javascript months starts from zero when we write in single digit 
// but when we write it in (yyyy-mm-dd) then months start from 1

let myDate = new Date()
// console.log(myDate.toString()); // Sat May 17 2025 14:10:31 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString()); // Sat May 17 2025
// console.log(myDate.toISOString());  // 2025-05-17T14:11:20.191Z
// console.log(myDate.toJSON());   // 2025-05-17T14:11:58.409Z
// console.log(myDate.toLocaleDateString());   // 5/17/2025
// console.log(myDate.toLocaleString());   // 5/17/2025, 2:13:55 PM

// console.log(typeof(myDate)) // object

// let myCreateDate = new Date(2025, 0, 23)
// console.log(myCreateDate.toDateString());   // Thu Jan 23 2025

// let myCreatenewDate = new Date(2025, 0, 23, 5, 3)
// console.log(myCreatenewDate.toLocaleString());   // 1/23/2025, 5:03:00 AM

// let createDate = new Date("2025-01-30")
let createDate1 = new Date("01-30-2025") // mm-dd-yyyy    // 1/30/2025, 12:00:00 AM
// console.log(createDate1.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp)     // 1747492006727 it's in milisecond from  
                                // (January 1, 1970, UTC (the epoch).) to til now
// console.log(createDate1.getTime()); // 1738195200000 in millisecond
// console.log(Date.now()/1000) // 1747492503.843
// console.log(Math.floor(Date.now()/1000));    // 1747492550

let newDate = new Date()
// console.log(newDate)    // 2025-05-17T14:38:11.323Z
// console.log(newDate.getDate())  // 17
// console.log(newDate.getMonth() + 1) // 4

// console.log(`the date is ${newDate.getDate()} and time is ${newDate.getHours()}`)

//  **** toLocalString is an important method

newDate.toLocaleString('default', {
    weekday: 'long',
    
})













