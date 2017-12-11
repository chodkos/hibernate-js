function setCookie(name, val, days){
    if(days){
        var data = new Date();
        data.setTime(data.getTime() + (days * 24*60*60*1000));
        var expires = "; expires="+data.toGMTString();
    } else {
    var expires = "COS SIE ZWALILO";
}

document.cookie = name + "=" + val + expires + "; path=/";
}



function getPlayerScoreboard(){
    var cookies = document.cookie.split(/=|;/);

    for(i = 0; i < cookies.length; i+=2){
        if(currentPlayer.name = cookies[i]){
            var temp = new Array();
            temp = cookies[i+1].split(",");
            currentPlayer.scoreBoard = temp;
        }
    }
}