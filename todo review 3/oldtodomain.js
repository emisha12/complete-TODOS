class Todomanager{
    constructor(){
        this.listOfToDo = [];
        this.toDoCounter = 0;
        this.toDoStatus = false;
        this.toDoChecked = false;
    }

    init(){
        const toDoItem = new Todoitem();
        const toDoAction = new Todoaction();
        toDoAction.init();
        toDoItem.init();
    }
}

// Todomanager.prototype.init = function(){
    
    
// }

class Todoaction extends Todomanager{
    checkExistanceInList(toDoText) {
        const toDoManager = new Todomanager();
        var i, exists;
        var toDoInput = document.getElementById("text-Box1");   
        for(i=0; i < toDoManager.listOfToDo.length; i++){
            if(listOfToDo[i].toDoText === toDoText) {
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
}

Todoaction.prototype.init = function(){
    document.getElementById("addBtn").addEventListener('click', this.addToDoEvent);
    document.getElementById("delete-selected-Btn").addEventListener('click', this.deleteSelected);
    document.getElementById("delete-completed-Btn").addEventListener('click', this.deleteCompleted);
}

Todoaction.prototype.addToDoEvent = function(){  
    var toDoEvent, hiddenTemplate, clone;  
    var toDoInput = document.getElementById("text-Box1");      
    var toDoText = toDoInput.value;
    const toDoAction = new Todoaction();
    const toDoManager = new Todomanager();
        if(!toDoText) {
           alert("enter some content");
     }else {  
            if(!toDoAction.checkExistanceInList(toDoText)) {
                hiddenTemplate = document.querySelector(`[data-divItem="divItem"]`);
                clone = hiddenTemplate.cloneNode(true);
                clone.querySelector(`[element-type="para"]`).innerHTML = toDoText;
                clone.classList.add("clone");
                clone.classList.remove("todo-item")
                //appending divItem to todo-event
                document.getElementById("todo-event").appendChild(clone);
                clone.setAttribute("toDoId",toDoManager.toDoCounter);

                //clearing the text box
                toDoInput.value = "";

                toDoEvent = new Todoitem(toDoManager.toDoCounter, toDoManager.toDoText, toDoManager.toDoStatus, toDoManager.toDoChecked);
                toDoManager.listOfToDo.push(toDoEvent);
                toDoManager.toDoCounter++;
                console.log(toDoManager.listOfToDo)
               // localStorage.setObject("ListOfToDo",listOfToDo);
           }      
        }
}

Todoaction.prototype.deleteSelected = function(){  
    
    for(var j = listOfToDo.length-1; j >= 0; j--) {
        selectedToDoItem = document.querySelector(`[toDoId="${j}"]`);
        //console.log(listOfToDo[j].toDoChecked); 
        if(listOfToDo[j].toDoChecked) {
            listOfToDo[j].deleteBtn(j,selectedToDoItem);
        }
    } 
}

Todoaction.prototype.deleteCompleted = function() {
    for(var j = listOfToDo.length-1; j >= 0; j--) {
        selectedToDoItem = document.querySelector(`[toDoId="${j}"]`);
        if(listOfToDo[j].toDoStatus) {
            listOfToDo[j].deleteBtn(j,selectedToDoItem);
        }
    } 
}

class Todoitem{
    constructor(toDoId, toDoText, toDoStatus, toDoChecked) {
        this.toDoId = toDoId;
        this.toDoText = toDoText;
        this.toDoStatus = toDoStatus;
        this.toDoChecked = toDoChecked;
    }
}

Todoitem.prototype.init = function(){
    document.getElementById("todo-event").addEventListener('click', this.operations);
}

Todoitem.prototype.operations = function(event){
    var clickedButton, selectedToDoItemContent;
    console.log("in operations");
        if(event.target !== event.currentTarget){
            clickedButton = event.target.getAttribute("element-type");
            toDoItemId  = event.target.parentElement.getAttribute("toDoId");
            selectedToDoItem = document.querySelector(`[toDoId="${toDoItemId}"]`);
            console.log(selectedToDoItem);
            selectedToDoItemContent  = selectedToDoItem.querySelector(`[element-type="para"]`);
            switch(clickedButton) {
                case "done": 
                            listOfToDo[toDoItemId].doneBtn(selectedToDoItemContent);
                            break;
                case "delete":
                            listOfToDo[toDoItemId].deleteBtn(toDoItemId,selectedToDoItem);
                            break;
                case "update":
                            listOfToDo[toDoItemId].update_Btn(toDoItemId,selectedToDoItemContent);
                            break;
                case "checkbox":
                            listOfToDo[toDoItemId].setCheckedStatus();
                            break;
            }
    }
    event.stopPropagation();
    }

    Todoitem.prototype.doneBtn = function(selectedToDoItemContent) {      
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

    Todoitem.prototype.update_Btn = function(toDoItemId, selectedToDoItemContent) {  
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
            listOfToDo[toDoItemId].toDoText = selectedToDoItemContent.textContent;
            //localStorage.setObject("ListOfToDo",listOfToDo);
        }
    }

    Todoitem.prototype.setCheckedStatus = function() {  
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

    Todoitem.prototype.deleteBtn = function(toDoItemId,selectedToDoItem) {
        selectedToDoItem.remove();
        listOfToDo.splice(toDoItemId,1);
        this.updateListOfToDoAfterDelete(toDoItemId);
        //localStorage.setObject("ListOfToDo",listOfToDo);
        toDoCounter--;
    }

Todoitem.prototype.updateListOfToDoAfterDelete = function(todoItemId) {
    var i;
    for(i = todoItemId; i < listOfToDo.length; i++) {
        document.querySelector(`[toDoId="${listOfToDo[i].toDoId}"]`).setAttribute("toDoId", `${listOfToDo[i].toDoId-1}`);
        listOfToDo[i].toDoId -= 1;
    }
}
function main(){
    const toDoManager = new Todomanager();
    toDoManager.init();
   // toDoManager.render();
}

main();