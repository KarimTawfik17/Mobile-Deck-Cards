export const UPDATE_DECKS = "UPDATE_DECKS";

export default function updateDecksAction(decks) {
  return {
    type: UPDATE_DECKS,
    decks,
  };
}
