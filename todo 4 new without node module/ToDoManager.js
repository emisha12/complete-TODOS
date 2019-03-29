import { ToDoActionBarView } from './ToDoActionBarView';
import { ToDoListView } from './ToDoListView';
import { toDoManagerBroker } from './ToDoManagerBroker';
import { ToDoModel } from './ToDoModel';

function ToDoManager(){
    this.todoModel = new ToDoModel();
    this.todoListView = new ToDoListView();
}

ToDoManager.prototype.init = function () {
    const toDoActionBarView = new ToDoActionBarView();
    toDoActionBarView.init();

    toDoManagerBroker.addEventListener('addItem', addToDoItem.bind(this));
    toDoManagerBroker.addEventListener('deleteItem',deleteItem.bind(this)); 
    toDoManagerBroker.addEventListener('markCompleted', markCompleted.bind(this));
    toDoManagerBroker.addEventListener('selectItem', selectToDoItem.bind(this));
    toDoManagerBroker.addEventListener('updateItem', updateToDoItem.bind(this));
    toDoManagerBroker.addEventListener('deleteCompletedItem', deleteCompletedToDo.bind(this));
    toDoManagerBroker.addEventListener('deleteSelectedItem', deleteSelectedToDo.bind(this));
    toDoManagerBroker.addEventListener('updateStatus', updateStatus.bind(this));
}

const addToDoItem = function (event) {
    var todoItem, newTodoTemplate;
    todoItem = this.todoModel.createItem(event.detail);
    newTodoTemplate = this.todoListView.createTemplate(todoItem);
    this.todoListView.addNewTemplate(newTodoTemplate);
}

const deleteItem = function (event) {
    var todoID = event.detail;
    this.todoModel.deleteToDo(todoID);
}

const markCompleted = function (event) {
    var todoID, todoItemContainer, todoItem;
    todoID = event.detail.id;
    todoItemContainer = event.detail.todoContainer;
    this.todoModel.changeCompletedStatus(todoID);
    todoItem = this.todoModel.getToDoItem(todoID);
    this.todoListView.render(todoItem, todoItemContainer);
}

const selectToDoItem = function (event) {
    var todoID = event.detail;
    this.todoModel.changeSelectedStatus(todoID);
}

const updateToDoItem = function (event){
    var todoID, todoText, todoItem, todoItemContainer;
    todoID = event.detail.id;
    todoText = event.detail.todoText;
    todoItemContainer = event.detail.todoContainer;
    this.todoModel.changeToDoContent(todoID, todoText);
    todoItem = this.todoModel.getToDoItem(todoID);
    console.log(todoText);
    this.todoListView.render(todoItem, todoItemContainer);
}

const updateStatus = function (event) {
    var todoId, todoItem, todoItemContainer;
    todoId = event.detail.id;
    todoItemContainer = event.detail.todoContainer;
    this.todoModel.changeUpdateStatus(todoId);
    todoItem = this.todoModel.getToDoItem(todoId);
   // console.log(todoItem);
    this.todoListView.render(todoItem, todoItemContainer);
}

const deleteCompletedToDo = function () {
    var removedToDoIds = this.todoModel.removeCompletedToDo();
    this.todoListView.removeElement(removedToDoIds);
}

const deleteSelectedToDo= function () {
    var removedToDoIds = this.todoModel.removeSelectedToDo();
    this.todoListView.removeElement(removedToDoIds);
}



















// function ToDoManager() {
//     this.toDoItems = {};
//     this.toDoHelperElements ={
//         toDoContainer : document.getElementById("todo-list-wrapper"),
//         template : document.querySelector('#mustache-template'),
//         toDoInput : document.getElementById("input-todo")
//     };
// }

// ToDoManager.prototype.init = function () {
//     const toDoActionBar = new ToDoActionBar();
//     toDoActionBar.init(this.toDoHelperElements);

//     //toDoManagerBroker.addEventListener('addItem', addToDoItem.bind(this));
//     //toDoManagerBroker.addEventListener('deleteCompletedItem', deleteCompletedItem.bind(this));
//     //toDoManagerBroker.addEventListener('deleteSelectedItem', deleteSelectedItem.bind(this));
//     //toDoManagerBroker.addEventListener('notifyChanges', updateToDoItem.bind(this));
//     //toDoManagerBroker.addEventListener('deleteItem',deleteItem.bind(this)); 
// }

// const addToDoItem = function (event) {
//     var todoText =event.detail;  
//     var newTodoItem = new ToDoItem(todoText);
//     var newToDo = {
//         id :newTodoItem.todoId,
//         text :todoText,
//         completeStatus :false,
//         checkedStatus :false
//     }
//     var newElement = newTodoItem.createItem(this.toDoHelperElements);
//     newTodoItem.init(newElement);
//     this.toDoHelperElements.toDoContainer.appendChild(newElement);
//     this.toDoItems[newToDo.id] = newToDo;
// }

// const updateToDoItem = function (event) {
//     var toDoItem = event.detail;
//     this.toDoItems[toDoItem.id].text = toDoItem.text;
//     this.toDoItems[toDoItem.id].completeStatus = toDoItem.completeStatus;
//     this.toDoItems[toDoItem.id].checkedStatus = toDoItem.checkedStatus;
// }

// const deleteItem = function (event) {
//     var todoID = event.detail;
//     delete this.toDoItems[todoID];
// }
// const deleteToDoElement = function (todoID) {
//     var element = document.querySelector(`[todoid = '${todoID}']`);
//     var todoElement = findToDoWrapper("DIV", element.parentElement);
//     todoElement.remove();
//     delete this.toDoItems[todoID];
// }

// const findToDoWrapper = function (tag, element) {
//     while(element.tagName !== tag){
//         element = element.parentElement;
//     }
//     return element;
// }

// const deleteCompletedItem = function () {
//     for(var todoId in this.toDoItems){
//         if(this.toDoItems[todoId].completeStatus){
//             deleteToDoElement.call(this,todoId);
//         }
//     }
// }

// const deleteSelectedItem = function () {
//     for(var todoId in this.toDoItems){
//         if(this.toDoItems[todoId].checkedStatus){
//             deleteToDoElement.call(this, todoId);
//         }
//     }
// }


export { ToDoManager };