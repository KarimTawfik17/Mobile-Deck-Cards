import React from "react";
import { Text, TouchableOpacity } from "react-native";

function Deck({ title, questions }) {
  return (
    <TouchableOpacity style={{ margin: 30 }}>
      <Text>DeckTitle : {title}</Text>
      <Text>No. Cards : questions length</Text>
    </TouchableOpacity>
  );
}

export default Deck;
