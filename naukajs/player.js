var Player = function(name){
    this.name = name;
    this.scoreBoard = new Array();
    this.addScore = function (score) {
        this.scoreBoard.push(score)
    }
}