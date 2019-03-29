import { toDoManagerBroker } from './ToDoManagerBroker';
function ToDoActionBarView() {}
    
ToDoActionBarView.prototype.init = function(){
    document.getElementById("add-todo").addEventListener('click', getToDoText);
    document.getElementById("delete-selected-btn").addEventListener('click', deleteSelected);
    document.getElementById("delete-completed-btn").addEventListener('click', deleteCompleted);
}
const toDoInput = document.getElementById("input-todo");

const  getToDoText = function() {         
    var toDoText = toDoInput.value;
    var addNewItem;
    if(!toDoText) {
        alert("enter some content");
    }else {  
        addNewItem = new CustomEvent('addItem', {detail: toDoText});
        toDoManagerBroker.dispatchEvent(addNewItem);
        //clearing the text box
        toDoInput.value = "";   
    }
}

const deleteCompleted = function()  {
    var deleteCompletedItem = new Event('deleteCompletedItem');
    toDoManagerBroker.dispatchEvent(deleteCompletedItem);
}

const deleteSelected = function()  {  
    var deleteSelectedItem = new Event('deleteSelectedItem');
    toDoManagerBroker.dispatchEvent(deleteSelectedItem);
}

export {ToDoActionBarView};