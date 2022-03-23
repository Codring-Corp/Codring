import React, { useEffect, useState } from "react";

export default function MessageArea(props) {
  const [message, setMessage] = useState(props.message);
  const [typingCount, setTypingCount] = useState(message.length);

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

  useEffect(() => {
    props.onChange(0, message, null);
    setTypingCount(message.length);
  }, [message, props]);

  return (
    <div className="messageComponent">
      <textarea
        id="msgArea"
        placeholder="Ecrivez votre message à célébrer !"
        maxLength={256}
        onChange={(e) => {
          setMessage(e.target.value);
        }}
        value={props.message}
      ></textarea>
      <span> {props.message.length} / 256 </span>
      <button className="submitButton" onClick={(e) => checkValidTextArea(e)}>
        {" "}
        Valider mon message{" "}
      </button>
    </div>
  );
}
