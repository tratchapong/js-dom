const form = document.querySelector('form')
const inpName = document.querySelector('#name')
const inpPassword = document.querySelector('#password')
const inpConfirm = document.querySelector('#confirm')

form.onsubmit = function (evt) {
    evt.preventDefault()
    // Validation
    // ต้องส่งครบทั้ง 3 ฟิลด์..
    if(inpName.value === '' || inpPassword.value === '' || inpConfirm.value === '') {
        alert('Please complete all Inputs')
    }
    else {
        //ถ้า form กรอกครบให้ขึ้น
        alert('OK to..Send Submit data')
    }
    // ถ้าไม่ครบให้ขึ้น
}

inpName.onchange = function(evt) {
    console.log(evt.target.value)
    // validation
    // ต้องไม่ต่ำกว่า 4 ตัวอักษร
    if(inpName.value.length <= 4){
        alert('Name must be more than 4')
        inpName.focus()
    }
}



// const h1 = document.querySelector('h1')

// h1.onclick = function (evt) {
//     console.log(evt.target)
//     evt.target.innerHTML = 'CC14'
// }

// form.onclick = function(e) {
//     console.log(e)
//     // e.target.style.background = 'red'
// }