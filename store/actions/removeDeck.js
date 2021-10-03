export const REMOVE_DECK = "REMOVE_DECK";

export default function removeDeckAction(id) {
  return {
    type: REMOVE_DECK,
    id,
  };
}
