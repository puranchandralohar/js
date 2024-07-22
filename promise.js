// // Promise -
// // A promise is an Object that may produce a single value 
// // some time in the future: either a resolved value, 
// // or a reason that it’s not resolved (e.g., a network error occurred). 

// // A promise may be in one of 3 possible states: fulfilled, rejected, or pending. Promise users can attach callbacks to handle the fulfilled value or the reason for rejection.

// // Relatives
// // Go the market and get some Jalebi, Sweets

// // promise
// // she is buy sweets
// // reason - no sweets available
// //  shop closed
// // seeta money kahi aur invest
// // seeta money lost
// // seeta ne wahi jalebi kha li

// // Promise States
// // 1. Pending - initial state, neither fulfilled nor rejected.
// // 2. Fulfilled - meaning that the operation completed successfully.
// // 3. Rejected - meaning that the operation failed.

// // Errors -
// // 1. Syntax Error
// // 2. Runtime Error
// // 3. Logical Error
// // 4. Network Error


// // Syntax - 

// // Promise Constructor

// // Promise takes a function that is called excuter function

// // Promise methods
// // 1. then() - it is called when a promise is resolved
// // 2. catch() - it is called when a promise is rejected
// // 3. finally() - it is called when a promise is settled, i.e. either resolved or rejected

// // const promise = new Promise((resolve, reject)=>{
// //     console.log("promise created");
// //     resolve("Promise is resolved")
// //     // reject("Promise is rejected")
// // })

// // promise.then((value)=>{
// //     console.log(value)
// // }).catch((error)=>{
// //     console.log(error)
// // })


// // Functions-  First Class Citizens

// // Functions can be stored in a variable
// // Functions can be passed as arguments to other functions
// // Functions can return other functions


// function money(){
//     return new Promise((resolve, reject)=>{
//         let moneyGiven = true
//         if(moneyGiven == true){
//             resolve("Seeta is going to market")
//         }
//         else{
//             reject("I don't have money, relatives ko bhaga do")
//         }
//     })
// }

// function momPromise (){
//     return new Promise((resolve, reject)=>{
//         let sitaMeetHerfriends = true
//         if(sitaMeetHerfriends == false){
//             setTimeout(()=>{
//                 resolve("Seeta returns home with sweets")
//             }, 5000)
//         }
//         else{
//             reject("Seeta returns home without sweets")
//         }

//     })
// }


// money() //promise
// .then((value)=>{
//     console.log(value)
//     return momPromise() // promise
// }).then((val)=>{
//     console.log(val)
// }).catch((error)=>{
//     console.log(error)
// }).finally(()=>{
//     console.log("thank you for me giving me order")
// })


// Make Tea
// 1. Boil Water - 2 min
// 2. Add Sugar - 1 min
// 3. Add Tea Leaves - 1min
// 4. Add Milk - 1min
// 5. Serve Tea


let names = [{name:"Madhu", age:"20"},{name:"priyanaka", age:"16"},{name:"Sachin", age:"17"},{name:"Mahi"}];


names.map((name, index)=>{
    console.log(name.age, name.name, index)
})



// const name = { name: 'Madhu', age: '20' }

// name['name']










