

function Logs({turns}){
    return (
        <ol id="log">
            {turns.map(({squere, player}, turnIndex) => <li key={turnIndex}>{`Player: ${player} `}

            </li> )}

        </ol>
    )

}

export default Logs;