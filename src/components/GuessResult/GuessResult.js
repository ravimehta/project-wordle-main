import React from "react";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED, LENGTH_OF_GUESS } from "../../constants";
import Guess from "../Guess";

function GuessResult({ guesses, answer }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((row) => (
        <Guess key={row} guess={guesses[row]} answer={answer} />
      ))}
    </div>
  );
}

export default GuessResult;
