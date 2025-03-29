function GameOver({ gameWinner, onRestart }) {
    return (
        <div id="game-over">
            <h2>Game Over!</h2>
            {gameWinner ? <p>{gameWinner.toUpperCase()} won!</p> : <p>It's a DROW!</p>}
            <p>
                <button onClick={onRestart}>Rematch!</button>
            </p>
        </div>
    )
}

export default GameOver;