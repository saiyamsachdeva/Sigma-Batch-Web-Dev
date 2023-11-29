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


let a = parseFloat(prompt("Enter the first number: "));
let b = parseFloat(prompt("Enter the second number: "));
let ch = prompt("Enter the operation you want to perform: ")
let random = Math.random();
if(ch == '+') {
    if(random < 0.1) {
        //do wrong calculations
        let ans = (a - b)
        console.log("answer is" + ans)
    } else {
        //do correct calculations
        let ans = (a + b)
        console.log("answer is" + ans)
    }
} else if(ch == '-'){
    if(random < 0.1) {
        //do wrong calculations
        let ans = (a / b)
        console.log("answer is" + ans)
    } else {
        //do correct calculations
        let ans = (a - b)
        console.log("answer is" + ans) 
    }
} else if(ch == '*') {
    if(random < 0.1) {
        //do wrong calculations
        let ans = (a + b)
        console.log("answer is" + ans)
    } else {
        //do correct calculations
        let ans = (a * b)
        console.log("answer is" + ans)
    }
} else if(ch == '/') {
    if(random < 0.1) {
        //do wrong calculations
        let ans = (a ** b)
        console.log("answer is" + ans)
        
    } else {
        //do correct calculations
        let ans = (a / b)
        console.log("answer is" + ans)
    }
}