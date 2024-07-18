// Callback -
// A callback is a function that is passed as an argument to another function and is executed after its parent function has completed.

// syncronous programming
// it run code from top to bottom, line by line


// Js - functions >> First Class Citizen


function sayHello(){
    console.log("Hello");
}

function sayBye(callback){
    console.log("Bye");
}

sayBye(sayHello);

// Seeta 

// Hotel enter
// order food
// wait for food - food is preparing - 10 min
// food is ready - delivered to the table - 5 min
// eating food - 15 min
// payment - 3 min
// leave hotel



function EnterHotel(){
    console.log("Enter Hotel");
}

function orderFood(param){
    console.log("Order Food");
    param()
}

function waitFood(callback){
    setTimeout(()=>{
        console.log("wait for food - food is preparing");
        callback();
    }, 10000)  
}

function foodReady(callback){
    setTimeout(()=>{
        console.log("food is ready - delivered to the table");
        callback();
    },5000)
}

function eatFood(callback){
    setTimeout(()=>{
        console.log("eating food");
        callback();
    },15000)
}

function payment(callback){
    setTimeout(()=>{
        console.log("payment");
        callback();
    },3000)
}

function leaveHotel(){
    console.log("leave hotel");
}

function rating(){
    console.log("Rating");
}


function dinner(){
    EnterHotel();
    orderFood(()=>{
        waitFood(()=>{
            foodReady(()=>{
                eatFood(()=>{
                    payment(()=>{
                        leaveHotel(rating)
                    })
                })
            })
        });
    });
}

// dinner();










