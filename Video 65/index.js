let n = prompt("Ener the number whose factorial you want to find?")
// function fact(n) {
//     if(n == 2 || n == 1) {
//         return n
//     }
//     return fact(n - 1) * n
// }
// const f = (n)=>  {
//     if(n == 2 || n == 1) {
//         return n
//     }
//     return f(n - 1) * n
// }

// let ans = f(n)
// console.log(`The factorial of ${n} is : ${ans}`)
// alert(`The factorial of ${n} is : ${ans}`)

let l = []
for (let i = 1; i <= n; i++) 
    l.push(i);

    const mul = (a,b) => {
        return a* b
    }
    let ans = l.reduce(mul)
    console.log(`The factorial of ${n} is : ${ans}`)
    alert(`The factorial of ${n} is : ${ans}`)