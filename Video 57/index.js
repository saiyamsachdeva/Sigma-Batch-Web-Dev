let a = 1
for(let i = 0;i< 100; i ++) {
    console.log(a+i)
}
let obj = {
    "name" : "Saiyam",
    "role" : "Programmer",
    "company" : "MicroSoft"
}
for (const key in obj) {
        const element = obj[key];
        console.log(key,element)
}
for (const c of "Saiyam") {
    console.log(c)
}
let j = 100;
// while(j < 100)
// {
//     console.log(j)
//     j++
// }
do {
    console.log("Hello")
} while (j < 100);
