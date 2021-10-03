import updateDecksAction from "./updateDeck";
import { addQuestionAsync } from "../../utils/asyncStorage";

function handleAddQuestionAction(question) {
  return (dispatch) => {
    addQuestionAsync(question).then((decks) =>
      dispatch(updateDecksAction(decks))
    );
  };
}

export default handleAddQuestionAction;
