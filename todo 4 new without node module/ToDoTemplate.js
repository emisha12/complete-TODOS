const todoTemplate = `<div class="todo-item" todoid="{{todoId}}">
                    <input type="checkbox" class="select-todo-item" id="check-box" todo-action = "select-item" {{#todoChecked}}checked{{/todoChecked}}>

                    {{#todoUpdateStatus}}
                    <p class="todo-text {{#todoStatus}}completed{{/todoStatus}} {{^todoStatus}}not-completed{{/todoStatus}} edit-todo-text" todo-action="todo-text" contenteditable="true">{{todoText}}</p>
                    {{/todoUpdateStatus}}

                    {{^todoUpdateStatus}}
                    <p class="todo-text {{#todoStatus}}completed{{/todoStatus}} {{^todoStatus}}not-completed{{/todoStatus}}" todo-action="todo-text">{{todoText}}</p>
                    {{/todoUpdateStatus}}

                    <button class="done-btn" todo-action="mark-done">{{#todoStatus}}Not Done{{/todoStatus}} {{^todoStatus}}Done{{/todoStatus}}</button>
                    <button class="delete-btn" todo-action="delete-item">Delete</button>
                    <button class="update-btn" todo-action="update-item">Update</button>
                    </div>`;

export { todoTemplate };