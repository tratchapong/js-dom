let form = document.querySelector('form')

// show 'this' problem with 

// form.onchange = (evt) =>  {
//   console.log(1, this)
//   console.log(2, evt.target)
// }

// form.onclick = function (evt) {
//   console.log(3, this)
//   console.log(4, evt.target)
// }

// ----------

// keypress, keydown have async-problem with console.log

let inp1 = document.querySelector('form').elements[0]
inp1.onkeydown = function (evt) {
  // console.log(evt.target.value)
  setTimeout(()=>{console.log(evt.target.value)},0)
}

// ----------

form.onclick( (evt)=> console.log('click form...'))