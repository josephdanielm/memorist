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
      <div className="flex mx-auto gap-x-3 text-center py-2">
        <p>Score: {score}</p>
        <p>High Score: {bestScore}</p>
      </div>
    </>
  );
}
