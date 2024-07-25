import { useState } from "react";
import useCreateDeck from "../hooks/useCreateDeck";
import CardGrid from "./CardGrid";

export default function GameController() {
  const { deck, loading, error } = useCreateDeck();
  const [activeCards, setActiveCards] = useState([]);

  return (
    <>
      <CardGrid activeCards={activeCards} loading={loading} error={error} />
    </>
  );
}

function getShuffledCards(quantity, cardArray) {
  const shuffledCards = [];

  if (cardArray.length === 0) {
    throw new Error("No cards in cardArray.");
  }
  if (cardArray.length === 1) {
    return cardArray[0];
  }

  const randomIndices = getRandomIntsExclusive(quantity, cardArray.length);

  randomIndices.forEach((index) => {
    shuffledCards.push(cardArray[index]);
  });

  return shuffledCards;
}

function getRandomIntsExclusive(quantity, max) {
  const set = new Set();
  while (set.size < quantity) {
    set.add(Math.floor(Math.random() * max));
  }
  return Array.from(set);
}
