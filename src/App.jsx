import Player from "./components/Player";
import GameBoard from "./components/GameBord";
import { useState } from "react";
import Logs from "./components/Logs";

function App() {
  const [activePlayer, setActivePlayer] = useState('X');
  const [gameTurns, setGameTurns] = useState([]);

  function hundleSquareSelectedOnTheBoard(rowIndex, columnIndex){
    setActivePlayer((player) => player === "X" ? "O" : "X");
    setGameTurns(prevTurns => {
      let currentPlayer = "X";

      if (prevTurns.length > 0 && prevTurns[0].player === "X"){
        currentPlayer = "O"
      }
      const updatedGameTurns = [{ square: { row: rowIndex, column: columnIndex }, player: currentPlayer}, ...prevTurns]

      return updatedGameTurns;
    });
  }
  return (
    <menu>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name='Player 1' symbol="X" isActive={activePlayer === "X"} />
          <Player name='Player 2' symbol="O" isActive={activePlayer === "O"} />
        </ol>
        <GameBoard onSelectSquare={hundleSquareSelectedOnTheBoard} turns={gameTurns}/>
      </div>
      <Logs turns={gameTurns} />
    </menu>
  );
}

export default App
