import {ToDoAction} from './todo-action-bar';
import {ToDoItem} from './todo-item';

function ToDoManager() {
        this.listOfToDo = [];
        this.toDoCounter = 0;
        this.toDoStatus =false;
        this.toDoChecked =false;

    this.init = function(toDoManager) {     
        const toDoItem = new ToDoItem();
        const toDoAction = new ToDoAction();
        toDoAction.init(toDoManager);
        toDoItem.init(toDoManager);
    }

    this.render = function(){
        var toDoContainer = document.getElementById("todo-event");
        var hiddenToDoTemplate = document.getElementById("hidden-todo");
        toDoContainer.innerHTML="";
        toDoContainer.appendChild(hiddenToDoTemplate);

        for(var i = 0; i < this.listOfToDo.length; i++){
            const toDoItem = new ToDoItem();
            var clone = toDoItem.createTemplate(this.listOfToDo[i].toDoId, this.listOfToDo[i].toDoText);
            document.getElementById("todo-event").appendChild(clone);
             var selectedToDoItemContent  = clone.querySelector(`[element-type="para"]`);
            if(this.listOfToDo[i].toDoStatus){
                selectedToDoItemContent.classList.add("completed");
                selectedToDoItemContent.classList.remove("not-completed");
               // event.target.textContent = "Not Done";
            }else{
                selectedToDoItemContent.classList.add("not-completed");
                selectedToDoItemContent.classList.remove("completed");
               // event.target.textContent = "Done";
            }
        }
    }
}

export {ToDoManager};

