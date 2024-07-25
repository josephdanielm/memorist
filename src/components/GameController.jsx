import { useState, useEffect } from "react";
import useCreateDeck from "../hooks/useCreateDeck";
import CardGrid from "./CardGrid";
import Scoreboard from "./Scoreboard";

export default function GameController() {
  const { deck, loading, error } = useCreateDeck();
  const [unclickedCards, setUnclickedCards] = useState([]);
  const [activeCards, setActiveCards] = useState([]);
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (!loading && deck.length > 0) {
      setUnclickedCards(deck);
      setActiveCards(drawCards(6, deck, deck));
    }
  }, [loading, deck]);

  useEffect(() => {
    if (unclickedCards.length === 0 && deck.length > 0 && !loading) {
      setTimeout(() => alert("You win!"), 15);
      // Trigger win logic
    }
  }, [unclickedCards]);

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
      // show 'you lose' modal, reset score
      alert("You lose!");
    }
  }

  return (
    <>
      <Scoreboard score={score} />
      <CardGrid
        activeCards={activeCards}
        handleCardClick={handleCardClick}
        loading={loading}
        error={error}
      />
    </>
  );
}

function drawCards(amountToDraw, entireDeck, unclickedCardsArray) {
  if (!amountToDraw) {
    throw new Error("Cannot draw 0 cards.");
  }

  console.log(unclickedCardsArray);

  const obligatoryUnclickedCard = getShuffledCards(1, unclickedCardsArray)[0];
  console.log(obligatoryUnclickedCard);
  const tempDeck = entireDeck.filter(
    (card) => card.id !== obligatoryUnclickedCard.id,
  );
  return [
    obligatoryUnclickedCard,
    ...getShuffledCards(amountToDraw - 1, tempDeck),
  ];
}

function getShuffledCards(amount, cardArray) {
  if (cardArray.length === 0) {
    throw new Error("No cards in cardArray.");
  }
  if (cardArray.length === 1) {
    return cardArray;
  }

  const randomIndices = getRandomIntsExclusive(amount, cardArray.length);
  const shuffledCards = randomIndices.map((index) => cardArray[index]);

  return shuffledCards;
}

function getRandomIntsExclusive(quantity, max) {
  const set = new Set();
  while (set.size < quantity) {
    set.add(Math.floor(Math.random() * max));
  }
  return Array.from(set);
}
