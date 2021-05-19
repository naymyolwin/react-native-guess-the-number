import React from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>Game Over</Text>
      <View style={styles.imageContainer}>
        {/* <Image style={styles.image} source={require("../assets/success.png")} /> */}
        <Image
          fadeDuration={1000}
          style={styles.image}
          source={{
            uri: "https://cdn.mos.cms.futurecdn.net/ntFmJUZ8tw3ULD3tkBaAtf-1024-80.jpg.webp",
          }}
        />
      </View>
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
  image: {
    width: "100%",
    height: "100%",

    resizeMode: "cover",
  },

  imageContainer: {
    borderRadius: 150,
    borderWidth: 2,
    width: 300,
    height: 300,
    overflow: "hidden",
    margin: 30,
  },
});
