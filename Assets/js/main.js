"use strict"

const addBtn = document.querySelector('.add-button')
const deleteBtn = document.querySelector('.delete-button')

const inputTask = document.querySelector('.task-input')
const taskListElement = document.querySelector('.task-list')

const htmlCreation = function(text) {
    if(text != '') {
        const li = document.createElement('li')
        li.classList.add('item-list')

        const label = document.createElement('label')
        label.classList.add('task-item')

    
        const div1 = document.createElement('div')
        div1.classList.add('task-check-container')
    
        const input = document.createElement('input')
        input.type = 'checkbox'
        input.classList.add('task-check')
    
        const div2 = document.createElement('div')
        div2.classList.add('task-text-container')
    
        const p = document.createElement('p')
        p.innerText = text
        
        const div3 = document.createElement('div')
        div3.classList.add('delete-container-button')
    
        const button = document.createElement('button')
        button.innerText = 'X'
        button.classList.add('delete-btn')
    
        div1.appendChild(input)
        div2.appendChild(p)
        div3.appendChild(button)
    
        label.appendChild(div1)
        label.appendChild(div2)
        label.appendChild(div3)

        li.appendChild(label)
    
        taskListElement.appendChild(li)
    }
}

const deleteCurrentTask = function(event) {
    const clickedElement = event.target
    const currentTask = clickedElement.parentNode.parentNode
    
    currentTask.remove()
}

const addTask = function() {
    const taskText = inputTask.value

    htmlCreation(taskText)

    inputTask.value = ''
    inputTask.focus()

    const deleteCurrentTaskListBtn = [... document.querySelectorAll('.delete-btn')]
    const itemList = [... document.querySelectorAll('.item-list')]

    deleteCurrentTaskListBtn.forEach(btn => {
        btn.addEventListener('click', deleteCurrentTask)
    })
}

const deleteTaskList = function() {
    const taskList = [... document.querySelectorAll('.task-item')]

    taskList.forEach(task => {
        task.remove()
    })

    inputTask.value = ''
    inputTask.focus()
}

const edentifyKey = function(event) {
    if(event.key == 'Enter') {
        addTask()
    }
}

addBtn.addEventListener('click', addTask)
deleteBtn.addEventListener('click', deleteTaskList)
inputTask.addEventListener('keyup', edentifyKey)
