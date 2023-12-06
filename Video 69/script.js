let a = 6
function factorial(number) {
    let arr = Array.from(Array(number+1).keys())
    //console.log(arr.slice(1,))
    let c = arr.slice(1,).reduce((a,b)=>{
        return a * b
    })
    console.log(c)
}

function facfor(number) {
    let fact = 1
    for(let i = 2;i<= number; i ++){
        fact = fact * i
    }
    return fact
}
console.log(facfor(a))
factorial(a) 
