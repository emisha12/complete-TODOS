class ToDoManager{
    constructor(){
        this.listOfToDo = new Map();
        this.toDoStatus =false;
        this.toDoChecked =false;
    }
    init(toDoManager){     
        const toDoItem = new ToDoItem();
        const toDoAction = new ToDoAction();
        console.log(toDoAction);
        toDoAction.init(toDoManager);
        toDoItem.init(toDoManager);
    }
}

class ToDoAction{
    constructor(){
    }
    init(toDoManager){
        var that = this;
        console.log(toDoManager.listOfToDo);
        console.log("in todoaction init"); 
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

   addToDoEvent(toDoManager){     
        var toDoEvent, hiddenTemplate, clone;  
        var toDoInput = document.getElementById("text-Box1");      
        var toDoText = toDoInput.value;
        if(!toDoText) {
           alert("enter some content");
        }else {  
            if(!this.checkExistanceInList(toDoText, toDoManager)) {
                var myTimeStamp = new Date().getTime();
                hiddenTemplate = document.querySelector(`[data-divItem="divItem"]`);
                clone = hiddenTemplate.cloneNode(true);
                clone.querySelector(`[element-type="para"]`).innerHTML = toDoText;
                clone.classList.add("clone");
                clone.classList.remove("todo-item");
                clone.setAttribute("todoId", myTimeStamp);
                //appending divItem to todo-event
                document.getElementById("todo-event").appendChild(clone);

                //clearing the text box
                toDoInput.value = "";

                toDoEvent = new ToDoItem(myTimeStamp, toDoText, toDoManager.toDoStatus, toDoManager.toDoChecked);
                toDoManager.listOfToDo.set(myTimeStamp, toDoEvent);
               // localStorage.setObject("ListOfToDo",listOfToDo);
           }      
        }
   }

    checkExistanceInList(toDoText,toDoManager) {
        var exists;
        var toDoInput = document.getElementById("text-Box1"); 
        var mapValue = toDoManager.listOfToDo.values();
        for(var toDoTimeStamp of mapValue) {
           if(toDoTimeStamp.toDoText === toDoText){
                toDoInput.value = "";
                alert("This already exists in the To Do List. Please enter another event.");
                exists = 1;
                break;
            }else {
                exists = 0;
            }
        }
        return exists;
    }

    deleteCompleted(toDoManager) {
        var selectedToDoItem;
        var mapValue = toDoManager.listOfToDo.values();
        const todo = new ToDoItem();
        const todoA = new ToDoAction();
        for(var todoTimeStamp of mapValue ){
            selectedToDoItem = document.querySelector(`[todoid="${todoTimeStamp}"]`);
            if(todoTimeStamp.toDoStatus) {
                todo.deleteToDo(todoA.selectedToDoItem ,toDoManager);
            }
        }
    }

    deleteSelected(toDoManager){  
        var selectedToDoItem;
        var mapValue = toDoManager.listOfToDo.values();
        for(var todoTimeStamp of mapValue ){
            selectedToDoItem = document.querySelector(`[todoid="${todoTimeStamp}"]`);
            if(todoTimeStamp.toDoChecked) {
                todoTimeStamp.deleteToDo(selectedToDoItem ,toDoManager);
            }
        }
    }
}

class ToDoItem{
    constructor(toDoId, toDoText, toDoStatus, toDoChecked) {
        this.toDoId = toDoId;
        this.toDoText = toDoText;
        this.toDoStatus = toDoStatus;
        this.toDoChecked = toDoChecked;
    }
 
    init(toDoManager){
        var that = this;
        document.getElementById("todo-event").addEventListener('click', function(){
            that.operations(event,toDoManager);
        });
    }

    operations(event, toDoManager){
        var clickedButton, selectedToDoItemContent, toDoItemId, selectedToDoItem, selectedToDoItemContent;
            if(event.target !== event.currentTarget){
                clickedButton = event.target.getAttribute("element-type");
                toDoItemId  = event.target.parentElement.getAttribute("todoid");
                selectedToDoItem = document.querySelector(`[todoid="${toDoItemId}"]`);
                console.log(selectedToDoItem);
                selectedToDoItemContent  = selectedToDoItem.querySelector(`[element-type="para"]`);
                console.log(toDoManager.listOfToDo);
                switch(clickedButton) {
                    case "done": 
                    toDoManager.listOfToDo.get(parseInt(toDoItemId)).completedEvent(selectedToDoItemContent);
                                break;
                    case "delete":
                    toDoManager.listOfToDo.get(parseInt(toDoItemId)).deleteToDo(selectedToDoItem, toDoManager);
                                break;
                    case "update":
                    toDoManager.listOfToDo.get(parseInt(toDoItemId)).updateToDoList(toDoItemId, selectedToDoItemContent, toDoManager);
                                break;
                    case "checkbox":
                    toDoManager.listOfToDo.get(parseInt(toDoItemId)).setCheckedStatus();
                                break;
                }
        }
        event.stopPropagation();
    }

    completedEvent(selectedToDoItemContent) {
        switch(this.toDoStatus) {
            case false:
                selectedToDoItemContent.classList.add("completed");
                selectedToDoItemContent.classList.remove("not-completed");
                event.target.textContent = "Not Done";
                this.toDoStatus = true;
                break;
            case true:
                selectedToDoItemContent.classList.add("not-completed");
                selectedToDoItemContent.classList.remove("completed");
                event.target.textContent = "Done";
                this.toDoStatus = false;
                break;
        }
    // localStorage.setObject("ListOfToDo",listOfToDo);
    }  

    setCheckedStatus(){
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
   
    updateToDoList(toDoItemId, selectedToDoItemContent, toDoManager){
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
            toDoManager.listOfToDo.get(parseInt(toDoItemId)).toDoText = selectedToDoItemContent.textContent;
            //localStorage.setObject("ListOfToDo",listOfToDo);
        }
    }

    deleteToDo(selectedToDoItem, toDoManager){
        console.log(selectedToDoItem);
        selectedToDoItem.remove();
        toDoManager.listOfToDo.delete();
        //localStorage.setObject("ListOfToDo",listOfToDo);
    }
}



function main(){
    const toDoManager = new ToDoManager();
    toDoManager.init(toDoManager);
   // toDoManager.render();
}

main();