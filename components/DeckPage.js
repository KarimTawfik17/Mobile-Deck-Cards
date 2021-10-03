import React from "react";
import { Button, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import handleRemoveDeckAction from "../store/actions/handleRemoveDeck";

function DeckPage(props) {
  const { id } = props.route.params;
  const deck = useSelector((state) => state[id]);
  const dispatch = useDispatch();

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
    <View style={{ padding: 50 }}>
      <Text>DeckTitle : {deck.title}</Text>
      <Text>No. Cards : {deck.questions.length}</Text>
      <Button title="Add Card" onPress={handleAddCard} />
      <Button title="Start Quiz" onPress={handleStartQuiz} />
      <Button title="Delete Deck" onPress={handleDelete} />
    </View>
  );
}

export default DeckPage;
