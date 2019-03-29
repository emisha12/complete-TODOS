import { toDoManagerBroker } from './ToDoManagerBroker';
import { todoTemplate } from './ToDoTemplate';

function ToDoListView(){}

const toDoContainer = document.getElementById("todo-list-wrapper");

ToDoListView.prototype.createTemplate = function(todoItem){
    var todoItemElement = document.createElement("div");
    todoItemElement.setAttribute("data-name", "todo-item-wrapper")
    todoItemElement.innerHTML = Mustache.to_html(todoTemplate, todoItem);
    return todoItemElement;
}

ToDoListView.prototype.addNewTemplate = function(newTodoElement){
    newTodoElement.addEventListener('click',  onTodoItemClick.bind(this)); 
    toDoContainer.appendChild(newTodoElement);
}

const onTodoItemClick = function (event) {
        var todoItemContainer = event.currentTarget;
        var todoId = event.currentTarget.querySelector(".todo-item").getAttribute("todoid");
        var selectItem, markCompleted, deleteItem, updateStatus;
        switch (event.target.getAttribute('todo-action')) {
            case 'select-item':
                    selectItem = new CustomEvent("selectItem" ,{detail: todoId});
                    toDoManagerBroker.dispatchEvent(selectItem);
                    break;
            case 'mark-done':
                    markCompleted = new CustomEvent("markCompleted",{detail: {id:todoId, todoContainer:todoItemContainer}});
                    toDoManagerBroker.dispatchEvent(markCompleted);
                    break;
            case 'delete-item':
                    todoItemContainer.remove();
                    deleteItem = new CustomEvent("deleteItem" ,{detail: todoId});
                    toDoManagerBroker.dispatchEvent(deleteItem);
                    break;
            case 'update-item':
                    updateStatus = new CustomEvent("updateStatus" ,{detail: {id:todoId, todoContainer:todoItemContainer}});
                    toDoManagerBroker.dispatchEvent(updateStatus);

                    var todoTextElement = todoItemContainer.querySelector('.todo-text');
                    
                    todoTextElement.onkeypress = function (event) {
                        if (event.keyCode === 13) {
                            console.log("keypress");
                            updateContent(todoId, todoTextElement.innerHTML, todoItemContainer);
                        }
                    }
                    break;
        }
    }

ToDoListView.prototype.render = function(todoItem, todoItemContainer){
    todoItemContainer.innerHTML = Mustache.to_html(todoTemplate, todoItem);
}

ToDoListView.prototype.removeElement = function(todoId){
    var element,todoElement;
    for(var id of todoId){
        element = document.querySelector(`[todoid = '${id}']`);
        todoElement = element.closest(`[data-name = 'todo-item-wrapper']`);
        todoElement.remove();
    }
}

const updateContent = function(todoId, todoText, toDoContainer){
    console.log(toDoContainer);
    var updateItem = new CustomEvent("updateItem" ,{detail: {id:todoId, todoText: todoText, todoContainer:toDoContainer}});
    toDoManagerBroker.dispatchEvent(updateItem);
}
























// var ToDoItem = function (todoText) {
//     this.todoId = new Date().getTime();
//     this.todoText = todoText;
//     this.todoStatus = false;
//     this.todoChecked = false;
// }

// ToDoItem.prototype.createItem = function () {
//     var newElement = document.createElement("div");
//     this.render(newElement);
//     return newElement;
// }

// ToDoItem.prototype.init = function (newElement) {
//     newElement.addEventListener('click',  onTodoItemClick.bind(this));  
// }

// const onTodoItemClick = function (event) {
//     var todoTextElement = event.currentTarget.querySelector('.todo-text');

//     switch (event.target.getAttribute('todo-action')) {
//         case 'select-item':
//                 this.todoChecked = !this.todoChecked;
//                 dispatchUpdateEvent.call(this);
//                 break;
//         case 'mark-done':
//                 this.todoStatus = !this.todoStatus;
//                 dispatchUpdateEvent.call(this);
//                 this.render(event.currentTarget);
//                 break;
//         case 'delete-item':
//                 event.currentTarget.remove();
//                 var deleteItem = new CustomEvent("deleteItem" ,{detail: this.todoId});
//                 toDoManagerBroker.dispatchEvent(deleteItem);
//                 break;
//         case 'update-item':
//                 updateToDoItem.call(this, todoTextElement);
//                 break;
//     }
// }
// const dispatchUpdateEvent = function() {
//     var notifyChanges = new CustomEvent('notifyChanges', {detail: {
//         id :this.todoId,
//         text :this.todoText,
//         completeStatus : this.todoStatus,
//         checkedStatus : this.todoChecked
//     }});
//     toDoManagerBroker.dispatchEvent(notifyChanges);
// }

// const updateToDoItem = function(todoTextElement){
//     todoTextElement.setAttribute("contenteditable", "true");
//     todoTextElement.classList.add("edit-todo-text");
//     var that = this;
//     todoTextElement.onkeypress = function (event) {
//         if (event.keyCode === 13) {
//             updateContent.call(that);
//         }
//     }

//     todoTextElement.onblur = function () {
//         updateContent.call(that);
//     }

//     function updateContent() {
//         todoTextElement.classList.remove("edit-todo-text");
//         todoTextElement.removeAttribute("contenteditable");
//         this.todoText = todoTextElement.textContent;
//         dispatchUpdateEvent.call(this);
//     }
// }

// // ToDoItem.prototype.deleteToDoElement = function () {
// //     var element = document.querySelector(`[todoid = '${todoID}']`);
// //     element.currentTarget.remove();

    
// // }

// ToDoItem.prototype.render = function(todoItemElement) {
//     var template = document.querySelector('#mustache-template').innerHTML;
//     todoItemElement.innerHTML = Mustache.to_html(template, this);
    
// }

export { ToDoListView };