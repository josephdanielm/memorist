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
      <div className="flex mx-auto gap-x-3 font-normal text-center py-1 px-3 bg-zinc-300 text-zinc-800 mt-6">
        <p>
          Score: <b>{score}</b>
        </p>
        <p>
          High Score: <b>{bestScore}</b>
        </p>
      </div>
    </>
  );
}
