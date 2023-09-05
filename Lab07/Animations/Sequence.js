import React, { useRef } from "react";
import { Animated, Text, View, StyleSheet, Button, Easing } from "react-native";

const SequenceAnimation = (props) => {
    const OpacityAnimation = useRef(new Animated.Value(0)).current;
    const SpinAnimation = useRef(new Animated.Value(1)).current;
    // create sequence animation config

    const spin = SpinAnimation.interpolate({
        inputRange: [1, 2, 3],
        outputRange: ["0deg", "360deg","0deg"],
    });

    const opacity = OpacityAnimation.interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: [1, 0, 1],
      });

    const animate = () => {
        console.log("animate... Sequence");
        Animated.sequence([
            Animated.timing(OpacityAnimation, {
                toValue: 1,
                duration: 3000,
                easing: Easing.linear,
                useNativeDriver: true,
            }),
            Animated.timing(SpinAnimation, {
                toValue: 3,
                duration: 5000,
                easing: Easing.linear,
                useNativeDriver: true,
            }),
        ]).start(() => {
            OpacityAnimation.setValue(0);
            SpinAnimation.setValue(1);
        });
    };
    return (
        <View style={styles.container}>
            <Animated.Image style={{ width: 180, height: 150, opacity: opacity, transform: [{rotateZ: spin}] }}
                source={require("../assets/IT_Logo.png")} />
            <View style={styles.buttonContainer}>
                <Button title="RUN Sequence" onPress={() => animate()} />
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
export default SequenceAnimation;