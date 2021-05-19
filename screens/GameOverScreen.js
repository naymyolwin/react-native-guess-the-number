import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>Game Over</Text>
      <Text>{props.roundsNumber}</Text>
      <Text>Number was : {props.userNumber}</Text>
      <Button title="New Game" onPress={props.onRestart} />
    </View>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
