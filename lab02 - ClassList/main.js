let h1 = document.querySelector('h1')

let btnRed = document.querySelector('.btnRed')
let btnRemoveRed = document.querySelector('.btnRemoveRed')


btnRed.onclick = function () {
    h1.classList.toggle('red')
}

btnRemoveRed.onclick = function () {
    h1.classList.remove('red')
}
