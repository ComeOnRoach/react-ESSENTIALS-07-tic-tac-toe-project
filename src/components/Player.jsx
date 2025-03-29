import { useState } from "react";

function Player({ name, symbol, isActive, onChangeName }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setNewName] = useState(name);
  let btnCaption = "Edit";
  function handleEditClick() {
    setIsEditing((editing) => !editing);
    if(isEditing){
      onChangeName(playerName, symbol);
    }
  }

  function handleChangeFieldValue(event) {
      console.log(event.target.slot)
      setNewName(event.target.value);
  }

  let playerNameEditSwitcher = <span className="player-name">{playerName}</span>;

  if (isEditing) {
    btnCaption = "Save";
    playerNameEditSwitcher = (
      <input
        onChange={handleChangeFieldValue}
        type="text"
        placeholder="Enter a name"
        value={playerName}
        maxLength={12}
        required
      />
    );
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {playerNameEditSwitcher}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{btnCaption}</button>
    </li>
  );
}

export default Player;
