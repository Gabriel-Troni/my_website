var interval = null
var count = 1
var radioBtn = document.querySelectorAll('.radio-btn')
var btn1 = document.getElementById('radio-btn1')
var btn2 = document.getElementById('radio-btn2')
var btn3 = document.getElementById('radio-btn3')
var btn4 = document.getElementById('radio-btn4')
var btn5 = document.getElementById('radio-btn5')

function startInterval() {
        interval = setInterval(() => {
            document.getElementById('radio-btn' + count).checked = true
            count++
            if (count > 5) {
                count = 1
            }
        }, 7000)
}

startInterval()

function delayInterval() {
    clearInterval(interval)
    setTimeout(() => {
        startInterval()
    }, 30000)
}

btn1.addEventListener('click', () => {
    delayInterval()
})

btn2.addEventListener('click', () => {
    delayInterval()
})

btn3.addEventListener('click', () => {
    delayInterval()
})

btn4.addEventListener('click', () => {
    delayInterval()
})

btn5.addEventListener('click', () => {
    delayInterval()
})