export const ADD_QUESTION = "ADD_QUESTION";

export default function addQusetionAction(deckID, question) {
  return {
    type: ADD_QUESTION,
    deckID,
    question,
  };
}
