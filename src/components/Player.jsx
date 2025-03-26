import { useState } from "react";


function Player({name, symbol}){
    const [isEditing, setIsEditing] = useState(false);

    function handleEditClick(isEditingOrNot){
        setIsEditing(isEditingOrNot);
    }
    
    let playerName = <span className="player-name">{name}</span>;
    isEditing && (playerName = <input type="text" required />)

    return (
        <li>
            <span className="player">
                {playerName}
            </span>
            <button onClick={() => handleEditClick(true)}>Edit</button>
        </li>
    )

}

export default Player;