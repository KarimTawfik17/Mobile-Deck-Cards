import updateDecksAction from "./updateDeck";
import { getDecksAsync } from "../../utils/asyncStorage";

function handleReceiveDeckAction() {
  return (dispatch) => {
    getDecksAsync().then((decks) => dispatch(updateDecksAction(decks)));
  };
}

export default handleReceiveDeckAction;
