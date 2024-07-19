// Async-Await - Better way for writing promises.
// better way to handle async operations

// function sayHii(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve("Hello")
//         }, 2000)
//     })
// }

// sayHii().then((data)=>{
//     console.log(data)
// }).catch((err)=>{
//     console.log(err)
// })

// keyword - async
// whatever we return from this async function, it will be its resolved value

// async function sayHii(){
//     return 
// }

// sayHii().then((data)=>{
//     console.log(data)
// }).catch((error)=>{
//     console.log(error)
// })

// await - keyword
// await can only be used inside async function
// await will wait for the promise to be resolved


// function sayHii(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log("Hello")
//             resolve("Hello")
//         }, 8000)
//     })
// }

// function sayName(){
//     console.log("My name is Seeta")
// }

// async function executeBoth(){
//     await sayHii();
//     sayName();
// }

// executeBoth();

// Make Tea
// 1. Boil Water - 2 min
// 2. Add Sugar - 1 min
// 3. Add Tea Leaves - 1min
// 4. Add Milk - 1min
// 5. Serve Tea

function BoilWater(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("water is boiling")
            resolve("Water is Boiling")
        }, 2000)
    })
}

function addSugar(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("sugar added")
            resolve("Sugar Added")
        }, 1000)
    })
}

function addTeaLeaves(){
    return new Promise((resolve, reject)=>{
        let tea = true;
        if(tea){
            setTimeout(()=>{
                console.log("tea is added")
                resolve("Tea is added")
            },1000)
        }
        else{
            reject("Tea nahi hai")
        }
    })
}

function addMilk(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            console.log("milk is added")
            res("Milk is added")
        })
    })
}

function serverTea(){
    console.log("Serving")
}


async function makeTea(){
     await BoilWater()
     await addSugar();
     await addTeaLeaves();
     await addMilk();
    serverTea();
}

makeTea();

