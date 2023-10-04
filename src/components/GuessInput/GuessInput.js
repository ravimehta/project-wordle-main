import React from "react";
import { LENGTH_OF_GUESS } from "../../constants";

function GuessInput({ onAddGuess }) {
  const [guess, setGuess] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (guess.length != LENGTH_OF_GUESS) {
      return;
    }

    onAddGuess(guess);
    setGuess("");
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        pattern={`[A-Za-z]{${LENGTH_OF_GUESS}}`}
        title={`Guess must be ${LENGTH_OF_GUESS} characters long`}
        onChange={(event) => setGuess(event.target.value.toUpperCase())}
      />
    </form>
  );
}

export default GuessInput;
