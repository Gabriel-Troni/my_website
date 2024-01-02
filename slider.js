var interval = null
var count = 0
var radioBtn = document.querySelectorAll('.radio-btn')

function startInterval() {
        interval = setInterval(() => {
            if (count > 3) {
                count = 0
            } else {
                count++
            }
            radioBtn[count].checked = true
        }, 7000)
}
startInterval()

function delayInterval() {
    clearInterval(interval)
    setTimeout(() => {
        startInterval()
    }, 30000)
}

radioBtn[0].addEventListener('click', () => {
    count = 0
    delayInterval()
})

radioBtn[1].addEventListener('click', () => {
    count = 1
    delayInterval()
})

radioBtn[2].addEventListener('click', () => {
    count = 2
    delayInterval()
})

radioBtn[3].addEventListener('click', () => {
    count = 3
    delayInterval()
})

radioBtn[4].addEventListener('click', () => {
    count = 4
    delayInterval()
})