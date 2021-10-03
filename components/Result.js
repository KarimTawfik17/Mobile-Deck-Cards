import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

function Result({ restart, navigation, answered, all }) {
  const percentage = ((answered / all) * 100).toFixed(2);
  return (
    <View style={styles.container}>
      <Text style={[styles.title, { flex: 2 }]}>Your Score is : </Text>
      <Text style={[styles.title, { flex: 3, fontSize: 45 }]}>
        {percentage} %
      </Text>
      <View style={styles.btnContainer}>
        <TouchableOpacity onPress={restart}>
          <Text style={styles.home}>Restart Quiz</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.home}>Back to Deck</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: { fontSize: 30 },
  container: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    margin: 30,

    borderWidth: 1,
    borderRadius: 10,
    padding: 40,
    backgroundColor: "#fff",
  },
  btnContainer: {
    // flexDirection: "row",
    flex: 2,
    justifyContent: "space-around",
  },
  home: { color: "#2196f3", fontSize: 22 },
});

export default Result;
