var word = "Tak";
word = word.toUpperCase();
var wordLength = word.length;
var hiddenWord = "";
var divContent = "";
var znak = 65;
var howManyMishits = 0;
var poKonwersji = String.fromCharCode(znak);


for(i = 0; i < wordLength; i++){
    if(word.charAt(i) == " "){
        hiddenWord = hiddenWord + " ";
    }
    else
        hiddenWord = hiddenWord + "-";
}

function writeWord() {

    document.getElementById("board").innerHTML = hiddenWord;
}

function startGame() {
    for(i = 65; i < 91; i++){

        var letterNumber = "letter" + i;
        divContent = divContent + '<div class="letter" id="'+ letterNumber +'" onclick="checkNumber('+i+')">'+ String.fromCharCode(i)+'</div>';

        if((i-64) % 6== 0) {
            divContent = divContent + '<div style="clear: both" </div>';
        }
    }

    document.getElementById("alphabet").innerHTML = divContent;
    writeWord();
}


function checkNumber(number) {

    var isCorrect = false;
    var hit = "letter" + number;

    for (i = 0; i < wordLength; i++) {
        if (word.charAt(i) == String.fromCharCode(number)) {

            hiddenWord = hiddenWord.setLetter(i, word.charAt(i));
            isCorrect = true;
        }
    }


    if (isCorrect == true) {
        var hit = "letter" + number;
        document.getElementById(hit).style.background = "#003300";
        document.getElementById(hit).style.cursor = "default";
        writeWord();
    }else
        {
            howManyMishits += 1;
            if(howManyMishits >= 9)
                {
                    document.getElementById("alphabet").innerHTML =  "Przegrana! Prawidłowe hasło: "
                        +word+'<br /><br /><span class="reset" onclick="location.reload()">JESZCZE RAZ?</span>';
                }

        var gallowsImg = "imgs/s" + howManyMishits + ".jpg";

        document.getElementById(hit).style.background = "#330000";
        document.getElementById(hit).setAttribute("onClick",";");
        document.getElementById(hit).style.cursor = "default";
        document.getElementById("gallows").innerHTML = '<img src='+ gallowsImg +'>'
        }
        if(word == hiddenWord){
            document.getElementById("alphabet").innerHTML =  "Tak jest! Podano prawidłowe hasło: "
            +word+'<br /><br /><span class="reset" onclick="location.reload()">JESZCZE RAZ?</span>';
        }

}



String.prototype.setLetter = function(position, letter){
    if(position > this.length){
        alert("miejsce wyprzedzilo");
        return this.toString();
    }
    else return this.substr(0, position) + letter + this.substr(position + 1);
}

window.onload = startGame;