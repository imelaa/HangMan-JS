import { useEffect, useState } from "react";
import React from "react";
import "./App.css";
import { letters } from "./helpers/letters.js";
import { HangImage } from "./Components/HangImage.js";
import {getRandomWord} from './helpers/getRandomWord.js'
function App() {
  const [word,setWord] = useState(getRandomWord());
  const [hiddenWord, setHiddenWord] = useState('_ '.repeat(word.length));
  const [attemps, setAtempts] = useState(0);
  const [lose, setLose] = useState(false);
  const [win, setWin] = useState(false);

  // Estado para lose
  useEffect(() => {
    if (attemps >= 9) {
      setLose(true);
    }
  }, [attemps]);

    // Estado win
  useEffect(() => {
    const currentHiddenWord = hiddenWord.split(" ").join("");
    if (currentHiddenWord === word) {
      setWin(true);
    }
  }, [hiddenWord,word]);

  const chekLetter = (letter) => {
    if(lose || win) return;

    if (!word.includes(letter)) {
      setAtempts(Math.min(attemps + 1, 9));
      return;
    }

    const hiddenWordArray = hiddenWord.split(" ");

    for (let i = 0; i < word.length; i++) {
      if (word[i] === letter) {
        hiddenWordArray[i] = letter;
      }
    }
    setHiddenWord(hiddenWordArray.join(" "));
  };
    // Funcion de new game
  const newGame = () => {
    const newWorld = getRandomWord();

    setWord(newWorld);
    setHiddenWord('_ '.repeat(newWorld.length))
    setAtempts(0);
    setLose(false);
    setWin(false);

  };
  return (
    <div className="App">
      {/* imagenes */}
      <HangImage imageNumber={attemps} />

      {/* palabra oculta*/}
      <h2>{hiddenWord}</h2>

      {/* botones de letras */}
      <h3>intentos: {attemps}</h3>

      {/* Mennsaje de lose */}
      {(lose) ? <h2>Perdiste</h2> : null}
      {/* Mennsaje de lose */}
      {(win) ? <h2>Ganaste</h2> : null}

      {letters.map((letter) => (
        <button onClick={() => chekLetter(letter)} key={letter}>
          {letter}
        </button>
      ))}
  <br/> 
      <button onClick={newGame}>New Game? </button>
    </div>
  );
}

export default App;
