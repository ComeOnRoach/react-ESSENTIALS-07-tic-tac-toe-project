

function Logs({ turns }){
        return (
        <ol id="log">
            {turns.length > 0 && turns.map((turn) => 
                <li key={(`${turn.square.row}` + `${turn.square.column}`)}>
                    {turn.names[turn.player === "X" ? 0 : 1]}: placed to (row: {(turn.square.row)}) : (column: {(turn.square.column)})
            </li> )}
        </ol>
    )
}

export default Logs;