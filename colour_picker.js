var square = document.querySelectorAll(".square");
var newcolor = document.querySelector("#new");
var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");
var message = document.querySelector("#message");
var rgb = document.querySelector("#h");
var up = document.querySelector("h1");
var bodyy = document.querySelector("body");


//As the page loads the random color is put at the top
var correct = random();
rgb.textContent = correct;


var eoh = 5; //Whwther the mode is easy or hard


//num is the correct position
var num = choosernum();


//because the random number depends upon the easy or the hard mode
function choosernum(eoh) {
    if (eoh == 5) {
        return Math.floor(Math.random() * 6);
    } else {
        return Math.floor(Math.random() * 3);
    }
}

setColor(correct, num, eoh);

function setColor(correct, num, eoh) {
    for (var i = 0; i <= eoh; i++) {
        if (i != num) {
            //The colors of the squares are selected randomly except at num position which is correct
            square[i].style.background = random();
        }
        //The correct colour is set at the random position "num" by choosernum function
        square[num].style.background = correct;


        if (eoh == 2) {
            for (var j = 3; j <= 5; j++) {
                square[j].style.background = "black";
            }
        }
    }
}


//Function which selects the random position where the correct colout is to be put 


//Generating the random rgb channel
function random() {
    var r = Math.floor(Math.random() * 256)
    var g = Math.floor(Math.random() * 256)
    var b = Math.floor(Math.random() * 256)
    return "rgb(" + r + "," + g + "," + b + ")";
}

eventclicksquare();

function eventclicksquare() {
    for (var i = 0; i < square.length; i++) {
        square[i].addEventListener("click", clicksquare);
    }
}

function clicksquare() {
    //this refers to the clicked square and it is checked with the correct square
    if (this != square[num]) {
        this.style.background = "black";
        message.textContent = "INCORRECT !!"
    }
    if (this == square[num]) {
        up.style.background = this.style.background;
        for (var i = 0; i <= eoh; i++) {
            square[i].style.background = this.style.background;
        }
        message.textContent = "CORRECT !!";
        newcolor.textContent = "PLAY AGAIN??";
        for (var i = 0; i < square.length; i++) {
            square[i].removeEventListener("click", clicksquare);
        }

    }
}


newcolor.addEventListener("click", clicknewc);


function clicknewc() {
    newcolor.textContent = "NEW COLORS";
    message.textContent = " ";
    //The events must be added to the squares back
    eventclicksquare();
    up.style.background = "rgb(179,198,255)";
    //updating the h1 content
    correct = random();
    rgb.textContent = correct;

    num = choosernum(eoh);
    setColor(correct, num, eoh);
}

//When the easy button is clicked
easy.addEventListener("click", changeeasy);

function changeeasy() {
    //Firstly the eoh is updated
    eoh = 2;
    eventclicksquare();
    up.style.background = "rgb(179, 198, 255)";

    //Changing the button color
    hard.style.background = "rgb(125, 135, 150)";
    easy.style.background = "#5cb85c"

    //finding the new correct position
    correct = random();
    //The heading is changed
    rgb.textContent = correct;
    //The correct positon is found
    num = choosernum(eoh);
    setColor(correct, num, eoh);
}

//When the hard button is clicked
hard.addEventListener("click", changehard)

function changehard() {
    eoh = 5;
    eventclicksquare();
    up.style.background = "rgb(179, 198, 255)";

    //Changing the button color
    hard.style.background = "#5cb85c";
    easy.style.background = "rgb(125, 135, 150)"

    correct = random();
    rgb.textContent = correct;
    num = choosernum(eoh);
    setColor(correct, num, eoh);
}




//01 012 0123 01234 012345