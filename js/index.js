const newTaskInput = document.getElementById("newTask");
const submitButton = document.querySelector(".submit");
const taskContainer = document.querySelector(".tdl-container");
const taskList = document.querySelector('.task-list');
const errorMessage = document.querySelector('.error-message');


newTaskInput.addEventListener('keydown', function(event){
    if(event.key === 'Enter'){
        submitButton.click();
    }
})

submitButton.addEventListener('click', function(){
    const newTask = newTaskInput.value.trim();
    if(newTask !== ""){
        errorMessage.style.display='none';
        addTaskToList(newTask);
        newTaskInput.value = "";
    }
    else{
        errorMessage.style.display='block';
    }

    function addTaskToList(newTask){
        const taskElement = document.createElement('div');
        taskElement.textContent = newTask;
        taskList.appendChild(taskElement);

        const deleteButton = document.createElement('button');
        focus
        deleteButton.textContent = 'Удалить';
        deleteButton.classList.add('delete-button');
        taskElement.appendChild(deleteButton);

        const doneButton = document.createElement('button');
        doneButton.textContent = 'Выполненно!';
        doneButton.classList.add('done-button');
        taskElement.appendChild(doneButton);

        deleteButton.addEventListener('click', function(){
            taskElement.remove();
        });

        doneButton.addEventListener('click', function(){
            if(taskElement.style.color === 'green' && taskElement.style.fontWeight === 'bold'){
                taskElement.style.color = '';
                taskElement.style.fontWeight = '';
            }
            else{
                taskElement.style.color = 'green';
                taskElement.style.fontWeight = 'bold';
            }
        })
    }
});
