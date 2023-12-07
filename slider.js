var key = true
var count = 1
var radioBtn = document.querySelectorAll('.radio-btn')
var slide = document.getElementsByClassName('slide-box')

//slider não está funcionando

slide.addEventListener('mouseover', () => {
    key = false
})

slide.addEventListener('mouseout', () => {
    key = true
})

if(key) {
    setInterval(() => {
        document.getElementById('radio-btn' + count).checked = true
        count++
        if (count > 3) {
            count = 1
        }
    }, 7000)
}