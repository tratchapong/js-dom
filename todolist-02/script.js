const jobs = [
  {id: 1, title: 'Learn HTML', done : false},
  {id: 2, title: 'Learn CSS', done : false},
  {id: 3, title: 'Learn Javascript', done : false},
  {id: 4, title: 'Learn DOM', done : false},
  {id: 5, title: 'Learn React', done : false},
]

function render() {
  let allJobItems = jobs.map(el => {
    return `
      <div class='job-item'>
      <input type="text" readonly value="${el.title}" />
      <button>Edit</button>
      <button>Delete</button>
      </div>
    `
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
  render()
}