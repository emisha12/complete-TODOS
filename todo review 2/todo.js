(function() {

    var toDoCounter = 0, listOfToDo = [], toDoItemId, selectedToDoItem, toDoFromlocalStorage, toDoStatus = false, toDoChecked = false;
   
    var Todo = function(toDoId, toDoText, toDoStatus, toDoChecked) {
        this.toDoId = toDoId;
        this.toDoText = toDoText;
        this.toDoStatus = toDoStatus;
        this.toDoChecked = toDoChecked;
    }

    Todo.prototype.doneBtn = function(selectedToDoItemContent) {      
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
        localStorage.setObject("ListOfToDo",listOfToDo);
    }

    Todo.prototype.setCheckedStatus = function() {  
        switch(this.toDoChecked) {
            case false:
                        this.toDoChecked = true;
                        break;
            case true:
                        this.toDoChecked = false;
                        break;
        }
        localStorage.setObject("ListOfToDo",listOfToDo);
    }
    Todo.prototype.update_Btn = function(toDoItemId, selectedToDoItemContent) {  
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
            localStorage.setObject("ListOfToDo",listOfToDo);
        }
    }

    Todo.prototype.updateListOfToDoAfterDelete = function(todoItemId) {
        var i;
        for(i = todoItemId; i < listOfToDo.length; i++) {
            document.querySelector(`[toDoId="${listOfToDo[i].toDoId}"]`).setAttribute("toDoId", `${listOfToDo[i].toDoId-1}`);
            listOfToDo[i].toDoId -= 1;
        }
    }

    Todo.prototype.deleteBtn = function(toDoItemId,selectedToDoItem) {
            selectedToDoItem.remove();
            listOfToDo.splice(toDoItemId,1);
            this.updateListOfToDoAfterDelete(toDoItemId);
            localStorage.setObject("ListOfToDo",listOfToDo);
            toDoCounter--;
    }

    Storage.prototype.setObject = function(key, value) {
        this.setItem(key, JSON.stringify(value));
    }

    Storage.prototype.getObject = function(key) {
        var value = this.getItem(key);
        return value && JSON.parse(value);
    }
    pageLoad();

    function pageLoad(){
        var i;
        toDoFromlocalStorage = localStorage.getObject("ListOfToDo");
       if(toDoFromlocalStorage){
        reloadFromLocalStorage(toDoFromlocalStorage);
        for( i = 0; i < toDoFromlocalStorage.length; i++){
            hiddenTemplate = document.querySelector(`[data-divItem="divItem"]`);
            clone = hiddenTemplate.cloneNode(true);
            selectedToDoItemContent = clone.querySelector(`[element-type="para"]`)
            selectedToDoItemContent.innerHTML = toDoFromlocalStorage[i].toDoText;
            clone.classList.add("clone");
            clone.classList.remove("todo-item");
            document.getElementById("todo-event").appendChild(clone);
            clone.setAttribute("toDoId",toDoFromlocalStorage[i].toDoId);
            toDoEvent = new Todo(toDoFromlocalStorage[i].toDoId, toDoFromlocalStorage[i].toDoText, toDoFromlocalStorage[i].toDoStatus, toDoFromlocalStorage[i].toDoChecked);
            toDoCounter++;
            //console.log(toDoEvent);
            if(toDoFromlocalStorage[i].toDoStatus){
                selectedToDoItemContent.classList.add("completed");
                selectedToDoItemContent.classList.remove("not-completed");
                clone.querySelector(`[element-type="done"]`).textContent = "Not Done";
            }else {
                selectedToDoItemContent.classList.add("not-completed");
                selectedToDoItemContent.classList.remove("completed");
                clone.querySelector(`[element-type="done"]`).textContent = "Done";
            }
        }
       // console.log(toDoCounter);
        }
    }

    function reloadFromLocalStorage(toDoFromlocalStorage){
        var i;
        for(i = 0; i < toDoFromlocalStorage.length; i++){
            toDoEvent = new Todo(toDoFromlocalStorage[i].toDoId, toDoFromlocalStorage[i].toDoText, toDoFromlocalStorage[i].toDoStatus, toDoFromlocalStorage[i].toDoChecked);
            listOfToDo.push(toDoEvent);
        }
    }

    document.getElementById("addBtn").addEventListener('click', addToDoEvent);
     
    function addToDoEvent() {
        var toDoEvent, hiddenTemplate, clone;  
        var toDoInput = document.getElementById("text-Box1");      
        var toDoText = toDoInput.value;
        if(!toDoText) {
           alert("enter some content");
     }else {  
            if(!checkExistanceInList(toDoText)) {
                hiddenTemplate = document.querySelector(`[data-divItem="divItem"]`);
                clone = hiddenTemplate.cloneNode(true);
                clone.querySelector(`[element-type="para"]`).innerHTML = toDoText;
                clone.classList.add("clone");
                clone.classList.remove("todo-item")
                //appending divItem to todo-event
                document.getElementById("todo-event").appendChild(clone);
                clone.setAttribute("toDoId",toDoCounter);

                //clearing the text box
                toDoInput.value = "";

                toDoEvent = new Todo(toDoCounter, toDoText, toDoStatus, toDoChecked);
                listOfToDo.push(toDoEvent);
                toDoCounter++;
                localStorage.setObject("ListOfToDo",listOfToDo);
            }      
        }
       
    }

    function checkExistanceInList(toDoText) {
        var i, exists;
        toDoInput = document.getElementById("text-Box1");   
        for(i=0; i < listOfToDo.length; i++){
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
     
    document.getElementById("todo-event").addEventListener('click', operations);

    function operations(event) {
        var clickedButton, selectedToDoItemContent;
        if(event.target !== event.currentTarget){
            clickedButton = event.target.getAttribute("element-type");
            toDoItemId  = event.target.parentElement.getAttribute("toDoId");
            selectedToDoItem = document.querySelector(`[toDoId="${toDoItemId}"]`);
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
    };

    document.getElementById("delete-selected-Btn").addEventListener('click', deleteSelected);
    
    function deleteSelected() {
        for(var j = listOfToDo.length-1; j >= 0; j--) {
            selectedToDoItem = document.querySelector(`[toDoId="${j}"]`);
            if(listOfToDo[j].toDoChecked) {
                listOfToDo[j].deleteBtn(j,selectedToDoItem);
            }
        } 
    }

    document.getElementById("delete-completed-Btn").addEventListener('click', deleteCompleted);
    
    function deleteCompleted() {
        for(var j = listOfToDo.length-1; j >= 0; j--) {
            selectedToDoItem = document.querySelector(`[toDoId="${j}"]`);
            if(listOfToDo[j].toDoStatus) {
                listOfToDo[j].deleteBtn(j,selectedToDoItem);
            }
        } 
    }
})();
