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