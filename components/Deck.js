import React from "react";
import { Text, TouchableOpacity } from "react-native";

function Deck({ deck, navigation }) {
  // console.log("rest are : ", rest);
  return (
    <TouchableOpacity
      style={{ margin: 30 }}
      onPress={() => navigation.navigate("Deck", { deck })}
    >
      <Text>DeckTitle : {deck.title}</Text>
      <Text>No. Cards : {deck.questions.length}</Text>
    </TouchableOpacity>
  );
}

export default Deck;
