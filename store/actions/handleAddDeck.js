import updateDecksAction from "./updateDeck";
import { addDeckAsync } from "../../utils/asyncStorage";

function handleAddDeckAction(deck, cb) {
  return (dispatch) => {
    addDeckAsync(deck)
      .then((decks) => dispatch(updateDecksAction(decks)))
      .then(cb);
  };
}

export default handleAddDeckAction;
