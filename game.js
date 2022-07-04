var v1 = document.getElementById("1");
var v2 = document.getElementById("2");
var v3 = document.getElementById("3");
var v4 = document.getElementById("4");
var v5 = document.getElementById("5");
var v6 = document.getElementById("6");
var v7 = document.getElementById("7");
var v8 = document.getElementById("8");
var v9 = document.getElementById("9");

var a = [v1, v2, v3, v4, v5, v6, v7, v8, v9];

var playgroundMode = false;
var player = ""

const computer = () => {
    var pick = parseInt(Math.random() * 9);

    while(a[pick].textContent != ""){
        pick = parseInt(Math.random() * 9);
    }
  
    a[pick].textContent = "X";
    a[pick].disabled = true;

    checkComputerWinning();
    if(!checkComputerWinning) checkDraw();

}

const handleClick = (e) => {

    if(playgroundMode){
        if(player!= ""){
            document.getElementById(e.id).textContent = player;
            document.getElementById(e.id).disabled = true;
        }

        checkComputerWinning();
        checkPlayerWinning();
        checkDraw();

    }else{
        document.getElementById(e.id).textContent = "O";
        document.getElementById(e.id).disabled = true;
    
        checkPlayerWinning();
        if(!checkPlayerWinning) checkDraw()
        
        if( a[0].textContent === "" || 
            a[1].textContent === "" || 
            a[2].textContent === "" || 
            a[3].textContent === "" || 
            a[4].textContent === "" || 
            a[5].textContent === "" || 
            a[6].textContent === "" || 
            a[7].textContent === "" || 
            a[8].textContent === "" 
        ){
            computer();
    
        }
    }
}

const handleStart = (e) => {
    if(document.getElementsByClassName("heading")[0].textContent === "Tic Tac Toe") {
    
        for (const element of a) {
            element.disabled = false;
        }

    }else{
        alert("Reset the game before starting a new game");
    }
}

const handleReset = (e) => {

    document.getElementsByClassName("heading")[0].textContent = "Tic Tac Toe";

    for (const element of a) {
        element.textContent = "";
        element.disabled = true;
    }
    
}

const handlePlayground = (e) => {
   if(document.getElementById("choice").hidden === false){
    
    document.getElementById("choice").hidden = true
    document.getElementById("start").disabled = false
    document.getElementById("reset").disabled = false
    handleReset()

   }else{

    playgroundMode = true;
    document.getElementById("choice").hidden = false;
    document.getElementById("start").disabled = true;
    document.getElementById("reset").disabled = true;

    for (const element of a) {
        element.textContent = "";
        element.disabled = false;
    }

   }
}

const handleO = (e) => {
    player = "O"
}

const handleX = (e) => {
    player = "X"
}

const checkDraw = () => {

    if( (a[0].textContent  === 'O' || a[0].textContent  === 'X') && 
        (a[1].textContent  === 'O' || a[1].textContent  === 'X') && 
        (a[2].textContent  === 'O' || a[2].textContent  === 'X') && 
        (a[3].textContent  === 'O' || a[3].textContent  === 'X') && 
        (a[4].textContent  === 'O' || a[4].textContent  === 'X') && 
        (a[5].textContent  === 'O' || a[5].textContent  === 'X') && 
        (a[6].textContent  === 'O' || a[6].textContent  === 'X') && 
        (a[7].textContent  === 'O' || a[7].textContent  === 'X') && 
        (a[8].textContent  === 'O' || a[8].textContent  === 'X')
    ){
        document.getElementsByClassName("heading")[0].textContent = "Draw";
        setTimeout(() => alert("Draw"), 200);
    }
}

const checkPlayerWinning = () => {

    if(
        a[0].textContent === "O" && a[1].textContent === "O" && a[2].textContent === "O" && a[0].textContent === a[1].textContent && a[1].textContent === a[2].textContent ||
        a[3].textContent === "O" && a[4].textContent === "O" && a[5].textContent === "O" && a[3].textContent === a[4].textContent && a[4].textContent === a[5].textContent ||
        a[6].textContent === "O" && a[7].textContent === "O" && a[8].textContent === "O" && a[6].textContent === a[7].textContent && a[7].textContent === a[8].textContent ||
        a[0].textContent === "O" && a[3].textContent === "O" && a[6].textContent === "O" && a[0].textContent === a[3].textContent && a[3].textContent === a[6].textContent ||
        a[1].textContent === "O" && a[4].textContent === "O" && a[7].textContent === "O" && a[1].textContent === a[4].textContent && a[4].textContent === a[7].textContent || 
        a[2].textContent === "O" && a[5].textContent === "O" && a[8].textContent === "O" && a[2].textContent === a[5].textContent && a[5].textContent === a[8].textContent ||
        a[0].textContent === "O" && a[4].textContent === "O" && a[8].textContent === "O" && a[0].textContent === a[4].textContent && a[4].textContent === a[8].textContent ||
        a[2].textContent === "O" && a[4].textContent === "O" && a[6].textContent === "O" && a[2].textContent === a[4].textContent && a[4].textContent === a[6].textContent
    ){
        for (const element of a) {
            element.disabled = true;
        }

        if(playgroundMode){
            document.getElementsByClassName("heading")[0].textContent = "Player O Win";
            setTimeout(() => alert("Player O Win"), 200);
        }else{
            document.getElementsByClassName("heading")[0].textContent = "You Win";
            setTimeout(() => alert("You Win"), 200);
        }

    }
}

const checkComputerWinning = () => {

    if(
        a[0].textContent === 'X' && a[1].textContent === 'X' && a[2].textContent === 'X' && a[0].textContent === a[1].textContent && a[1].textContent === a[2].textContent ||
        a[3].textContent === 'X' && a[4].textContent === 'X' && a[5].textContent === 'X' && a[3].textContent === a[4].textContent && a[4].textContent === a[5].textContent ||
        a[6].textContent === 'X' && a[7].textContent === 'X' && a[8].textContent === 'X' && a[6].textContent === a[7].textContent && a[7].textContent === a[8].textContent ||
        a[0].textContent === 'X' && a[3].textContent === 'X' && a[6].textContent === 'X' && a[0].textContent === a[3].textContent && a[3].textContent === a[6].textContent ||
        a[1].textContent === 'X' && a[4].textContent === 'X' && a[7].textContent === 'X' && a[1].textContent === a[4].textContent && a[4].textContent === a[7].textContent ||
        a[2].textContent === 'X' && a[5].textContent === 'X' && a[8].textContent === 'X' && a[2].textContent === a[5].textContent && a[5].textContent === a[8].textContent ||
        a[0].textContent === 'X' && a[4].textContent === 'X' && a[8].textContent === 'X' && a[0].textContent === a[4].textContent && a[4].textContent === a[8].textContent ||
        a[2].textContent === 'X' && a[4].textContent === 'X' && a[6].textContent === 'X' && a[2].textContent === a[4].textContent && a[4].textContent === a[6].textContent
    ){
        for (const element of a) {
            element.disabled = true;
        }

        if(playgroundMode){
            document.getElementsByClassName("heading")[0].textContent = "Player X Win";
            setTimeout(() => alert("Player X Win"), 200);
        }else{
            document.getElementsByClassName("heading")[0].textContent = "You Lose";
            setTimeout(() => alert("You Lose"), 200);
        }

    }
}