let arr = [1,13,5,7,11]


let narr = arr.map((e)=>{
    return e ** 2
})
console.log(narr)

console.log(arr.filter((e)=>{
    return e > 7 ? true : false
}))

const red = (a,b) => {
    return a + b
}
console.log(arr.reduce(red))

