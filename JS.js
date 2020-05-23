//21
// function now() {
//     return 21
//
// }
// function later() {
//     answer = answer*2
//     console.log("Meaning of life:",answer)
//
// }
// let answer = now();
// setTimeout(later,3000);

//22
// var a = {
//     index:1
// }
// //!позднее
// console.log(a)//*1
// a.index++
// console.log(a)//*2

//25
// let eventloop = [];
// let event;
// while(true){
//     if (eventloop.length > 0) {
//         event = eventloop.shift()
//         try {
//             event()
//         }
//         catch (err) {
//             reportError(err)
//         }
//     }
// }
//28
let a = 20;

function foo() {
    a = a + 1
}

function bar() {
    a = a + 2
}

ajax('http://some.url1.1', foo)
ajax('http://some.url1.2', foo)


