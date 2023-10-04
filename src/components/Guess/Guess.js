import React from "react";
import { LENGTH_OF_GUESS } from "../../constants";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Guess({ guess, answer }) {
  const result = checkGuess(guess, answer);

  return (
    <p className="guess">
      {range(LENGTH_OF_GUESS).map((col) => (
        <span className={`cell ${result?.[col].status}`} key={col}>
          {guess ? guess[col] : ""}
        </span>
      ))}
    </p>
  );
}

export default Guess;
