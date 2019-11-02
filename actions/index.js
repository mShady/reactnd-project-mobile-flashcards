export const RECEIVE_DECKS = "RECEIVE_DECKS";
export const UPSERT_DECK = "UPSERT_DECK";

export function receiveDecks(decks) {
  return {
    type: RECEIVE_DECKS,
    decks
  };
}

export function upsertDeck(deck) {
  return {
    type: UPSERT_DECK,
    deck
  };
}
