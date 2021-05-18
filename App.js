import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Headers from "./components/Headers";
import StartGameScreen from "./screens/StartGameScreen";

const App = () => {
  return (
    <View style={styles.screen}>
      <Headers title="Guess the Number" />
      <StartGameScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default App;
