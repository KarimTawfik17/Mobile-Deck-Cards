import updateDecksAction from "./updateDeck";
import { removeDeckAsync } from "../../utils/asyncStorage";

function handleRemoveDeckAction(id) {
  return (dispatch) => {
    removeDeckAsync(id).then((decks) => dispatch(updateDecksAction(decks)));
  };
}

export default handleRemoveDeckAction;
