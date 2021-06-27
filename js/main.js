import Game from "./logic.js"
import GameView from "./GameView.js"

let game = new Game();
let gameview = new GameView();

document.querySelector(".restart").addEventListener("click", () => {
    onRestart();
});

let tiles = document.querySelectorAll(".board-tile");
console.log(tiles);
tiles.forEach((tile) => {
    tile.addEventListener("click", () => {
        onTileClicked(tile.dataset.index);
    })
})


function onTileClicked(i){
    // do something
    game.makeMove(i);
    gameview.updateBoard(game);
    
}

function onRestart(){
    game = new Game();
    gameview.updateBoard(game);
}

gameview.updateBoard(game);