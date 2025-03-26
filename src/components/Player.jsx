import { useState } from "react";


function Player({ name, symbol, isActive }) {
    const [isEditing, setIsEditing] = useState(false);
    const [playerName, setNewName] = useState(name);
    let btnCaption = "Edit";
    function handleEditClick() {
        setIsEditing(editing => !editing);
    }

    function handleChangeFieldValue(event) {
        setNewName(event.target.value);
    }

    let playerNameEditSwitcher = <span className="player-name">{playerName}</span>;

    if (isEditing) {
        btnCaption = "Save";
        playerNameEditSwitcher = <input onChange={handleChangeFieldValue} type="text" required placeholder='Enter a name' value={playerName} />
    }

    return (
        <li className={isActive ? "active" : undefined}>
            <span className="player">
                {playerNameEditSwitcher}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{btnCaption}</button>
        </li>
    )

}

export default Player;