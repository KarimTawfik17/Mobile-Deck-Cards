import React, { useState } from "react";
import { TouchableOpacity, Text, TextInput, ScrollView } from "react-native";
import { useDispatch } from "react-redux";
import handleAddDeckAction from "../store/actions/handleAddDeck";
import { StyleSheet } from "react-native";
import { createDeck } from "../utils/asyncStorage";

function NewDeck({ navigation }) {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const disabled = input.trim() === "";

  function submitHandler() {
    const newDeck = createDeck(input);
    // console.log({ [newDeck.id]: newDeck });
    dispatch(
      handleAddDeckAction(newDeck, () => {
        setInput("");
        navigation.navigate("Deck", { id: newDeck.id });
      })
    );
  }
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>What is the Deck's Title ? </Text>
      <TextInput style={styles.input} value={input} onChangeText={setInput} />
      <TouchableOpacity onPress={submitHandler} disabled={disabled}>
        <Text style={[disabled ? styles.disabled : styles.enabled, styles.btn]}>
          Submit
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    marginTop: 20,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: { fontSize: 30, marginBottom: 10 },
  input: {
    alignSelf: "stretch",
    marginTop: 20,
    marginBottom: 40,
    borderRadius: 7,
    fontSize: 23,
    paddingLeft: 10,
    height: 50,
    borderColor: "#000",
    borderWidth: 2,
  },
  btn: { fontSize: 25, paddingVertical: 15, paddingHorizontal: 30 },
  disabled: {
    textDecorationLine: "line-through",
    color: "#757575",
  },
  enabled: {
    borderWidth: 1,

    borderRadius: 7,
  },
});

export default NewDeck;
