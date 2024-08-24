const boxes=document.querySelectorAll('.box');
const statusTxt=document.querySelector('#status');
const btnRestart=document.querySelector('#restart');
let x="<img src='./images/x.png'>";
let o="<img src='../images/o.jpg'>";

const win=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]

];

let option=["","","","","","","","","",];
let currentplayer=x;
let player="X";
let running=false;

initialization();

function initialization(){
boxes.forEach(box=>box.addEventListener('click',click));
btnRestart.addEventListener('click',restartGame);
statusTxt.textContent='${player} Your Turn';
running=true;
}
function click(){
    const index=this.dataset.index;
    if(option[index]!=""|| !running){
        return;
    }
        update(this,index);
        checkWinner
}
function update(box,index){
    option[index]=player;
    box.innerhtml=currentplayer;
}
function change(){
     player=(player=='X')?"O": "X";
     currentplayer=(currentplayer==x)?o: x;

     statusTxt.textContent=${player} 'Your Turn';

}
function checkWinner(){
    let isWon=false;
    for(let i=0;i<win.length;i++){
       const condition=win[i];
       const box1=option[condition[0]];
       const box2=option[condition[1]];
       const box3=option[condition[2]];
        if(box1=="" || box2=="" || box3==""){
            continue;
        }
       if(box1==box2 && box2==box3){
        isWon=true;
       }
    }
    if(isWon){
        statusTxt.textContent=${player} Won;
        running=false;
    }
    else if (!option.includes("")){
        statusTxt.textContent='game deaw..';
        running=false;
    }
    else{
        change();
    }
}
function restartGame(){

}
