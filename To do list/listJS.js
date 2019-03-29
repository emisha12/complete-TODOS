var TODOList = {};

TODOList.init = function(){

    var eventText, tb1, selectedPara, i=0,eventTextArray= [];
    var divArray = [], checkedArray = [],sameEvent=0;
    var saveArray=[],q=[];
    var qwerty = 0;

    tb1=document.getElementById("textBox1");

    document.getElementById("addBtn").addEventListener('click', addTODOEvent);
     
    function addTODOEvent(){
        eventText = tb1.value;
        eventTextArray.push(eventText);
        if(eventText == "" || eventText == " "){
            alert("enter some content");
        }else{
            var item = document.querySelector(`[data-divItem="divItem"]`);
            var clone = item.cloneNode(true);
            clone.querySelector(`[data-para="para"]`).innerHTML = eventText;
            clone.querySelector(`[data-para="para"]`).id= i++;;
            clone.classList.add("cloneDiv");
            clone.classList.remove("divItemStyle")
            //appending divItem to listDiv
            document.getElementById("listsDiv").appendChild(clone);
            divArray.push(clone);
            saveArray.push(clone.outerHTML);
            //saveArray.push(clone);
            saveToLocalStorage();
            var itemStorage= JSON.stringify(qwerty++);
                localStorage.setItem("qwerty",itemStorage);
            // console.log(divArray);
            //clearing the text box
            tb1.value = " ";
           // sameEvent=0;
           //}
        }
    }
     
    function saveToLocalStorage(){
         var item = JSON.stringify(saveArray);
        localStorage.setItem("htmlElements",item);
    }
  
    document.getElementById("listsDiv").addEventListener('click', operations);

    function operations(event){
        
        if(event.target !== event.currentTarget){
        for(i=0; i<divArray.length; i++){
            selectedPara = divArray[i].querySelector(`[data-para="para"]`);
            if(event.target === divArray[i].querySelector(`[data-finBtn="done"]`)){
                doneBtn();
            }else if(event.target === divArray[i].querySelector(`[data-delBtn="delete"]`)){
                divArray[i].remove();
                divArray.splice(i,1);
                saveArray.splice(i,1);
                console.log(saveArray);
                saveToLocalStorage();
                

            }else if (event.target === divArray[i].querySelector(`[data-updateBtn="update"]`)){
                update_Btn();
            }
        }
    }
    event.stopPropagation();
    };

    function doneBtn(){
        if(event.target.textContent == "Done"){
            selectedPara.classList.remove("notCompleted");
            selectedPara.classList.add("completed");
            event.target.textContent = "Not done";
            event.target.className = "notDone";
        }else{
            selectedPara.classList.remove("completed");
            selectedPara.classList.add("notCompleted");
            event.target.textContent = "Done";
            event.target.className = "finBtn";
        }
    }

    function update_Btn(){
        selectedPara.setAttribute("contenteditable","true");
        selectedPara.classList.add("editPara");
        selectedPara.onkeypress = editParaOnKeyPress;
        selectedPara.onblur = editParaOnBlur;
        function editParaOnKeyPress(event){
            if(event.keyCode === 13){
                selectedPara.classList.remove("editPara");
                selectedPara.removeAttribute("contenteditable");
                console.log(saveArray);
                var ll = localStorage.getItem("htmlElements");
                 var saveArray1= JSON.parse(ll);
                 
            }
        }

        function editParaOnBlur(){
            selectedPara.classList.remove("editPara");
            selectedPara.removeAttribute("contenteditable");
        }

        // var stmt = selectedPara.textContent;
        // console.log(stmt);
    }

    document.getElementById("delSelectedBtn").addEventListener('click',function(){
       var checkedIndex = 0;
        for(var j=0; j<divArray.length; j++){
            if(divArray[j]){
                if(divArray[j].querySelector(`[data-checkBox="checkbox"]`).checked){
                    divArray[j].remove();
                    checkedArray[checkedIndex++] = j;
                }
            }
        }
        while(checkedIndex){
            --checkedIndex;
            divArray.splice(checkedArray[checkedIndex],1);
            saveArray.splice(checkedArray[checkedIndex],1);
        }
         saveToLocalStorage();
    });
};

TODOList.init();
