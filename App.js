import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AllDecks from "./components/AllDecks";

export default function App() {
  return (
    <View style={styles.container}>
      <AllDecks />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

import store from "./store/";
import addDeckAction from "./store/actions/addDeck";
import addQusetionAction from "./store/actions/addQuestion";
import removeDeckAction from "./store/actions/removeDeck";

store.dispatch(
  addDeckAction({
    id: "r1",
    title: "React",
    questions: [
      {
        question: "What is React?",
        answer: "A library for managing user interfaces",
      },
      {
        question: "Where do you make Ajax requests in React?",
        answer: "The componentDidMount lifecycle event",
      },
    ],
  })
);

store.dispatch(
  addDeckAction({
    id: "r2",
    title: "JavaScript",
    questions: [
      {
        question: "What is a closure?",
        answer:
          "The combination of a function and the lexical environment within which that function was declared.",
      },
    ],
  })
);

// store.dispatch(removeDeckAction("r2"));

store.dispatch(
  addQusetionAction("r2", { question: "a yasta l mawdo3", answer: "mlksh feh" })
);
