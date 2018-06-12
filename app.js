//Variable

let itemBox = document.querySelector(".item");

//eventListner
eventListner();
function eventListner(){
    document.querySelector("#todo").addEventListener('submit',fetchingData);
    itemBox.addEventListener('click',removeFun);
}


//function

function fetchingData(e){
    e.preventDefault();
    let inputValue = document.getElementById('myValue').value;

    const rvmBtn = document.createElement("a");
    const li = document.createElement("li");

    
    rvmBtn.classList = "removeItem";
    rvmBtn.textContent = "X"
    
    li.textContent = inputValue;
    li.appendChild(rvmBtn);
    itemBox.appendChild(li);

}
function removeFun(e){
    if(e.target.classList.contains("removeItem")){
        e.target.parentElement.remove();
    }
}