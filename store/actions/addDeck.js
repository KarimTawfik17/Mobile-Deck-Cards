export const ADD_DECK = "ADD_DECK";

export default function addDeckAction(deck) {
  return {
    type: ADD_DECK,
    deck,
  };
}
