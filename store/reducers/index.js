import { ADD_DECK } from "../actions/addDeck";
import { ADD_QUESTION } from "../actions/addQuestion";
import { REMOVE_DECK } from "../actions/removeDeck";

export default function appReducer(state = {}, action) {
  switch (action.type) {
    case ADD_DECK:
      return {
        ...state,
        [action.deck.id]: action.deck,
      };
    case REMOVE_DECK:
      const { [action.id]: value, ...newState } = state;
      return newState;
    case ADD_QUESTION:
      return {
        ...state,
        [action.deckID]: {
          ...state[action.deckID],
          questions: [action.question, ...state[action.deckID].questions],
        },
      };

    default:
      return state;
  }
}
