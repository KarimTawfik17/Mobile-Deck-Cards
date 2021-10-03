import React, { useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

function Question({ question, answer }) {
  const [answerVisible, setAnswerVisible] = useState(false);
  function toggleAnswerVisible() {
    setAnswerVisible((visible) => !visible);
  }
  return (
    <View style={styles.container}>
      {!answerVisible && <Text style={styles.question}>{question} ? </Text>}
      {answerVisible && <Text style={styles.question}>{answer}</Text>}

      <TouchableOpacity onPress={toggleAnswerVisible}>
        <Text style={styles.toggle}>
          Show {answerVisible ? "Question" : "Answer"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  question: { fontSize: 33 },
  container: {
    display: "flex",
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    marginVertical: 30,
    padding: 20,
    backgroundColor: "#fff",
  },
  toggle: {
    color: "#2196f3",
    fontSize: 22,
  },
});

export default Question;
