import React from "react";
import { Text, TouchableOpacity } from "react-native";

function Deck({ deck, navigation }) {
  return (
    <TouchableOpacity
      style={{ margin: 30 }}
      onPress={() => navigation.navigate("Deck", { id: deck.id })}
    >
      <Text>DeckTitle : {deck.title}</Text>
      <Text>No. Cards : {deck.questions.length}</Text>
    </TouchableOpacity>
  );
}

export default Deck;
