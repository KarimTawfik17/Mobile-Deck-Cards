import updateDecksAction from "./updateDeck";
import { removeDeckAsync } from "../../utils/asyncStorage";

function handleRemoveDeckAction(id, cb) {
  return (dispatch) => {
    removeDeckAsync(id)
      .then((decks) => dispatch(updateDecksAction(decks)))
      .then(cb);
  };
}

export default handleRemoveDeckAction;
