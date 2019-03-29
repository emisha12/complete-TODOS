var TODOList = {};

TODOList.init = function(){

    var targetTodo;
    var cloneTodoTemplate = [];
    var todoInput = document.getElementById("text-Box1");
   

    document.getElementById("addBtn").addEventListener('click', addToDoEvent);
     
    function addToDoEvent(){
      
       var todoText = todoInput.value;
        if(todoText === "" || todoText === " "){
           alert("enter some content");
     }else{
            
            var item = document.querySelector(`[data-divItem="divItem"]`);
            var clone = item.cloneNode(true);
            clone.querySelector(`[data-para="para"]`).innerHTML = todoText;
            clone.classList.add("clone");
            clone.classList.remove("todo-item")
            //appending divItem to todo-event
            document.getElementById("todo-event").appendChild(clone);
            clone.setAttribute("todoId",todoCounter++);
            cloneTodoTemplate.push(clone);

            //clearing the text box
            todoInput.value = " ";

     }
    }
    
  
    document.getElementById("todo-event").addEventListener('click', operations);

    function operations(event){
        if(event.target !== event.currentTarget){
        for(i=0; i<cloneTodoTemplate.length; i++){
            targetTodo = cloneTodoTemplate[i].querySelector(`[data-para="para"]`);
            if(event.target === cloneTodoTemplate[i].querySelector(`[data-finBtn="done"]`)){
                finishBtn();
            }else if(event.target === cloneTodoTemplate[i].querySelector(`[data-delBtn="delete"]`)){
                cloneTodoTemplate[i].remove();
                cloneTodoTemplate.splice(i,1);
            }else if (event.target === cloneTodoTemplate[i].querySelector(`[data-updateBtn="update"]`)){
                update_Btn();
            }
        }
    }
    event.stopPropagation();
    };

    function finishBtn(){
        var finishBtnContent = event.target.textContent;
        console.log(finishBtnContent);
        switch(finishBtnContent){
            case "Done" : 
                targetTodo.classList.add("completed");
                targetTodo.classList.remove("not-completed");
                event.target.textContent = "Not Done";
                event.target.className = "not-done";
                break;
            case "Not Done":
                targetTodo.classList.remove("completed");
                targetTodo.classList.add("not-completed");
                event.target.textContent = "Done";
                event.target.className = "finish-btn";
                break;

        }
    }

    function update_Btn(){
        targetTodo.setAttribute("contenteditable","true");
        targetTodo.classList.add("edit-todo-text");
        targetTodo.onkeypress = editTodoTextOnKeyPress;
        targetTodo.onblur = editTodoTextOnBlur;
        function editTodoTextOnKeyPress(event){
            if(event.keyCode === 13){
                targetTodo.classList.remove("edit-todo-text");
                targetTodo.removeAttribute("contenteditable");
            }
        }

        function editTodoTextOnBlur(){
            targetTodo.classList.remove("edit-todo-text");
            targetTodo.removeAttribute("contenteditable");
        }
    }

    document.getElementById("delete-selected-Btn").addEventListener('click',function(){
       var checkedIndex = 0;
       var checkedArray = [];
        for(var j=0; j<cloneTodoTemplate.length; j++){
            if(cloneTodoTemplatey[j]){
                if(cloneTodoTemplate[j].querySelector(`[data-checkBox="checkbox"]`).checked){
                    cloneTodoTemplate[j].remove();
                    checkedArray[checkedIndex++] = j;
                }
            }
        }
        while(checkedIndex){
            cloneTodoTemplate.splice(checkedIndex--,1);
        }
    });
};

TODOList.init();