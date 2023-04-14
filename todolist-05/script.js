const jobs = [
  {id: 1, title: 'Learn HTML', done : false},
  {id: 2, title: 'Learn CSS', done : false},
  {id: 3, title: 'Learn Javascript', done : false},
  {id: 4, title: 'Learn DOM', done : false},
  {id: 5, title: 'Learn React', done : false},
]

let editIdx = -1
let replacedTitle = ''

function render() {
  let allJobItems = jobs.map((el, i) => {
    if(i !== editIdx) {
      return `
      <div class='job-item'>
      <input type="text" readonly value="${el.title}" onclick="changeStatus(${el.id})" class="${el.done? 'done' : 'undone'}"/>
      <button onclick="setEdit(${el.id})">Edit</button>
      <button onclick="deleteJob(${el.id})">Delete</button>
      </div>
      `
    } else {
      return `
      <div class='job-item'>
      <input type="text" value="${el.title}" class="editmode" onkeyup="setReplaceTitle()"/>
      <button onclick="changeTitle(${el.id})">Save</button>
      <button onclick="deleteJob(${el.id})">Delete</button>
      </div>
      `
    }
  })
  
  let jobList = document.querySelector('.job-list')
  jobList.innerHTML = allJobItems.join('')
}

// explain what is render - life-cycle
render()

// https://www.w3schools.com/jsref/event_onsubmit.asp

let jobForm = document.querySelector('.job-form')
jobForm.onsubmit = function (e) {
  e.preventDefault()
  // console.log(e.target.elements['title'].value)
  let newTitle = e.target.elements[0].value
  let newId = jobs[jobs.length-1].id +1
  let newJob = {
    id: newId,
    title : newTitle,
    status: false
  }
  jobs.push(newJob)
  // console.log(jobs)
  jobForm.reset()
  render()
}

function deleteJob(id) {
  let idx = jobs.findIndex(el => el.id === id)
  jobs.splice(idx,1)
  render()
}

function changeStatus(id) {
  let idx = jobs.findIndex(el => el.id === id)
  jobs[idx].done = !jobs[idx].done
  render()
}

function setEdit(id) {
  let idx = jobs.findIndex(el => el.id === id)
  editIdx = idx
  replacedTitle = jobs[idx].title
  render()
}

function setReplaceTitle(e) {
  replacedTitle = event.target.value
  console.log(replacedTitle)
}

function changeTitle(id) {
  let idx = jobs.findIndex(el => el.id === id)
  jobs[idx].title = replacedTitle
  editIdx = -1
  render()
}