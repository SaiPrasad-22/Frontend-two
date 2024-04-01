// Events & Event Listners

// Event = Click
// Click = Function
// EventListner = Listens the Function




let input = document.querySelector('input');
let button = document.querySelector('button');
let output = document.querySelector('.output');


button.addEventListener('click', btnclicked);

function btnclicked() {
    let value = input.value;
    let tip = value * 0.02;
    console.log(tip);
    output.innerHTML = `Your Tip is ${tip} Rupees`;
}


