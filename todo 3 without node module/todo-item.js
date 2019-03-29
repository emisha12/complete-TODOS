import {ToDoManager} from './todo-manager.js';
import { ToDoAction } from './todo-action-bar.js';

function ToDoItem(toDoId, toDoText, toDoStatus, toDoChecked) {
        this.toDoId = toDoId;
        this.toDoText = toDoText;
        this.toDoStatus = toDoStatus;
        this.toDoChecked = toDoChecked;
 
    this.init = function(toDoManager){
        var that = this;
        document.getElementById("todo-event").addEventListener('click', function(){
            that.operations(event,toDoManager);
        });
    }

    this.operations = function(event, toDoManager){
        var clickedButton, selectedToDoItemContent, toDoItemId, selectedToDoItem, selectedToDoItemContent;
            if(event.target !== event.currentTarget){
                clickedButton = event.target.getAttribute("element-type");
                var targetItem = event.target;

                toDoItemId =  (function (targetItem){
                    while(true){
                        console.log(targetItem);
                        var targetAttributeValue = targetItem.getAttribute("data-name");
                        if(targetAttributeValue !== "todo-wrapper"){
                            targetItem = targetItem.parentElement;
                        }else{
                            break;
                        }
                    }
                    return targetItem.getAttribute("todoid");
                })(targetItem);

                selectedToDoItem = document.querySelector(`[todoid="${toDoItemId}"]`);
                selectedToDoItemContent  = selectedToDoItem.querySelector(`[element-type="para"]`);
                switch(clickedButton) {
                    case "done": 
                    toDoManager.listOfToDo[toDoItemId].completedEvent();
                    toDoManager.render();
                                break;
                    case "delete":
                    toDoManager.listOfToDo.splice(toDoItemId,1);
                    const toDoAction = new ToDoAction();
                    toDoAction.updateListOfToDoAfterDelete(toDoItemId,toDoManager);
                    toDoManager.render();
                    toDoManager.toDoCounter--;
                                break;
                    case "update":
                    toDoManager.listOfToDo[toDoItemId].updateToDoList(toDoItemId, selectedToDoItemContent, toDoManager);
                                break;
                    case "checkbox":
                    toDoManager.listOfToDo[toDoItemId].setCheckedStatus();
                                break;
                }
               
        }
        event.stopPropagation();
    }

    this.completedEvent = function() {
        switch(this.toDoStatus) {
            case false:
                this.toDoStatus = true;
                break;
            case true:
                this.toDoStatus = false;
                break;
        }
    // localStorage.setObject("ListOfToDo",listOfToDo);
    }  

    this.setCheckedStatus = function(){
        switch(this.toDoChecked) {
            case false:
                        this.toDoChecked = true;
                        break;
            case true:
                        this.toDoChecked = false;
                        break;
        }
         //localStorage.setObject("ListOfToDo",listOfToDo);
    }
   
    this.updateToDoList = function(toDoItemId, selectedToDoItemContent, toDoManager){
        selectedToDoItemContent.setAttribute("contenteditable","true");
        selectedToDoItemContent.classList.add("edit-todo-text");

        selectedToDoItemContent.onkeypress = function(event) {
        if(event.keyCode === 13) {
                updateContent();
            }
        }

        selectedToDoItemContent.onblur = function () {
            updateContent();
        }

        function updateContent(){
            selectedToDoItemContent.classList.remove("edit-todo-text");
            selectedToDoItemContent.removeAttribute("contenteditable");
            toDoManager.listOfToDo[toDoItemId].toDoText = selectedToDoItemContent.textContent;
            //localStorage.setObject("ListOfToDo",listOfToDo);
        }
    }

    this.createTemplate = function(toDoId, toDoText){
        var hiddenTemplate, clone;
        hiddenTemplate = document.querySelector(`[data-name="todo-wrapper"]`);
        clone = hiddenTemplate.cloneNode(true);
        clone.querySelector(`[element-type="para"]`).innerHTML = toDoText;
        clone.classList.add("clone");
        clone.classList.remove("todo-item");
        clone.setAttribute("todoId", toDoId);
        clone.removeAttribute("id");
        return clone;
    }
}

export {ToDoItem};