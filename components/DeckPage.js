import React from "react";
import { Button, Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import handleRemoveDeckAction from "../store/actions/handleRemoveDeck";
import { StyleSheet } from "react-native";

function DeckPage(props) {
  const { id } = props.route.params;
  const deck = useSelector((state) => state[id]);
  const dispatch = useDispatch();
  const disabled = deck.questions.length < 1;

  function handleDelete() {
    dispatch(handleRemoveDeckAction(deck.id));
    props.navigation.navigate("Decks");
  }

  function handleAddCard() {
    props.navigation.navigate("New Card", { deck });
  }

  function handleStartQuiz() {
    props.navigation.navigate("Quiz", { id: deck.id });
  }

  return (
    <View style={styles.deck}>
      <Text style={styles.title}>{deck.title}</Text>
      <Text style={styles.count}>{deck.questions.length} Cards</Text>
      <TouchableOpacity style={styles.btn} onPress={handleAddCard}>
        <Text style={styles.btnText}>Add Card</Text>
      </TouchableOpacity>
      <TouchableOpacity
        disabled={disabled}
        style={[styles.btn, disabled ? styles.disabled : ""]}
        onPress={handleStartQuiz}
      >
        <Text style={[styles.btnText, disabled ? styles.disabled : ""]}>
          Start Quiz
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.btn, styles.deleteBtn]}
        onPress={handleDelete}
      >
        <Text style={[styles.btnText, styles.deleteBtnText]}>Delete Deck</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  deck: {
    display: "flex",
    alignItems: "center",
    margin: 30,

    borderWidth: 1,
    borderRadius: 10,
    padding: 40,
    backgroundColor: "#fff",
  },
  title: { fontSize: 40, marginBottom: 17 },
  count: { fontSize: 22, color: "#757575", marginBottom: 30 },
  btn: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderWidth: 1,
    alignSelf: "stretch",
    borderRadius: 7,
    marginTop: 20,
  },
  btnText: {
    fontSize: 20,
    textAlign: "center",
  },
  deleteBtn: {
    marginTop: 50,
    borderWidth: 0,
  },
  deleteBtnText: {
    color: "#f00",
  },
  disabled: {
    textDecorationLine: "line-through",
    color: "#757575",
    borderColor: "#757575",
  },
});

export default DeckPage;
