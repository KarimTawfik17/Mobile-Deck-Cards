import { Button, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import handleAddQuestionAction from "../store/actions/handleAddQuestion";

function AddCard(props) {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
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
    // props.navigation.navigate("Deck", { deck: props.route.params.deck });
  }

  return (
    <View>
      <Text>Add New Card</Text>
      <Text> Question : </Text>
      <TextInput
        value={question}
        onChangeText={setQuestion}
        style={{ backgroundColor: "#fff" }}
      />
      <Text> Answer : </Text>
      <TextInput
        value={answer}
        onChangeText={setAnswer}
        style={{ backgroundColor: "#fff" }}
      />
      <Button
        title="Submit"
        onPress={submitHandler}
        disabled={question.trim() === "" || answer.trim() === ""}
      />
      <Text>{}</Text>
    </View>
  );
}

export default AddCard;
