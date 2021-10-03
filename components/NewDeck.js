import React, { useState } from "react";
import { Button, Text, TextInput, TextInputBase, View } from "react-native";
import { useDispatch } from "react-redux";
import handleAddDeckAction from "../store/actions/handleAddDeck";

function NewDeck({ navigation }) {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  function submitHandler() {
    dispatch(handleAddDeckAction(input));
    setInput("");
    navigation.navigate("Home");
  }
  return (
    <View>
      <Text>What is the Deck's Title ? </Text>
      <TextInput
        style={{ backgroundColor: "#fff" }}
        value={input}
        onChangeText={setInput}
      />
      <Button
        title="Submit"
        onPress={submitHandler}
        disabled={input.trim() === ""}
      />
    </View>
  );
}

export default NewDeck;
