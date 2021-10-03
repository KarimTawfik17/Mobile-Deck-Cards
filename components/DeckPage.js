import React from "react";
import { Button, Text, View } from "react-native";
import { useDispatch } from "react-redux";
import handleRemoveDeckAction from "../store/actions/handleRemoveDeck";

function DeckPage(props) {
  const { deck } = props.route.params;
  const dispatch = useDispatch();

  function handleDelete() {
    dispatch(
      handleRemoveDeckAction(deck.id, () => props.navigation.navigate("Decks"))
    );
  }

  function handleAddCard() {
    props.navigation.navigate("NewCard", { deck });
  }

  function handleStartQuiz() {
    props.navigation.navigate("Quiz", { id: deck.id });
  }

  console.log("DECK PAGE RERAN WITH FOLLOWING PROPS :", props);

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
