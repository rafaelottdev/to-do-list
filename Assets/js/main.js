"use strict"

//  Pegar tambem o enter

const addBtn = document.querySelector('.add-button')
const deleteBtn = document.querySelector('.delete-button')

// const deleteCurrentTaskBtn = document.querySelector('.delete-btn')

const inputTask = document.querySelector('.task-input')
const taskListElement = document.querySelector('.task-list')

const htmlCreation = function(text) {
    if(text != '') {
        const li = document.createElement('li')
        li.classList.add('task-item')
    
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
    
        // ADICIONANDO DENTRO
        div1.appendChild(input)
        div2.appendChild(p)
        div3.appendChild(button)
    
        li.appendChild(div1)
        li.appendChild(div2)
        li.appendChild(div3)
    
        taskListElement.appendChild(li)
    }
}

const addTask = function() {
    // limpar input
    
    const taskText = inputTask.value

    htmlCreation(taskText)
}

const deleteTaskList = function() {
    // limpar input

    const taskList = [... document.querySelectorAll('.task-item')]

    taskList.forEach(task => {
        task.remove()
    })
}

const deleteCurrentTask = function() {

}


addBtn.addEventListener('click', addTask)
deleteBtn.addEventListener('click', deleteTaskList)

// deleteCurrentTaskBtn.addEventListener('click', deleteCurrentTask)
