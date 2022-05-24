import React, { useEffect, useState } from "react";
import GifContainer from "./GifContainer";
import Cross from "../../assets/svg/Cross";


export default function MessageArea(props) {
  const [message, setMessage] = useState(props.message);
  const [typingCount, setTypingCount] = useState(message.length);
  const [showGifContainer, setShowGifContainer] = useState(false)
  const [selectedGif, setSelectedGif] = useState()

  function checkValidTextArea(e) {
    // Check if message is not empty
    if (typingCount > 0) {
      props.onChange(1, message, selectedGif, null);
      e.preventDefault();
    } else {
      alert("Ton message est vide");
    }
  }

  useEffect(() => {
    props.onChange(0, message, null);
    setTypingCount(message.length);
  }, [message]);

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
      
      <div className="bottom-span">
        <span className="gif" onClick={() => setShowGifContainer(true)}>GIF</span>
        <span> {props.message.length} / 256 </span>
      </div>
      
      <div className="bottom-part">
        { selectedGif &&
          <div className="gif-preview">
            <p>GIF</p>
            <p>{ selectedGif.title }</p>
          </div>
        }
        
        <button className="submitButton" onClick={(e) => checkValidTextArea(e)}>
          {" "}
          Valider mon message{" "}
        </button>
      </div>
      
      { showGifContainer && <GifContainer selectedGif={gif => {setSelectedGif(gif);setShowGifContainer(false)}} hideContainer={() => setShowGifContainer(false)} /> }
    </div>
  );
}
