import { React, useState } from "react";
import { request } from "../../request";

export default function SendMessage(props) {
  const [sendingMessage, setSendingMessage] = useState(false);
  const [voiceSelected, setVoiceSelected] = useState({
    lang: "fr-FR",
    name: "Thomas",
  });
  const synth = window.speechSynthesis;
  const voices = synth.getVoices();

  async function sendMessage(event) {
    let message = {
      author: props.user.username,
      authorId: props.user._id,
      body: props.message,
      alert: props.audio.index,
    };
    setSendingMessage(true);
    event.target.classList.add("animate");
    event.target.classList.add("unclickable");
    await request.post("/messages/", message);
    let toSpeak = new SpeechSynthesisUtterance(props.message);
    voices.forEach((voice) => {
      if (voice.name === voiceSelected.name) {
        toSpeak.voice = voice;
      }
    });
    await playSound(props.audio.audio, toSpeak, event);
  }
  async function playSound(audio, toSpeak, event) {
    let durationSound = audio.duration;
    await audio.play();
    audio.volume = 0.25;
    if (durationSound < 8) {
      setTimeout(function () {
        audio.pause();
        audio.currentTime = 0;
        playMessage(toSpeak, event);
      }, durationSound * 1000);
    } else {
      setTimeout(function () {
        audio.pause();
        audio.currentTime = 0;
        playMessage(toSpeak, event);
      }, 7000);
    }
  }
  function playMessage(toSpeak, event) {
    synth.speak(toSpeak);
    toSpeak.onend = function () {
      props.onChange(0, "", null);
      event.target.classList.remove("animate");
      event.target.classList.remove("unclickable");
      setSendingMessage(false);
    };
  }

  function checkSendingMessage() {
    if (sendingMessage) {
      return false;
    } else {
      props.onChange(1, "", null);
    }
  }

  return (
    <div className="sendMsgContainer">
      <div
        className="leftArrowContainer"
        onClick={() => {
          checkSendingMessage();
        }}
      ></div>
      <p>Sélection de la voix :</p>
      <select
        id="voiceList"
        tabIndex="-1"
        onChange={(e) =>
          setVoiceSelected({
            lang: e.target.value,
            name: e.target.selectedOptions[0].innerText,
          })
        }
      >
        {voices.map((voice, index) => {
          return (
            <option value={voice.lang} key={index}>
              {voice.name}
            </option>
          );
        })}
      </select>
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
