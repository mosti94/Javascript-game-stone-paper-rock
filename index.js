window.onload = function () {

    start();
}

let main = document.createElement("main");
main.setAttribute("id", "main");


let paragraph = document.createElement("p");
paragraph.setAttribute("id", "paragraph");
paragraph.innerHTML = "START GAME";

let button = document.createElement("button");
button.setAttribute("id", "button");
button.innerHTML = "button";


let stone = document.createElement("button");
stone.setAttribute("id", "stone");
stone.innerHTML = "stone";

let paper = document.createElement("button");
paper.setAttribute("id", "paper");
paper.innerHTML = "paper";

let scissor = document.createElement("button");
scissor.setAttribute("id", "scissor");
scissor.innerHTML = "scissor";


let restart = document.createElement("button");
restart.setAttribute("id", "restart");
restart.innerHTML = "RESTART GAME";


let random = document.createElement("p"); 
random.setAttribute("id", "computerChoice");
random.innerHTML = "COMPUTER CHOICE";


let wins = 0;

let lost = 0;

let draws = 0;


let winner = document.createElement("p");
winner.setAttribute("id", "winner");
winner.innerHTML = " WINNER : " + wins;

let loser = document.createElement("p");
loser.setAttribute("id", "loser")
loser.innerHTML = "LOSER : " + lost;

let draw = document.createElement("p");
draw.setAttribute("id", "draw");
draw.innerHTML = "DRAW : " + draws;



const computerChoice = ["stone", "paper", "scissor"];

function start() {
    let starter = document.getElementById("start");

    starter.appendChild(main);

    main.appendChild(paragraph);

    main.appendChild(button);

    button.addEventListener("click", board_Game);
}



function board_Game() {

    let starter = document.getElementById("start");

    let delete_Paragraph = document.getElementById("paragraph");
    let delete_Button = document.getElementById("button");
    delete_Paragraph.remove();
    delete_Button.remove();

    let paragraph = document.createElement("p");
    paragraph.setAttribute("id", "introduction");
    paragraph.innerHTML = "STEIN SAKS PAPIR";


    starter.appendChild(paragraph);

    starter.appendChild(winner);
    starter.appendChild(loser);
    starter.appendChild(draw);


    main.appendChild(stone);
    main.appendChild(paper);
    main.appendChild(scissor);
    starter.appendChild(restart);
    starter.appendChild(random);


    stone.addEventListener("click", stones);
    scissor.addEventListener("click", scissors);
    paper.addEventListener("click", papers);

    restart.addEventListener("click", restart_Game);
}

function restart_Game() {
    wins = 0;
    draws = 0;
    lost = 0;


    document.getElementById("draw").innerHTML = "DRAW: " + draws;
    document.getElementById("winner").innerHTML = "WINNER: " + wins;
    document.getElementById("loser").innerHTML = "LOSER: " + lost;
    random.innerHTML = "COMPUTER CHOICE";



}




function stones(computer, player) {
    let l = document.getElementById("loser");
    let w = document.getElementById("winner");
    let d = document.getElementById("draw");

    player = "stone";

    let cc = Math.floor(Math.random() * 3);

    computer = computerChoice[cc];


    if (player === computer) {
        draws++;
        random.innerHTML = computer;

        d.innerHTML = "DRAW: " + draws;
    }
    else if (computer === "paper") {
        lost++;
        random.innerHTML = computer;


        l.innerHTML = "LOSER: " + lost;

    }
    else {
        wins++;
        random.innerHTML = computer;

        w.innerHTML = "WINNER: " + wins;

    }



}

function scissors(computer, player) {

    let l = document.getElementById("loser");
    let w = document.getElementById("winner");
    let d = document.getElementById("draw");

    player = "scissor";


    let cc = Math.floor(Math.random() * 3);

    computer = computerChoice[cc];

    if (player === computer) {
        draws++;
        d.innerHTML = "DRAW: " + draws;
        random.innerHTML = computer;

    }

    else if(computer === "stone") {

        console.log(computer);

        lost++;

        l.innerHTML = "LOSER: " + lost;
        random.innerHTML = computer;


    }
    
    else {
        wins++;
        w.innerHTML = "WINNER: " + wins;

        random.innerHTML = computer;

    }

}


function papers(computer, player) {

    let l = document.getElementById("loser");
    let w = document.getElementById("winner");
    let d = document.getElementById("draw");

    player = "paper";


    let cc = Math.floor(Math.random() * 3);

    computer = computerChoice[cc];

    if (player === computer) {
        draws++;
        d.innerHTML = "DRAW: " + draws;
        random.innerHTML = computer;

    }

    else if (computer === "scissor") {

        console.log(computer);

        lost++;

        l.innerHTML = "LOSER: " + lost;
        random.innerHTML = computer;


    }
    else {
        wins++;
        w.innerHTML = "WINNER: " + wins;
        random.innerHTML = computer;


    }
}
