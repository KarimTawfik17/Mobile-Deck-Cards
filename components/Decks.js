import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DecksList from "./DecksList";
import NewDeck from "./NewDeck";

const DecksTabs = createBottomTabNavigator();

function Decks() {
  return (
    <DecksTabs.Navigator>
      <DecksTabs.Screen name="All Decks" component={DecksList} />
      <DecksTabs.Screen name="Add Deck" component={NewDeck} />
    </DecksTabs.Navigator>
  );
}

export default Decks;
