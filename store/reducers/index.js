import { UPDATE_DECKS } from "../actions/updateDeck";

export default function appReducer(state = {}, action) {
  switch (action.type) {
    case UPDATE_DECKS:
      return action.decks;

    default:
      return state;
  }
}
