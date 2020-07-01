import React from "react";
import { StyleSheet, Text, Button } from "react-native";

import { LinearGradient } from "expo-linear-gradient";

export default function App() {
  const sayHello = () => {
    alert("hello guys");
  };
  return (
    <LinearGradient colors={["orange", "red"]} style={styles.container}>
      <Text style={{ fontSize: 30, fontWeight: "bold" }}>
        Hey electron app!
      </Text>
      <Button title="click me" onPress={sayHello} />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
