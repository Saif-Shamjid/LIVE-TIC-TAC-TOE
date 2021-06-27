export default class GameView{


    constructor() {
        
    }

    updateBoard(game){
        this.updateTurn(game);
        const winningCombination = game.findWinningCombinations();
        for(let i = 0; i<game.board.length; i++){
            // console.log(game.board[i])
            const tile = document.querySelector(`.board-tile[data-index='${i}']`);
            // tile.textContent = game.board[i];

            tile.classList.remove("tile-winner");

            let tileType = game.board[i] == 'X' ? "tile-x" : "tile-o";
            tile.innerHTML = `<span class="${tileType}">${game.board[i] ? game.board[i] : ""}</span>`


            if(winningCombination && winningCombination.includes(i)){
                tile.classList.add('tile-winner');
            }

        }
    }

    updateTurn(game){
        let playerx = document.querySelector(".player-x")
        let playero = document.querySelector(".player-o")
        playerx.classList.remove("active")
        playero.classList.remove("active")


        if (game.turn == 'X'){
            playerx.classList.add('active');
        } else{
            playero.classList.add('active');
        }
    }
}
