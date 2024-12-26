const inputBox = document.querySelector("#input-box");
const listContainer = document.querySelector(".list-container");
const addBtn = document.querySelector("#add-btn");

addBtn.addEventListener("click", function(){
    if(inputBox.value === ""){
        alert("You must write something!");
    }
    else{
        const li = document.createElement("LI");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        inputBox.value = "";
        const span = document.createElement("SPAN");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        saveData();
    }
});

listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI" ){
        e.target.classList.toggle("checked");  
        saveData();
        //toggle :check on first click, uncheck for second click
    }
    else if(e.target.tagName === "SPAN" ){
        // e.target.parentNode.remove();
        e.target.parentElement.remove();
        saveData();
    }
});


//it will call when we add element to the listContainer for storing data
function saveData(){
    localStorage.setItem("data" , listContainer.innerHTML);
}
function showData(){
    const data = localStorage.getItem("data");
    listContainer.innerHTML = data; 

}
showData();