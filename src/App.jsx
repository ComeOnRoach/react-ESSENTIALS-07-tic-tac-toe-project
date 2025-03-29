import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import GameOver from "./components/GameOver";
import Logs from "./components/Logs";
import { useState } from "react";
import { WINNING_COMBINATIONS } from "./components/winning-combinations";

const PLAYERS = {
  "X": 'PLAYER1',
  "O": 'PLAYER2'
}

const INITIAL_GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function deriveActivePlayer(gameTurns) {
  let activePlayer = "X";

  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    activePlayer = "O";
  }
  return activePlayer;
}

function deriveGameBoard(gameTurns){
  let gameBoard = [...INITIAL_GAME_BOARD.map(row => [...row])];

  gameTurns.length > 0 &&
    gameTurns.forEach((turn) => {
      const { square, player } = turn;
      const { row, column } = square;
      gameBoard[row][column] === null && (gameBoard[row][column] = player);
    });
    return gameBoard;
}

function deriveWinner(gameBoard, players){
  let winner;
  for (let combination of WINNING_COMBINATIONS) {
    const firstPlayerSymbol = gameBoard[combination[0].row][combination[0].column];
    const secondPlayerSymbol = gameBoard[combination[1].row][combination[1].column];
    const thirdPlayerSymbol = gameBoard[combination[2].row][combination[2].column];

    if (firstPlayerSymbol && firstPlayerSymbol === secondPlayerSymbol && firstPlayerSymbol === thirdPlayerSymbol) {
      winner = players[firstPlayerSymbol];
    }
  }
  return winner;
}


function App() {
  const [players, setPlayers] = useState(PLAYERS);
  const [gameTurns, setGameTurns] = useState([]);
  const activePlayer = deriveActivePlayer(gameTurns);
  let gameBoard = deriveGameBoard(gameTurns);
  let winner = deriveWinner(gameBoard, players);

  function hundleSquareSelectedOnTheBoard(rowIndex, columnIndex) {
    setGameTurns((prevTurns) => {
      deriveActivePlayer(prevTurns);
      let currentPlayer = deriveActivePlayer(prevTurns);

      const updatedGameTurns = [
        {
          square: { row: rowIndex, column: columnIndex },
          player: currentPlayer,
        },
        ...prevTurns,
      ];
      return updatedGameTurns;
    });
  }

  let hasDrow = gameTurns.length === 9 && !winner;

  function handleRestartTheGame(){
    setGameTurns([]);
  }

  function handlePlayerNameChange(playerName, symbol) {
    setPlayers(prevPlayers => {
      let updatedPlayers = {...prevPlayers};
      updatedPlayers[symbol] = playerName;
      return updatedPlayers;
    })
  }

  return (
    <menu>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            name={PLAYERS.X}
            symbol="X"
            isActive={activePlayer === "X"}
            onChangeName={handlePlayerNameChange}
          />
          <Player
            name={PLAYERS.O}
            symbol="O"
            isActive={activePlayer === "O"}
            onChangeName={handlePlayerNameChange}
          />
        </ol>
        {(winner || hasDrow) && <GameOver gameWinner={winner} onRestart={handleRestartTheGame}/>}
        <GameBoard
          onSelectSquare={hundleSquareSelectedOnTheBoard}
          board={gameBoard}
        />
      </div>
      <Logs turns={gameTurns} players={players}/>
    </menu>
  );
}

export default App;
