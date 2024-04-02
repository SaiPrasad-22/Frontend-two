let addcard = document.querySelector('#addcard');
let todo = document.querySelector('#todo')

addcard.addEventListener('click', addTask);

function addTask() {
    console.log("Clicked")
    let card = document.createElement('div');
    card.className = "card";
    card.innerHTML = "Add Task"
    card.setAttribute("contenteditable", true);
    card.setAttribute("draggable", true)
    todo.append(card);
    card.focus();


    card.addEventListener("dragstart", (eventDetails)=>{
        let dragCard = eventDetails.target;
        dragCard.style.opacity = 0.5;
    })

    card.addEventListener("dragend", (eventDetails)=>{
        let dragCard = eventDetails.target;
        dragCard.style.opacity = 1;
    })

   
    card.addEventListener("dragover", (eventDetails)=>{
        eventDetails.preventDefault();
    })
    card.addEventListener("dragenter", (eventDetails)=>{
        eventDetails.preventDefault();
    })
    card.addEventListener("drop", (eventDetails)=>{
        eventDetails.preventDefault();
    })






    // card.addEventListener("blur", blurFunction);

    // function blurFunction(eventDetails) {
    //     let blurredCard = eventDetails.target;
    //     if (blurredCard.innerHTML.trim() == "") {
    //         blurredCard.remove();
    //     }
    // }

    // card.addEventListener("click", emptyText);

    // function emptyText(eventDetails) {
    //     let clickedCard = eventDetails.target;
    //     if (clickedCard.innerText == "Add Task") {
    //         clickedCard.innerText = "";
    //     }
    // }

    // // SELECTOR -->

    // let selector = document.createElement("select");
    // selector.innerHTML =
    //     `   <option value="todo">ToDo</option>
    //     <option value="progress">Progress</option>
    //     <option value="done">Done</option>         
    // `
    // card.append(selector);

    // let selectedId = {
    //     todo: "todo",
    //     progress: "progress",
    //     done: "done"
    // }

    // selector.addEventListener("change", (eventDetails) => {
    //     console.log(eventDetails.target.value);
    //     console.log("column moved-", selectedId[eventDetails.target.value]);
    //     let columnId = selectedId[eventDetails.target.value];
    //     let selectedContainer = document.querySelector(`#${columnId}`)
    //     console.log(selectedContainer);
    //     selectedContainer.append(card);
    // })




}




