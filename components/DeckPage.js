import React from "react";
import { Button, Text, View } from "react-native";
import { useDispatch } from "react-redux";
import handleRemoveDeckAction from "../store/actions/handleRemoveDeck";

function DeckPage(props) {
  const { deck } = props.route.params;
  const dispatch = useDispatch();

  function handleDelete() {
    dispatch(handleRemoveDeckAction(deck.id));
    props.navigation.navigate("Decks");
  }

  return (
    <View style={{ padding: 50 }}>
      <Text>DeckTitle : {deck.title}</Text>
      <Text>No. Cards : {deck.questions.length}</Text>
      <Button title="Add Card" />
      <Button title="Start Quiz" />
      <Button title="Delete Deck" onPress={handleDelete} />
    </View>
  );
}

export default DeckPage;
