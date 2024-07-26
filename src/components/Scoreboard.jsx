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
      <div className="flex mx-auto gap-x-3 text-center py-1 px-3 rounded-md bg-zinc-300 text-zinc-800 mt-4 mb-2">
        <p>Score: {score}</p>
        <p>High Score: {bestScore}</p>
      </div>
    </>
  );
}
