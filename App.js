import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider, useDispatch } from "react-redux";
import AllDecks from "./components/AllDecks";
import handleAddDeckAction from "./store/actions/handleAddDeck";
import { addDeckAsync, removeDeckAsync } from "./utils/asyncStorage";
import store from "./store/";
import handleReceiveDecksAction from "./store/actions/handleReceiveDecks";
import NewDeck from "./components/NewDeck";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DeckPage from "./components/DeckPage";

const Tabs = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tabs.Navigator>
          <Tabs.Screen name="Decks" component={AllDecks} />
          <Tabs.Screen name="Add Deck" component={NewDeck} />
        </Tabs.Navigator>
      </NavigationContainer>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Decks" component={AllDecks} />
          <Stack.Screen name="Deck" component={DeckPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
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

// import addDeckAction from "./store/actions/addDeck";
// import addQusetionAction from "./store/actions/addQuestion";
// import removeDeckAction from "./store/actions/removeDeck";

// store.dispatch(
//   addDeckAction({
//     id: "r1",
//     title: "React",
//     questions: [
//       {
//         question: "What is React?",
//         answer: "A library for managing user interfaces",
//       },
//       {
//         question: "Where do you make Ajax requests in React?",
//         answer: "The componentDidMount lifecycle event",
//       },
//     ],
//   })
// );

// store.dispatch(
//   addDeckAction({
//     id: "r2",
//     title: "JavaScript",
//     questions: [
//       {
//         question: "What is a closure?",
//         answer:
//           "The combination of a function and the lexical environment within which that function was declared.",
//       },
//     ],
//   })
// );

// store.dispatch(
//   addQusetionAction("r2", { question: "a yasta l mawdo3", answer: "mlksh feh" })
// );
// store.dispatch(removeDeckAction("r2"));

// addDeckAsync("First Deck").then((x) => console.log("res,", x));
// removeDeckAsync("f5134g4ieao8cs0z9q6edg").then((x) => console.log("res,", x));

// store.dispatch(handleAddDeckAction("hiiii"));
