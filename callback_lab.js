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


// ## Question Five

// You are given the following functions:
// ```js

function conservativeSpender(balance)  {
  return balance > 100
}

function liberalSpender(balance) {
  return balance > 10
}

function horribleSaver (balance) {
  return balance > 0
}

// ```

// Write a function `shouldIBuyThis` that takes in a balance and a callback (one of the above functions). The function should return either
// "Sure! I've got the money!" or "Nope! Gotta keep my savings up!"

// ```js
// console.log(shouldIBuyThis(20, horribleSaver))
// // logs: "Sure! I've got the money!"
// console.log(shouldIBuyThis(20, liberalSpender))
// // logs: "Sure! I've got the money!"
// console.log(shouldIBuyThis(20, conservativeSpender))
// // logs:  "Nope! Gotta keep my savings up!"
// console.log(shouldIBuyThis(101, conservativeSpender))
// // logs: "Sure! I've got the money!"

// ```

const shouldIBuyThis = (balance, callback) =>{
    if (callback(balance) === true) {
        console.log("Sure! I'v got the money")
      } else if (callback(balance) === false) {
        console.log("Nope! Gotta keep my savings up!")
      }

}
shouldIBuyThis(40,liberalSpender)


// a. Write a function `forEachElem` that takes in an array and a callback. Call the callback on each element in the array.

// ```
// Input: [1,4,5,6], (elem) => console.log("$" + elem)

// Output:
// Logs the following to the console:
// 1
// 4
// 5
// 6

const forEachElem = (arr, callback) => {
    for(i = 0; i < arr.length; i++){
        callback(arr[i]);
    }
}
const elem = num => console.log('$' + num)

// forEachElem([1, 2, 3, 4], elem)

const logEachElem = (arr) =>{
    forEachElem (arr, elem)
}
logEachElem([1, 2, 34])