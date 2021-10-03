import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider, useDispatch } from "react-redux";
import store from "./store/";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DeckPage from "./components/DeckPage";
import AddCard from "./components/AddCard";
import Quiz from "./components/Quiz";
import Decks from "./components/Decks";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Decks" component={Decks} />
          <Stack.Screen name="Deck" component={DeckPage} />
          <Stack.Screen name="New Card" component={AddCard} />
          <Stack.Screen name="Quiz" component={Quiz} />
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
