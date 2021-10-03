import updateDecksAction from "./updateDeck";
import { getDecksAsync } from "../../utils/asyncStorage";

function handleReceiveDecksAction() {
  return (dispatch) => {
    getDecksAsync().then((decks) => dispatch(updateDecksAction(decks)));
  };
}

export default handleReceiveDecksAction;
