import React from "react";
import { Text, TouchableOpacity } from "react-native";

function Deck({ id }) {
  return (
    <TouchableOpacity>
      <Text>DeckTitle</Text>
      <Text>No. Cards</Text>
    </TouchableOpacity>
  );
}

export default Deck;
