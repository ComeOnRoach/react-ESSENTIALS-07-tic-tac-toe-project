const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]

function GameBoard({ onSelectSquare, turns }) {
    let gameBoard = initialGameBoard;

    for (let turn of turns) {
        const { square, player } = turn;
        const { row, column } = square;
        gameBoard[row][column] = player;
    }
    // const [gameBoard, setGameBoard] = useState(initialGameBoard);

    // function handleGameBoardClicking(rowIndex, itemIndex) {
    //     setGameBoard((changingGameBoard) => {
    //         const copyOfGameBoard = [...changingGameBoard.map((row) => [...row])];
    //         copyOfGameBoard[rowIndex][itemIndex] = symbol;
    //         reloadPlayer();
    //         return copyOfGameBoard;

    //     });
    // }
    return (
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) => <li key={rowIndex}>
                <ol>
                    {row.map((playerSymbol, columnIndex) => <li key={columnIndex}>
                        <button onClick={() => onSelectSquare(rowIndex, columnIndex)}>{playerSymbol}</button>
                    </li>)}
                </ol>
            </li>)}

        </ol>
    )

}
export default GameBoard;