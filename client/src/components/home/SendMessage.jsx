import { React, useState } from "react";

export default function SendMessage(props) {
  const [sendingMessage, setSendingMessage] = useState(false);

  console.log(props.message);
  console.log(props.audio);

  function sendMessage(event) {
    event.target.className += " animate unclickable";
  }

  return (
    <div className="sendMsgContainer">
      <div
        className="leftArrowContainer"
        onClick={() => props.onChange(1, "", null)}
      ></div>
      <p>Sélection de la voix :</p>
      <select id="voiceList" tabIndex="-1"></select>
      <button
        className="sendMsgBtn"
        tabIndex="-1"
        onClick={(e) => sendMessage(e)}
      >
        Click Me !
      </button>
    </div>
  );
}
