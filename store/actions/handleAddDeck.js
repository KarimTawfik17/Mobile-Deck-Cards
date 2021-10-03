import updateDecksAction from "./updateDeck";
import { addDeckAsync } from "../../utils/asyncStorage";

function handleAddDeckAction(title) {
  return (dispatch) => {
    addDeckAsync(title).then((decks) => dispatch(updateDecksAction(decks)));
  };
}

export default handleAddDeckAction;
