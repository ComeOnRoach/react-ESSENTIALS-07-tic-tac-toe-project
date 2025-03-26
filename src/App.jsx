import Player from "./components/Player";
import GameBoard from "./components/GameBord";
import { useState } from "react";

function App() {
  const [activePlayer, setActivePlayer] = useState('X');

  function hundleSquareSelectedOnTheBoard(){
    setActivePlayer((player) => player === "X" ? "O" : "X");
  }
  return (
    <menu>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name='Player 1' symbol="X" isActive={activePlayer === "X"} />
          <Player name='Player 2' symbol="O" isActive={activePlayer === "O"} />
        </ol>
        <GameBoard reloadPlayer={() => hundleSquareSelectedOnTheBoard()} symbol={activePlayer}/>
      </div>
      LOG
    </menu>
  );
}

export default App
