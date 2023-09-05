import React, { useRef } from "react";
import { Animated, Text, View, StyleSheet, Button } from "react-native";

const SpringAnimation = (props) => {
    const springAnimation = useRef(new Animated.Value(0)).current;

    const spin = springAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: ["0deg", "360deg"],
    });

    const animate = () => {
        console.log("animate... Spring");
        Animated.spring(springAnimation, {
            toValue: 1,
            friction: 1,
            useNativeDriver: true,
        }).start(() => {
            springAnimation.setValue(0.2);
        });
    };
    return (
        <View style={styles.container}>
            <Animated.Image style={{ width: 180, height: 150, transform: [{ scale: springAnimation }] }}
                source={require("../assets/IT_Logo.png")} />
            <View style={styles.buttonContainer}>
                <Button title="Spring" onPress={() => animate()} />
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 40,
        width: "100%"
    }
});
export default SpringAnimation;