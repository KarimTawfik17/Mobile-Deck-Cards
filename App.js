import React, { useEffect, useState } from "react";
import { StyleSheet, Platform } from "react-native";
import { Provider } from "react-redux";
import store from "./store/";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DeckPage from "./components/DeckPage";
import AddCard from "./components/AddCard";
import Quiz from "./components/Quiz";
import { Text } from "react-native";
import Decks from "./components/Decks";
import { setLocalNotification } from "./utils/asyncNotifications";

const Stack = createNativeStackNavigator();

export default function App() {
  const [status, setStatus] = useState();
  useEffect(() => {
    setLocalNotification().then(setStatus);
  });

  return (
    <Provider store={store}>
      <NavigationContainer>
        {status === "denied" && (
          <Text style={styles.alert}>⚠️ Please Enable Notifications ⚠️</Text>
        )}
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
  alert: {
    color: "#f00",
    textAlign: "center",
    paddingTop: Platform.OS === "ios" ? 40 : 20,
  },
});
