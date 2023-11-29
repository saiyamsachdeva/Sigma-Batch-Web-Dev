/*
Create a faulty calculator
This calculator does the following
1. It takes two number as input from the user
2.It performs wrong operations as follows:
+ ---> -
* ----> +
- ----> /
/ ----> **


it performs wrong operations 10 * of the times
*/


let a = prompt("Enter the first number")
let b = prompt("Enter the second number")
let c = prompt("Enter the operation")
let r = Math.random()
let obj = {
    "+" : "-",
    "*" : "+",
    "-" : "/",
    "/" : "**"
}
console.log(`The result is ${a} ${c} ${b}`)
if(r < 0.1) {
    //do faulty calculations
    
    c = obj[c]
    alert(`The result is  ${eval(`${a} ${c} ${b}`)}`)
    
    
} else {
    //do correct calculations
    console.log(`The result is ${a} ${c} ${b}`)
    alert(`The result is  ${eval(`${a} ${c} ${b}`)}`)
}