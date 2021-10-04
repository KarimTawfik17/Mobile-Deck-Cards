import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DecksList from "./DecksList";
import NewDeck from "./NewDeck";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const DecksTabs = createBottomTabNavigator();

function Decks() {
  return (
    <DecksTabs.Navigator screenOptions={{ headerShown: false }}>
      <DecksTabs.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="cards-outline"
              size={30}
              color={focused ? "white" : "grey"}
            />
          ),
          tabBarLabelStyle: {
            fontSize: 15,
          },
          tabBarStyle: {
            height: 80,
            backgroundColor: "#000",
          },
          tabBarActiveTintColor: "#fff",
        }}
        name="All Decks"
        component={DecksList}
      />
      <DecksTabs.Screen
        name="Add Deck"
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="plus-box-outline"
              size={30}
              color={focused ? "white" : "grey"}
            />
          ),
          tabBarLabelStyle: {
            fontSize: 15,
          },
          tabBarStyle: {
            height: 80,
            backgroundColor: "#000",
          },
          tabBarActiveTintColor: "#fff",
        }}
        component={NewDeck}
      />
    </DecksTabs.Navigator>
  );
}

export default Decks;
