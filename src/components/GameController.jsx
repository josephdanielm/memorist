import { useState, useEffect } from "react";
import { drawCards, getShuffledCards } from "../utils/deckUtils";
import useCreateDeck from "../hooks/useCreateDeck";
import CardGrid from "./CardGrid";
import Scoreboard from "./Scoreboard";

export default function GameController() {
  const [resetGameTrigger, setResetGameTrigger] = useState(false);
  const { deck, loading, error } = useCreateDeck(resetGameTrigger);
  const [unclickedCards, setUnclickedCards] = useState([]);
  const [activeCards, setActiveCards] = useState([]);
  const [score, setScore] = useState(0);
  const [gameState, setGameState] = useState("initializing");

  useEffect(() => {
    if (!loading && deck.length > 0) {
      setUnclickedCards(deck);
      setActiveCards(drawCards(6, deck, deck));
      setGameState("playing");
    }
  }, [loading, deck]);

  useEffect(() => {
    if (gameState === "won") {
      alert("You win!");
      resetGame();
    } else if (gameState === "lost") {
      alert("You lose!");
      resetGame();
    }
  }, [gameState]);

  useEffect(() => {
    if (
      gameState === "playing" &&
      unclickedCards.length === 0 &&
      deck.length > 0
    ) {
      handleWin();
    }
  }, [unclickedCards, deck, gameState]);

  function handleWin() {
    setGameState("won");
  }

  function handleLose() {
    setGameState("lost");
  }

  function resetGame() {
    setTimeout(() => {
      setScore(0);
      setUnclickedCards([]);
      setActiveCards([]);
      setGameState("initializing");
      setResetGameTrigger((prev) => !prev);
    }, 15);
  }

  function handleCardClick(e) {
    const clickedCardId = parseInt(e.currentTarget.id, 10);
    const cardHasBeenClicked = !unclickedCards.some(
      (card) => card.id === clickedCardId,
    );

    if (!cardHasBeenClicked) {
      setScore((prev) => prev + 1);
      const newUnclickedCardsArray = unclickedCards.filter(
        (card) => card.id !== clickedCardId,
      );
      setUnclickedCards(newUnclickedCardsArray);
      if (newUnclickedCardsArray.length) {
        setActiveCards(drawCards(6, deck, newUnclickedCardsArray));
      }
    } else {
      handleLose();
    }
  }

  return (
    <>
      <Scoreboard score={score} />
      <div className="flex flex-wrap gap-4 mx-4 sm:mx-20 md:mx-26 pb-16">
        <CardGrid
          activeCards={activeCards}
          handleCardClick={handleCardClick}
          loading={loading}
          error={error}
        />
      </div>
    </>
  );
}
