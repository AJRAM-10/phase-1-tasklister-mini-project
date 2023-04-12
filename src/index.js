document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault()
    buildToDo(document.querySelector("#new-task-description").value)
  })
});

function buildToDo(todo) {
  let li = document.createElement('li')
  li.textContent = `${todo}`
  console.log(li)
  document.querySelector('#tasks').appendChild(li)
}
