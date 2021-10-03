import {
  TouchableOpacity,
  Text,
  TextInput,
  View,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import handleAddQuestionAction from "../store/actions/handleAddQuestion";
import { StyleSheet } from "react-native";

function AddCard(props) {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const disabled = question.trim() === "" || answer.trim() === "";
  const dispatch = useDispatch();

  function submitHandler() {
    dispatch(
      handleAddQuestionAction(
        props.route.params.deck.id,
        {
          question,
          answer,
        },
        () => props.navigation.goBack()
      )
    );
  }

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <Text style={styles.title}> Question : </Text>
      <TextInput
        style={styles.input}
        value={question}
        onChangeText={setQuestion}
      />
      <Text style={styles.title}> Answer : </Text>
      <TextInput style={styles.input} value={answer} onChangeText={setAnswer} />
      <TouchableOpacity onPress={submitHandler} disabled={disabled}>
        <Text style={[disabled ? styles.disabled : styles.enabled, styles.btn]}>
          Submit
        </Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
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
  title: { alignSelf: "flex-start", fontSize: 30, marginBottom: 10 },
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

export default AddCard;
