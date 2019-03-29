import {ToDoItem} from "./todo-item";

function ToDoAction(){
    this.init = function(toDoManager){
        var that = this;
        document.getElementById("addBtn").addEventListener('click', function() {
            that.addToDoEvent(toDoManager);
        });
        document.getElementById("delete-selected-Btn").addEventListener('click', function() {
            that.deleteSelected(toDoManager)
        });
        document.getElementById("delete-completed-Btn").addEventListener('click', function(){
            that.deleteCompleted(toDoManager);
        });
    }

   this.addToDoEvent = function(toDoManager){     
        var toDoEvent, toDoId;
        var toDoInput = document.getElementById("text-Box1");      
        var toDoText = toDoInput.value;
        if(!toDoText) {
           alert("enter some content");
        }else {  
            if(!this.checkExistanceInList(toDoText, toDoManager)) {
                toDoId = toDoManager.toDoCounter++;
                toDoInput.value = "";

                toDoEvent = new ToDoItem(toDoId, toDoText, toDoManager.toDoStatus, toDoManager.toDoChecked);
                toDoManager.listOfToDo.push(toDoEvent);
                toDoManager.render();
               // localStorage.setObject("ListOfToDo",listOfToDo);
           }      
        }
   } 

    this.checkExistanceInList = function(toDoText,toDoManager) {
        var exists;
        var toDoInput = document.getElementById("text-Box1"); 
        for(var i=0; i < toDoManager.listOfToDo.length; i++){
            if(toDoManager.listOfToDo[i].toDoText === toDoText) {
                toDoInput.value = "";
                alert("This already exists in the To Do List at " + (i+1) + "th position. Please enter another event.");
                exists = 1;
                break;
            }else {
                exists = 0;
            }
        }
        return exists;
    }

    this.deleteCompleted = function(toDoManager) {
        for(var j = toDoManager.listOfToDo.length-1; j >= 0; j--) {
            if(toDoManager.listOfToDo[j].toDoStatus) {
                toDoManager.listOfToDo.splice(j,1);
                this.updateListOfToDoAfterDelete(j, toDoManager);
                toDoManager.toDoCounter--;
            }
        } 
        toDoManager.render();
    }

    this.deleteSelected = function(toDoManager){  
        for(var j = toDoManager.listOfToDo.length-1; j >= 0; j--) {
            if(toDoManager.listOfToDo[j].toDoChecked) {
                toDoManager.listOfToDo.splice(j,1);
                this.updateListOfToDoAfterDelete(j,toDoManager);
                toDoManager.toDoCounter--;
            }
        } 
        toDoManager.render();
    }

    this.updateListOfToDoAfterDelete = function(toDoItemId, toDoManager) {
        var i;
        for(i = toDoItemId; i < toDoManager.listOfToDo.length; i++) {
            document.querySelector(`[todoid="${toDoManager.listOfToDo[i].toDoId}"]`).setAttribute("todoid", `${toDoManager.listOfToDo[i].toDoId-1}`);
            toDoManager.listOfToDo[i].toDoId -= 1;
        }
    }
}

export {ToDoAction};