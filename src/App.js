import React from 'react';
import './App.css';

var pads = [
  {
    name: "Heater-1",
    key: "Q",
    audio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
  },
    {
      name: "Heater-2",
      key: "W",
      audio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
    },
    {
      name: "Heater-3",
      key: "E",
      audio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
    },
    {
      name: "Heater-4",
      key: "A",
      audio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
    },
    {
      name: "Clap",
      key: "S",
      audio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
    },
    {
      name: "open hihat",
      key: "D",
      audio: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
    },
    {
      name: "closed hihat",
      key: "Z",
      audio: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
    },
    {
      name: "Kick-n'-Hat",
      key: "X",
      audio: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
    },
    {
      name: "Kick",
      key: "C",
      audio: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
    }
]

const App = () => {
  const [keyPressed, setKeyPressed] = React.useState('')
  const playAudio = pad => {
    const audio = document.getElementById(pad.key);
    setKeyPressed(pad.key)
    audio.currentTime = 0;
    audio.play()
  }
  
  React.useEffect(() => {
    const handler = function(event) {
      const audio = document.getElementById(event.key.toUpperCase());
      if(audio){
        setKeyPressed(event.key.toUpperCase())
        audio.currentTime = 0;
        audio.play()
      }
    }
    window.addEventListener('keydown', handler)
    return () => {
      window.removeEventListener('keydown', handler)
    }
  }, [])
  
  return (
    <div id='title'>
      <h1>DRUM MACHINE</h1>
      <div id="drum-machine">
        {pads.map(pad => {
          return (
            <button 
              onClick={e => {e.preventDefault(); playAudio(pad)}} 
              className="drum-pad"
              id={pad.name}
              >
              <audio 
                className="clip" 
                id={pad.key}
                src={pad.audio}>
              </audio>{pad.key}
            </button>)
        })}
        <div id="display">
          {keyPressed}
        </div>
      </div>
    </div>
  );
}

export default App;
