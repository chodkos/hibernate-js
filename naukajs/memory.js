tiles = [];
var tilesCount = 4;
var tilesPerRow = 5;
var movesCount = 0;
var mayTouch = true;
var takenTiles = [];
var pairs = 0;
name = "";
var tilesImgs = [
    'img/1.jpg',
    'img/2.jpg',
    'img/3.jpg',
    'img/4.jpg',
    'img/5.jpeg',
    'img/6.jpg',
    'img/7.jpg',

]



for(i = 0; i < tilesCount; i++)
{
    tiles.push(Math.floor(i/2));
}

function startGame() {
    pairs = 0
    movesCount = 0;
    name = $("#name").val();

    var boardToFill = $('.board').empty();

    for (i = 0; i < tilesCount; i++) {
        tiles.push(Math.floor(i/2));

    }

    for(i=0; i < tilesCount; i++){
        var swap = Math.floor(Math.random()*i);
        var tmp = tiles[i];
        tiles[i] = tiles[swap];
        tiles[swap] = tmp;
    }

    for(i=0; i<tilesCount; i++){
        var tile = $('<div class="tile"></div>');
        boardToFill.append(tile);

        tile.data('cardtype', tiles[i]);
        tile.data('index', i);

        tile.css({
            left : 5+(tile.width()+5)*(i%tilesPerRow)
        });
        tile.css({
            top : 5+(tile.height()+5)*(Math.floor(i/tilesPerRow))
        });
        tile.bind('click', function () {
            onTileClick($(this))});

    }

    function onTileClick(element) {

        if(mayTouch){
            if(!takenTiles[0] || (takenTiles[0].data('index') != element.data('idex)'))){
                takenTiles.push(element);
                element.css({'background-image': 'url(' + tilesImgs[element.data('cardtype')]+')'})
            }
            if(takenTiles.length == 2){
                mayTouch = false;
                if(takenTiles[0].data('cardtype') == takenTiles[1].data('cardtype')){
                    window.setTimeout(removeTiles(), 500);
                }else{
                    window.setTimeout(resetTiles, 500);
                }
                movesCount += 1;
            }
            $('.score').html(movesCount);
        }

    }
    
    function removeTiles() {
        takenTiles[0].fadeOut(function () {
            $(this).remove();
        });
        takenTiles[1].fadeOut(function () {
            $(this).remove();
            pairs += 1;
            if(pairs >= tilesCount/2){
               alert(name);
               console.log(pairs)
            }
            mayTouch = true;
            takenTiles = new Array();
        });
    }

    function resetTiles() {
        takenTiles[0].css({'background-image':'url(img/title.jpg)'});
        takenTiles[1].css({'background-image':'url(img/title.jpg)'});
        takenTiles = new Array();
        mayTouch = true;
    }

}