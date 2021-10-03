import React, { useState } from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { useSelector } from "react-redux";
import Question from "./Question";
import { StyleSheet } from "react-native";
import Result from "./Result";
function Quiz({
  navigation,
  route: {
    params: { id },
  },
}) {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);

  const data = useSelector((state) => state[id].questions);
  const currentQuestion = data[index];

  function handleCorrect() {
    setScore((score) => score + 1);
    setIndex((index) => index + 1);
  }

  function handleIncorrect() {
    setIndex((index) => index + 1);
  }

  if (index >= data.length) {
    return (
      <Result navigation={navigation} answered={score} all={data.length} />
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.progress}>
        {index + 1} / {data.length} Questions
      </Text>
      <Question {...currentQuestion} />
      <View style={styles.btnContainer}>
        <TouchableOpacity
          style={{ backgroundColor: "#008000", borderRadius: 10 }}
          onPress={handleCorrect}
        >
          <Text style={styles.btn}>Correct</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ backgroundColor: "#d4271b", borderRadius: 10 }}
          onPress={handleIncorrect}
        >
          <Text style={styles.btn}>Incorrect</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  container: {
    display: "flex",
    flex: 1,
    justifyContent: "space-between",
    marginVertical: 30,
    padding: 20,
    backgroundColor: "#fff",
  },
  btn: {
    fontSize: 27,
    paddingVertical: 15,
    paddingHorizontal: 30,
    color: "#fff",
  },
  progress: {
    color: "#757575",
    alignSelf: "flex-end",
  },
});

export default Quiz;
