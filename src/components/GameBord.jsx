import { useState } from 'react';

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]

function GameBoard({ reloadPlayer, symbol }) {
    const [gameBoard, setGameBoard] = useState(initialGameBoard);

    function handleGameBoardClicking(rowIndex, itemIndex) {
        setGameBoard((changingGameBoard) => {
            const copyOfGameBoard = [...changingGameBoard.map((row) => [...row])];
            copyOfGameBoard[rowIndex][itemIndex] = symbol;
            reloadPlayer();
            return copyOfGameBoard;

        });
    }

    return (
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) => <li key={rowIndex}>
                <ol>
                    {row.map((playerSymbol, itemIndex) => <li key={itemIndex}>
                        <button onClick={() => handleGameBoardClicking(rowIndex, itemIndex)}>{playerSymbol}</button>
                    </li>)}
                </ol>
            </li>)}

        </ol>
    )

}
export default GameBoard;