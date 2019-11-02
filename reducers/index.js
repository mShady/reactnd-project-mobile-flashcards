import { RECEIVE_DECKS, UPSERT_DECK } from "../actions";

function decks(state = {}, action) {
  switch (action.type) {
    case RECEIVE_DECKS:
      return {
        ...state,
        ...action.decks
      };
    case UPSERT_DECK:
      return {
        ...state,
        [action.deck.title]: action.deck
      };
    default:
      return state;
  }
}

export default decks;
