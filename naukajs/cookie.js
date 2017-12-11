function setCookie(name, val, days){
    if(days){
        var data = new Date();
        data.setTime(data.getTime() + (days * 24*60*60*1000));
        var expires = "; expires="+data.toGMTString();
    } else {
    var expires = "";
}

document.cookie = name + "=" + val + expires + "; path=/";
}



function getPlayerScoreboard(){
    var cookies = document.cookie.split(/=|;/);
    alert(cookies);
    alert(currentPlayer.name)
    alert(cookies.length)

    for(i = 0; i < cookies.length; i+=2){

        cookies[i] = cookies[i].replace(/\s+/g, '');


        if(currentPlayer.name == cookies[i]){
            var temp = new Array();
            temp = cookies[i+1].split(",");
            currentPlayer.scoreBoard = temp;
        }
    }
}

function printScore(){
    var scores = "";
    var msg = "Twoje wyniki (chronologicznie):"
    var cookies = document.cookie.split(/=|;/);
    if(cookies.length>0) {
        scores += "<ul>";
        for (i = 0; i < cookies.length; i += 2) {
            scores += "<li>" + cookies[i] + ": ";
            scores +=  cookies[i+1] + "</li>";
        }
        scores += "</ul>";
    }
    $('.scores').html(scores);
}