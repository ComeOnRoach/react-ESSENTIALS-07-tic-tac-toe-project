function Logs({ turns, players }){
        return (
        <ol id="log">
            {turns.length > 0 && turns.map((turn) => 
                <li key={(`${turn.square.row}` + `${turn.square.column}`)}>
                    {(turn.player === "X" ? players.X : players.O).toUpperCase()}: placed to (row: {(turn.square.row)}) : (column: {(turn.square.column)})
            </li> )}
        </ol>
    )
}

export default Logs;