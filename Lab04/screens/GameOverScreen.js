import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

const GameOverScreen = (props) => {
  const { guessRounds } = props;
  const { correctNumber } = props;
  return (
    <View style={styles.screen}>
      <Text>The Game is Over!</Text>
      {/* ...เพิ่มโค้ด สรุปผลลัพธ์การเล่นเกม และมีปุ่มให้เริ่มเกมใหม่ได้... */
        <View>
          <Text>Number of rounds: {guessRounds}</Text>
          <Text>Correct Number was: {correctNumber}</Text>
        </View>
      }
      <Button
        title="NEW GAME"
        onPress={() => {
          // ...เพิ่มโค้ด...
          props.onRestart()
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default GameOverScreen;
