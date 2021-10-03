import updateDecksAction from "./updateDeck";
import { addQuestionAsync } from "../../utils/asyncStorage";

function handleAddQuestionAction(id, question, cb) {
  return (dispatch) => {
    addQuestionAsync(id, question)
      .then((decks) => dispatch(updateDecksAction(decks)))
      .then(cb);
  };
}

export default handleAddQuestionAction;
