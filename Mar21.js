let addcard = document.querySelector('#addcard');
let todo = document.querySelector('#todo')

addcard.addEventListener('click', addTask);

function addTask() {
    console.log("Clicked")
    let card = document.createElement('div');
    card.className = "card";
    card.innerHTML = "Add Task"
    card.setAttribute("contenteditable", true);
    todo.append(card);
    card.focus();

    // card.addEventListener("blur", (eventDetails)=>{
    //     let blurredCard = eventDetails.target;
    //     if(blurredCard.innerText.trim() == ""){
    //         blurredCard.remove();
    //     }

    card.addEventListener("blur", blurFunction);

    function blurFunction(eventDetails) {
        let blurredCard = eventDetails.target;
        if (blurredCard.innerHTML.trim() == "") {
            blurredCard.remove();
        }
    }

    card.addEventListener("click", emptyText);

    function emptyText(eventDetails) {
        let clickedCard = eventDetails.target;
        if (clickedCard.innerText == "Add Task") {
            clickedCard.innerText = "";
        }
    }


    let selector = document.createElement("select");
    selector.innerHTML =
    `   <option value="todo">ToDo</option>
        <option value="progress">Progress</option>
        <option value="done">Done</option>         
    `
    card.append(selector);


}




