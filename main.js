let blueBtn = document.querySelector(".blue-btn")
let redBtn = document.querySelector(".red-btn")
let resetBtn = document.querySelector(".reset-btn")
let blueNum = document.querySelector(".blue-num")
let redNum = document.querySelector(".red-num")

let x = 0
blueBtn.addEventListener("click", function () {
    x = x + 1
    blueNum.textContent = x
})


let y = 0
redBtn.addEventListener("click", function () {
    y = y + 1
    redNum.textContent = y
})

let z = 0
resetBtn.addEventListener("click", function () {

    redNum.textContent = z
    blueNum.textContent = z

})