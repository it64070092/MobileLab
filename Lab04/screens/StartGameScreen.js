import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const StartGameScreen = (props) => {
  const [rndnum, setrndnum] = useState(0)
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Welcome to My Game</Text>
      <Button
        title="START GAME"
        onPress={() => {
          // ...เพิ่มโค้ด...
          const rnd = Math.floor(Math.random() * 100)
          setrndnum(rnd)
          console.log(rnd)
          props.onStartGame(rnd);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
});

export default StartGameScreen;
