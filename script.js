const body = document.querySelector('body')
const input = document.querySelector('.text-input')
const addBtn = document.querySelector('.btn-add')
const removeBtn = document.querySelector('.btn-remove')
const ul = document.querySelector('ul')

addBtn.addEventListener('click', () => {
    addList()
})
removeBtn.addEventListener('click', () => {
    localStorage.removeItem('tasks')
    ul.innerHTML = ''
})
input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        addList()
    }else if (e.key === 'Shift') {
        alert('нажми на Enter')
    }
})

function view() {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || []
    let allList = ''
    tasks.map((el) => {
        allList += `<li class="list-group-item d-flex justify-content-center">${el.title}</li>`
    })
    ul.innerHTML = allList
}

view()

function addList() {
    if (input.value !== '') {
        let tasks = JSON.parse(localStorage.getItem('tasks')) || []
        let newTask = {
            id: tasks.length ? tasks[tasks.length -1].id * 1 : 1,
            title: input.value
        }
        tasks = [...tasks, newTask]
        localStorage.setItem('tasks', JSON.stringify(tasks))
        body.style.background = randomColor()
        input.value = ''
        view()
    }
}
function randomColor() {
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color += Math.floor(Math.random() * 10)
    }
    return color
}