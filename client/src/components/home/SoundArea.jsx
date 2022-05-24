import { React, useState, useEffect } from "react";

import RadioComponent from "./RadioComponent";

import sound1 from "../../assets/audio/sound1.mp3";
import sound2 from "../../assets/audio/sound2.mp3";
import sound3 from "../../assets/audio/sound3.mp3";
import sound4 from "../../assets/audio/sound4.mp3";
import sound5 from "../../assets/audio/sound5.mp3";
import sound6 from "../../assets/audio/sound6.mp3";

export default function SoundArea(props) {
  const [checkedItem, setCheckedItem] = useState(1);
  const [uploadedFile, setUploadedFile] = useState("");
  const [sound, setSound] = useState({ audio: new Audio(sound1), index: 1 });

  const sounds = {
    1: sound1,
    2: sound2,
    3: sound3,
    4: sound4,
    5: sound5,
    6: sound6,
  };

  const radioComponentItems = [];

  for (let index = 1; index <= 7; index++) {
    radioComponentItems.push(
      <RadioComponent
        key={index}
        index={index}
        checked={checkedItem}
        setChecked={(e) => changeSelectedSound(e)}
        playSound={(indexReturn) => playSound(indexReturn)}
      />
    );
  }

  function changeSelectedSound(index) {
    setCheckedItem(index);
    let audio;
    if (index < 7) {
      audio = new Audio(sounds[index]);
      setSound({ audio: audio, index: index });
    } else if (uploadedFile[0] && uploadedFile !== "") {
      audio = new Audio(URL.createObjectURL(uploadedFile[0]));
      setSound({ audio: audio, index: index });
    } else {
      setSound({ audio: new Audio(), index: 0 });
    }
  }

  function playSound(index) {
    let audio;
    if (index < 7) {
      audio = new Audio(sounds[index]);
      setSound({ audio: audio, index: index });
      getDuration(audio);
    } else if (uploadedFile[0] && uploadedFile !== "") {
      audio = new Audio(URL.createObjectURL(uploadedFile[0]));
      setSound({ audio: audio, index: index });
      getDuration(audio);
    } else {
      setSound({ audio: new Audio(), index: 0 });
    }
  }

  async function getDuration(audio) {
    let durationSound = audio.duration;
    await audio.play();
    audio.volume = 0.25;
    if (durationSound < 8) {
      setTimeout(function () {
        audio.pause();
      }, durationSound * 1000);
    } else {
      setTimeout(function () {
        audio.pause();
      }, 7000);
    }
  }

  useEffect(() => {
    if (uploadedFile !== "") {
      changeSelectedSound(7);
    }
  }, [uploadedFile]);

  return (
    <div className="soundSelectionContainer">
      <div
        className="leftArrowContainer"
        onClick={() => props.onChange(0, null, null, null)}
      ></div>

      <div className="radioInputContainer">{radioComponentItems}</div>
      <div className="radioContainer" id="responsive">
        <input
          type="file"
          name="sound"
          id="input"
          className="personalSound"
          accept="audio/*"
          tabIndex="-1"
          onChange={(e) => {
            setUploadedFile(() => e.target.files);
          }}
        ></input>
      </div>
      <div className="preview">
        {uploadedFile === "" || uploadedFile.length === 0 ? (
          <p> Aucun fichier sélectionné pour le moment </p>
        ) : (
          <p> Nom du son importé {uploadedFile[0].name.slice(0, 15)} </p>
        )}
      </div>
      <button
        className="fontStyle validSoundBtn"
        tabIndex="-1"
        onClick={() => props.onChange(2, null, null, sound)}
      >
        Choisir cette alerte
      </button>
    </div>
  );
}
