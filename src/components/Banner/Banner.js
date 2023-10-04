import React from "react";

function Banner({ hasWon, guesses, answer }) {
  return (
    <div className={`banner ${hasWon ? "happy" : "sad"}`}>
      {hasWon ? (
        <p>
          <strong>Congratulations! </strong>Got it in
          <strong> {guesses.length} guesses</strong>.
        </p>
      ) : (
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
      )}
    </div>
  );
}

export default Banner;
