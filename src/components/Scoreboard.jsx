import { useEffect, useState } from "react";

export default function Scoreboard({ score }) {
  const [bestScore, setBestScore] = useState(0);

  useEffect(() => {
    if (score > bestScore) {
      setBestScore(score);
    }
  }, [score]);

  return (
    <>
      <div>
        <p>Score: {score}</p>
        <p>High Score: {bestScore}</p>
      </div>
    </>
  );
}
