import { useState, useEffect } from "react";
import useCreateDeck from "../hooks/useCreateDeck";
import CardGrid from "./CardGrid";

export default function GameController() {
  const { deck, loading, error } = useCreateDeck();
  const [unclickedCards, setUnclickedCards] = useState([]);
  const [activeCards, setActiveCards] = useState([]);

  useEffect(() => {
    if (!loading && deck.length > 0) {
      setUnclickedCards(deck);
      setActiveCards(drawCards(6, deck, deck));
    }
  }, [loading, deck]);

  function handleCardClick(e) {
    console.log(e.currentTarget);
  }

  return (
    <>
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
