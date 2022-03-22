import React, { useState } from "react";
import MessageArea from "./MessageArea";
import SendMessage from "./SendMessage";
import SoundArea from "./SoundArea";

export default function CenterComponent() {
  const [page, setPage] = useState(0);
  const [message, setMessage] = useState("");
  const [audio, setAudio] = useState(null);

  function slideTo(newValue, msg, sound) {
    setPage(newValue);
    if (msg !== "") {
      setMessage(msg);
    }
    if (sound !== null) {
      setAudio(sound);
    }
  }

  return (
    <div className="centerComponent">
      <div className={"sliderComponent sliderComponent--" + page}>
        <MessageArea onChange={slideTo} />
        <SoundArea onChange={slideTo} message={message} />
        <SendMessage onChange={slideTo} message={message} audio={audio} />
      </div>
    </div>
  );
}
