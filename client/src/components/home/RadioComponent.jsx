import React from "react";

export default function RadioComponent(props) {
  const i = props.index;
  const checked = props.checked;

  function check(index) {
    props.setChecked(index);
  }
  function playSound(index) {
    props.playSound(index);
  }

  return (
    <div className="radioContainer">
      <input
        type="radio"
        name={"sound" + i}
        id={"sound" + i}
        checked={checked === i ? true : false}
        onChange={() => check(i)}
      ></input>
      <span className="checkmark"></span>
      <label
        htmlFor={"sound" + i}
        title="Cliquer pour jouer l'alerte"
        onClick={() => playSound(i)}
      >
        {"Alerte " + (i < 7 ? i : "personalisée")}
      </label>
    </div>
  );
}
