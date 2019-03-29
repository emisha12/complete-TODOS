import {ToDoManager} from './todo-manager.js';

function main(){
    const toDoManager = new ToDoManager();
    toDoManager.init(toDoManager);
   // toDoManager.render();
}

main();