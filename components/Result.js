import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

function Result({ navigation, answered, all }) {
  const percentage = ((answered / all) * 100).toFixed(2);
  function goHome() {
    navigation.navigate("Decks");
  }
  return (
    <View style={styles.container}>
      <Text style={[styles.title, { flex: 2 }]}>Your Score is : </Text>
      <Text style={[styles.title, { flex: 3, fontSize: 45 }]}>
        {percentage} %
      </Text>
      <TouchableOpacity onPress={goHome}>
        <Text style={styles.home}>All Decks</Text>
      </TouchableOpacity>
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
  home: { color: "#2196f3", fontSize: 22 },
});

export default Result;
