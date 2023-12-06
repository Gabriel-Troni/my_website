var count = 1
var radioBtn = document.querySelectorAll('.radio-btn')

setInterval(() => {
    document.getElementById('radio-btn' + count).checked = true
    count++
    if (count > 3) {
        count = 1
    }
}, 7000)