//Problem 1: Write a function that takes in a callback and calls the callback
//function() { console.log("Hello!") }

const caller = (callback) => callback ()

const greetings = () => {
    console.log("Hello!")
}
caller(greetings)

//Problem 2

const func = (boolean, callback) => {
    if (boolean === true ){
        return callback()
    } else if (boolean === false) {
        return "Ignoring the callback" 
    }
}

console.log(func(2===3,caller))

//Problem 3
//Write a function that takes in a callback and a number.  It should call the callback that many times.

// Input: () => console.log("I am being called"), 4

// Output:
// Logs:
// "I am being called"
// "I am being called"
// "I am being called"
// "I am being called"

let num = 0
let repeatCall = (num, setInterval(() => {
    num++
    if(num > 4) {
        clearInterval(repeatCall)
    } else {
        console.log("I am being called")
    }
}, 100))

//Problem 4
//Write a function that takes in a number and two callbacks.  It should apply the first callback to the number, then the second callback, then return the result

const math = (num, callback, callback2) => {
    let result = callback2(callback(num))
    return result  
}

const callAdd = num => num + 4
const callMulti = num => num * 2

console.log(math(4,callAdd,callMulti))

// const math2 = num => (num, num2 => {num + 4}, num3 => {num * 2})
// console.log(math(2))
