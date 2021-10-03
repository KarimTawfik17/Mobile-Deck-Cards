import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";

function Deck({ deck, navigation }) {
  return (
    <TouchableOpacity
      style={styles.deck}
      onPress={() => navigation.navigate("Deck", { id: deck.id })}
    >
      <Text style={styles.title}>{deck.title}</Text>
      <Text style={styles.count}>{deck.questions.length} cards</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  deck: {
    display: "flex",
    alignItems: "center",
    marginTop: 20,
    borderWidth: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: { fontSize: 30, marginBottom: 10 },
  count: { fontSize: 15, color: "#757575" },
});

export default Deck;
