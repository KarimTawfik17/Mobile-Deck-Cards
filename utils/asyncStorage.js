import AsyncStorage from "@react-native-async-storage/async-storage";
import { generateID } from "./helpers";

const DECKS_KEY = "DECKS_KEY";

export function getDecksAsync() {
  return AsyncStorage.getItem(DECKS_KEY).then((res) => {
    return res ? JSON.parse(res) : {};
  });
}

export function addDeckAsync(newDeck) {
  return getDecksAsync()
    .then((decks) => {
      return {
        ...decks,
        [newDeck.id]: newDeck,
      };
    })
    .then((newDecks) => {
      AsyncStorage.setItem(DECKS_KEY, JSON.stringify(newDecks));
      return newDecks;
    });
}

export function createDeck(title) {
  const id = generateID();
  return { id, title, timeStamp: new Date().getTime(), questions: [] };
}

export function removeDeckAsync(id) {
  return getDecksAsync()
    .then((decks) => {
      delete decks[id];
      return decks;
    })
    .then((newDecks) => {
      AsyncStorage.setItem(DECKS_KEY, JSON.stringify(newDecks));
      return newDecks;
    });
}

export function addQuestionAsync(id, question) {
  return getDecksAsync()
    .then((decks) => {
      return {
        ...decks,
        [id]: { ...decks[id], questions: [question, ...decks[id].questions] },
      };
    })
    .then((newDecks) => {
      AsyncStorage.setItem(DECKS_KEY, JSON.stringify(newDecks));
      return newDecks;
    });
}
