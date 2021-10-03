import React, { useState } from "react";
import { Button, Text, View } from "react-native";
import { useSelector } from "react-redux";
import Question from "./Question";

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

  if (data.length === 0) {
    return <Text>There's no Cards in this Deck</Text>;
  }

  if (index >= data.length) {
    return (
      <View>
        <Text>Your Score is : </Text>
        <Text>
          {score} out of {data.length}
        </Text>
      </View>
    );
  }

  return (
    <View>
      <Text>Quiz</Text>
      <Question {...currentQuestion} current={index + 1} limit={data.length} />
      <Button
        title="Correct"
        style={{ backgroundColor: "#0f0" }}
        onPress={handleCorrect}
      />
      <Button
        title="Incorrect"
        style={{ backgroundColor: "#f00" }}
        onPress={handleIncorrect}
      />
    </View>
  );
}

export default Quiz;
