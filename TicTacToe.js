let btn = document.querySelectorAll(".box");
let reset = document.querySelector(".reset");
let newGame = document.querySelector(".newGame");
let turn = true;
let fill=0;
const possibility = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
btn.forEach((box) =>{
    box.addEventListener("click",()=>{
        if(turn){
            box.style.color = "red";
            box.innerText = "X";
            turn = false;
        }else{
            box.style.color = "blue";
            box.innerText = "O";
            turn = true;
        }
        box.disabled=true;
        fill++;
        if(fill==9){
            matchDraw();
            fill=0;
        }
        checkWinner();
        
    })
});
let checkWinner = ()=>{
    for(indx of possibility){
        let val1=btn[indx[0]].innerText;
        let val2=btn[indx[1]].innerText;
        let val3=btn[indx[2]].innerText;
        if(val1!=""&&val2!=""&&val3!=""){
            if(val1===val2&&val2===val3){
                document.querySelector(".winner").classList.remove("hide");
                (document.querySelector(".winnerText")).innerText=`GAME OVER \nCongratulation ! winner is ${val1}`;
                fill=0;
                disabl();
            }
        }
    }
}
let matchDraw = ()=>{
    for(indx of possibility){
        let val1=btn[indx[0]].innerText;
        let val2=btn[indx[1]].innerText;
        let val3=btn[indx[2]].innerText;
        if(val1!=val2&&val2!=val3){
            document.querySelector(".winner").classList.remove("hide");
            (document.querySelector(".winnerText")).innerText=`Match DRAW !`;
            disabl();
        }
    }
}
let disabl = ()=>{
    for(box of btn){
        box.disabled = true;
    }
}
reset.addEventListener("click",()=>{
    for(box of btn){
        box.innerText="";
        box.disabled = false;
    }
    (document.querySelector(".winner")).classList.add("hide");
});
newGame.addEventListener("click",()=>{
    for(box of btn){
        box.innerText="";
        box.disabled = false;
    }
    (document.querySelector(".winner")).classList.add("hide");
});