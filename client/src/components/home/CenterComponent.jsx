import React, { useState } from "react";
import MessageArea from "./MessageArea";
import SendMessage from "./SendMessage";
import SoundArea from "./SoundArea";

export default function CenterComponent(props) {
  const [page, setPage] = useState(0);
  const [message, setMessage] = useState("");
  const [gif, setGif] = useState()
  const [audio, setAudio] = useState(null);

  function slideTo(newValue, msg, gif, sound) {
    setPage(newValue);
    if (msg !== null) {
      setMessage(msg);
    }
    if (gif !== null) {
      setGif(gif)
    }
    if (sound !== null) {
      setAudio(sound);
    }
  }

  return (
    <div className="centerComponent">
      <div className={"sliderComponent sliderComponent--" + page}>
        <MessageArea onChange={slideTo} message={message} />
        <SoundArea onChange={slideTo} message={message} />
        <SendMessage
          onChange={slideTo}
          message={message}
          gif={gif}
          audio={audio}
          user={props.user}
        />
      </div>
    </div>
  );
}
