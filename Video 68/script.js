console.log("harry")
// let boxx = document.getElementsByClassName("box")
// console.log(boxx)
// boxx[2].style.backgroundColor = "red"
// document.getElementById("redboxxx").style.backgroundColor = "yellow"
document.querySelector(".box").style.backgroundColor = "blue"
//queryselector only does the chznges on the first element that matches
document.querySelectorAll(".box").forEach(e => {
    e.style.backgroundColor = "yellow"
})

console.log(document.getElementsByTagName("div"))
// e[4].matches("#redboxxx")
// e[3].closest("html")
// document.querySelector(".container").contains(e[2])
// document.querySelector(".container").contains(document.querySelector("body")
// document.querySelector("body").contains(document.querySelector(".container"))