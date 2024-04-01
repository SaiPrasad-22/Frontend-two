let button = document.querySelectorAll('button');
let result = document.querySelector('.result');
let para  = document.querySelector('.para');

// Define userScore and pcScore variables outside the function
let userScore = 0;
let pcScore = 0;

for (let t of button) {
    t.addEventListener('click', () => tossClicked(t.innerText));
}

function tossClicked(selectedbtn) {
    let userToss = selectedbtn;
    let tossArr = ['Head', 'Tail'];
    let r = parseInt(Math.random() * tossArr.length);
    let rToss = tossArr[r];

    if (userToss === rToss) {
        userScore++;
        para.innerHTML = "User Won"
    } else {
        pcScore++;
        para.innerHTML = "Pc Won"
    }

    result.innerHTML = `User Score: ${userScore} Pc Score: ${pcScore}`;
}


