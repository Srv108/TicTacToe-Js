const boxes = document.querySelectorAll(".box");

const resetGame = document.getElementById("reset");

let turn = true;
let count = 0;
let game = false;

const winner = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,5,9],
    [3,5,7],
    [1,4,7],
    [2,5,8],
    [3,6,9]
]
resetGame.addEventListener("click",(event)=>{
    event.preventDefault();
    reset();
})
function draw(){
    if(count === 9){
        console.log("Game Over");
    }
}

boxes.forEach((box)=>{
    box.addEventListener("click",(event)=>{
        event.preventDefault();
        if(turn) {
            event.target.textContent = "O";
            turn = false;
        }else{
            event.target.textContent = "X";
            turn = true;
        }
        count++;
        draw();
        event.target.disabled = true;
        win();
        if(game){
            disabledButton();
        }
    })
})

function win(){
    winner.forEach((container) => {
        let first = boxes[container[0]-1];
        let second = boxes[container[1]-1];
        let third = boxes[container[2]-1];

        if(first.textContent === "" || second.textContent === "" || second.textContent === "") return;
        if(first.textContent  === second.textContent && second.textContent === third.textContent){
            console.log(first.textContent + " Wins The Game! ");
            game = true;
        }

    })

}

function disabledButton(){
    boxes.forEach((button)=>{
        button.disabled = true;
    })
}

function reset(){
    boxes.forEach((button)=>{
        button.textContent = "";
    })
}