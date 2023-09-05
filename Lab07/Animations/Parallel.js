import React, { useRef } from "react";
import { Animated, Text, View, StyleSheet, Button, Easing } from "react-native";

const ParallelAnimation = (props) => {
    const SpringAnimation = useRef(new Animated.Value(0.5)).current;
    const TextMoving = useRef(new Animated.Value(0)).current;


    const MovingText = TextMoving.interpolate({
        inputRange: [0, 1, 2, 3],
        outputRange: [0, 100, -100, 0],
    });

    const animate = () => {
        console.log("animate... Parallel");
        Animated.parallel([
            Animated.spring(SpringAnimation, {
                toValue: 1,
                friction: 1,
                useNativeDriver: true,
            }),
            Animated.timing(TextMoving, {
                toValue: 3,
                duration: 3000,
                easing: Easing.bounce,
                useNativeDriver: true,
            }),
        ]).start(() => {
            SpringAnimation.setValue(0.5);
            TextMoving.setValue(0);
        });
    };
    return (
        <View style={styles.container}>
            <Animated.Image style={{ width: 180, height: 150, transform: [{ scale: SpringAnimation }] }}
                source={require("../assets/IT_Logo.png")} />
            <Animated.View
                style={[styles.textContainer, { transform: [{ translateX: MovingText }] }]}
            >
                <Text style={{ color: "gold", fontSize: 24, fontWeight: "bold" }}>Welcome to Faculty of IT!</Text>
            </Animated.View>
            <View style={styles.buttonContainer}>
                <Button title="RUN Parallel" onPress={() => animate()} />
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
    textContainer: {
        margin: 30,
        textAlign: 'center',
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 40,
        width: "100%"
    }
});
export default ParallelAnimation;