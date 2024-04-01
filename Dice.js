// Dice Game Script

let players = document.querySelectorAll('input');
let btns = document.querySelectorAll('.Dice');
let score = document.querySelectorAll('span');
let end = document.querySelector('#End')

end.disabled = true;


for (let t of btns){
    t.addEventListener('click',diceroll)
}

let btnClickCount = 0;
function diceroll(eventDetails) {
    btnClickCount = btnClickCount +1;

    if(btnClickCount==6){
        end.disabled = false;
    }

    eventDetails.target.disabled = true;
    console.log(eventDetails.target.id);
    let btn_id = eventDetails.target.id-1;

    let diceArr = [1,2,3,4,5,6];
    let r = parseInt(Math.random()*6);
    let dicescore = diceArr[r];
    console.log(dicescore);
    score[btn_id].innerHTML = dicescore;

}