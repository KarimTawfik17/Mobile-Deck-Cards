import React, { useState } from "react";
import { View, Button, Text } from "react-native";

function Question({ question, answer, current, limit }) {
  const [answerVisible, setAnswerVisible] = useState(false);
  function toggleAnswerVisible() {
    setAnswerVisible((visible) => !visible);
  }
  return (
    <View style={{ margin: 30 }}>
      <Text>
        No {current}/{limit}
      </Text>
      <Text>{question} ? </Text>
      {answerVisible && <Text>{answer}</Text>}

      <Button title="Show Answer" onPress={toggleAnswerVisible} />
    </View>
  );
}

export default Question;
