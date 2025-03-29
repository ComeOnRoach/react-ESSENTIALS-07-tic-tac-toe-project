import { useState } from "react";

function Player({ name, symbol, isActive, onChangeName }) {
  const [isEditing, setIsEditing] = useState(false);
  // const [playerName, setNewName] = useState(name);
  let btnCaption = "Edit";
  function handleEditClick() {
    setIsEditing((editing) => !editing);
  }

  // function handleChangeFieldValue(event) {
  //     console.log(event.target.slot)
  //     setNewName(event.target.value);
  // }

  let playerNameEditSwitcher = <span className="player-name">{name}</span>;

  if (isEditing) {
    btnCaption = "Save";
    playerNameEditSwitcher = (
      <input
        onChange={onChangeName}
        type="text"
        placeholder="Enter a name"
        value={name}
        slot={symbol}
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
