function ToDoModel(){}

var toDoItems = {};
ToDoModel.prototype.createItem = function(todoText){
    var todoItem = {
        todoId : new Date().getTime(),
        todoText : todoText,
        todoStatus : false,
        todoChecked : false,
        todoUpdateStatus : false
    }
    toDoItems[todoItem.todoId] = todoItem;
    return todoItem;
}

ToDoModel.prototype.deleteToDo = function(todoID){
    delete toDoItems[todoID];
}

ToDoModel.prototype.changeCompletedStatus = function(todoID){
    toDoItems[todoID].todoStatus = !toDoItems[todoID].todoStatus;
}

ToDoModel.prototype.getToDoItem = function(todoID){
    return toDoItems[todoID];
}

ToDoModel.prototype.changeSelectedStatus = function(todoID){
    toDoItems[todoID].todoChecked = !toDoItems[todoID].todoChecked;
}
ToDoModel.prototype.changeUpdateStatus = function(todoID){
    toDoItems[todoID].todoUpdateStatus = !toDoItems[todoID].todoUpdateStatus;
}

ToDoModel.prototype.changeToDoContent = function(todoID, todoText){
    // todoTextElement.setAttribute("contenteditable", "true");
    // todoTextElement.classList.add("edit-todo-text");

    // todoTextElement.onkeypress = function (event) {
    //     if (event.keyCode === 13) {
    //         updateContent(todoID);
    //     }
    // // }

    // todoTextElement.onblur = function () {
    //     updateContent(todoID);
    // }

    // function updateContent(todoID) {
        // todoTextElement.classList.remove("edit-todo-text");
        // todoTextElement.removeAttribute("contenteditable");
        toDoItems[todoID].todoText = todoText;
        toDoItems[todoID].todoUpdateStatus = false;
   // }
}

ToDoModel.prototype.removeCompletedToDo= function(){
    var removedId =[];
    for(var todoId in toDoItems){
        if(toDoItems[todoId].todoStatus){
            removedId.push(toDoItems[todoId].todoId);
            delete toDoItems[todoId]; 
        }
    }
    return removedId;
}

ToDoModel.prototype.removeSelectedToDo= function(){
    var removedId =[];
    console.log(toDoItems);
    for(var todoId in toDoItems){
        if(toDoItems[todoId].todoChecked){
            removedId.push(toDoItems[todoId].todoId);
            delete toDoItems[todoId];    
        }
    }
    return removedId;
}
export {ToDoModel};