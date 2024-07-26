export function drawCards(amountToDraw, entireDeck, unclickedCardsArray) {
  if (!amountToDraw) {
    throw new Error("Cannot draw 0 cards.");
  }

  const obligatoryUnclickedCard = getShuffledCards(1, unclickedCardsArray)[0];

  const tempDeck = entireDeck.filter(
    (card) => card.id !== obligatoryUnclickedCard.id,
  );
  return [
    obligatoryUnclickedCard,
    ...getShuffledCards(amountToDraw - 1, tempDeck),
  ];
}

export function getShuffledCards(amount, cardArray) {
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
