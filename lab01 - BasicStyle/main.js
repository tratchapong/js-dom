// ให้เปลี่ยนสีตัวอักษรของ h1 ตามปุ่มที่กด
const h1 = document.querySelector('h1')
const btn1 = document.querySelector('.btn1')
const btn2 = document.querySelector('.btn2')
const btn3 = document.querySelector('.btn3')
const btn4 = document.querySelector('.btn4')
const btnHide = document.querySelector('.btnHide')
const btnShow = document.querySelector('.btnShow')
const inp1 = document.querySelector('.inp1')


btn1.onclick = function() {
    changeColor(btn1.innerText)
}
btn2.onclick = function() {
    changeColor(btn2.innerText)
}
btn3.onclick = function() {
    changeColor(btn3.innerText)
}
btn4.onclick = function() {
    changeColor(inp1.value)
}

function changeColor(colorName) {
    const h1 = document.querySelector('h1')
    h1.style.color = colorName
}

btnHide.onclick = function() {
    // h1.style.display = 'none'
    // h1.style.visibility = 'hidden'
    h1.style.opacity = 0
}

btnShow.onclick = function() {
    // h1.style.display = 'block'
    // h1.style.visibility = 'visible'
    h1.style.opacity = 1
}

const btnShowHide = document.querySelector('.btnShowHide')

btnShowHide.onclick = function () {
    if(btnShowHide.innerText==="Hide") {
        btnShowHide.innerText = "Show"
        btnHide.click()

        // h1.style.opacity = 0

    }else {
        btnShowHide.innerText = "Hide"
        btnShow.click()
        // h1.style.opacity = 1
    }
}
