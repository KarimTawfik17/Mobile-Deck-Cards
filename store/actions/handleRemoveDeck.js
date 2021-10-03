import updateDecksAction from "./updateDeck";
import { removeDeckAsync } from "../../utils/asyncStorage";

function handleRemoveDeckAction(question) {
  return (dispatch) => {
    removeDeckAsync(question).then((decks) =>
      dispatch(updateDecksAction(decks))
    );
  };
}

export default handleRemoveDeckAction;
