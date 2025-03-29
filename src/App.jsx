import Player from "./components/Player";
import GameBoard from "./components/GameBord";
import { useState } from "react";
import Logs from "./components/Logs";
import { WINNING_COMBINATIONS } from "./components/winning-combinations";

const initialGameBoard = [
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

let winner = { won: undefined, playerName: null };

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [playerNames, setPlayerNames] = useState(["PLAYER1", "PLAYER2"]);

  const activePlayer = deriveActivePlayer(gameTurns);

  let gameBoard = initialGameBoard;

  gameTurns.length > 0 &&
    gameTurns.forEach((turn) => {
      const { square, player } = turn;
      const { row, column } = square;
      gameBoard[row][column] === null && (gameBoard[row][column] = player);
    });



  for (let combination of WINNING_COMBINATIONS) {
    const firstPlayerSymbol = gameBoard[combination[0].row][combination[0].column];
    const secondPlayerSymbol = gameBoard[combination[1].row][combination[1].column];
    const thirdPlayerSymbol = gameBoard[combination[2].row][combination[2].column];

    if (firstPlayerSymbol && firstPlayerSymbol === secondPlayerSymbol && firstPlayerSymbol === thirdPlayerSymbol) {
      winner.won = true;
      winner.playerName = firstPlayerSymbol === "X" ? playerNames[0] : playerNames[1];
    }
  }

  function hundleSquareSelectedOnTheBoard(rowIndex, columnIndex) {
    setGameTurns((prevTurns) => {
      const currentPlayersName = [...playerNames];
      deriveActivePlayer(prevTurns);
      let currentPlayer = deriveActivePlayer(prevTurns);

      const updatedGameTurns = [
        {
          square: { row: rowIndex, column: columnIndex },
          names: currentPlayersName,
          player: currentPlayer,
        },
        ...prevTurns,
      ];
      return updatedGameTurns;
    });
  }

  function handleChangePlayerName(event) {
    const userSymbolIdentifier = event.target.slot;
    const value = event.target.value.toUpperCase();
    setPlayerNames((prevPlayersName) => {
      const updatedPlayerNames = [...prevPlayersName];
      userSymbolIdentifier === "X" && (updatedPlayerNames[0] = value);
      userSymbolIdentifier === "O" && (updatedPlayerNames[1] = value);
      return updatedPlayerNames;
    });
  }
  return (
    <menu>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            name={playerNames[0]}
            symbol="X"
            isActive={activePlayer === "X"}
            onChangeName={handleChangePlayerName}
          />
          <Player
            name={playerNames[1]}
            symbol="O"
            isActive={activePlayer === "O"}
            onChangeName={handleChangePlayerName}
          />
        </ol>
        {winner.won && <p>{winner.playerName} won! </p>}
        <GameBoard
          onSelectSquare={hundleSquareSelectedOnTheBoard}
          board={gameBoard}
        />
      </div>
      <Logs turns={gameTurns} />
    </menu>
  );
}

export default App;
