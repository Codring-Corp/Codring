import React, { useState } from "react";

export default function MessageArea(props) {
  const [typingCount, setTypingCount] = useState(0);
  const [message, setMessage] = useState("");

  function updateSpanCount(e) {
    setTypingCount(e.target.value.length);
  }
  function checkValidTextArea(e) {
    // Check if message is not empty
    if (typingCount > 0) {
      props.onChange(1, message, null);
      e.preventDefault();
      // .style.transform = "translateX(-500px)";
    } else {
      alert("Ton message est vide");
    }
  }

  return (
    <div className="messageComponent">
      <textarea
        id="msgArea"
        placeholder="Ecrivez votre message à célébrer !"
        maxLength={256}
        onChange={(e) => {
          updateSpanCount(e);
          setMessage(e.target.value);
        }}
      ></textarea>
      <span> {typingCount} / 256 </span>
      <button className="submitButton" onClick={(e) => checkValidTextArea(e)}>
        {" "}
        Valider mon message{" "}
      </button>
    </div>
  );
}
