import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessResult from "../GuessResult";
import Banner from "../Banner";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  const wonTheGame = guesses.filter((guess) => guess === answer).length > 0;
  const lostTheGame = !wonTheGame && guesses.length >= NUM_OF_GUESSES_ALLOWED;
  const gameOver = wonTheGame || lostTheGame;

  console.log(guesses);
  function handleAddGuess(guess) {
    const nextGuesses = [...guesses, guess];
    setGuesses(nextGuesses);
  }

  return (
    <>
      <GuessResult guesses={guesses} answer={answer} />
      {gameOver ? (
        <Banner hasWon={wonTheGame} guesses={guesses} answer={answer} />
      ) : (
        <GuessInput onAddGuess={handleAddGuess} />
      )}
    </>
  );
}

export default Game;
