import { Slider } from "@react-native-assets/slider";
import React from "react";
import { Image, StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native";

interface CustomSliderProps {
    style?: StyleProp<ViewStyle>;
    onValueChange?: (value: number) => void;
}

export default function CustomSlider({style, onValueChange}: CustomSliderProps) {
    const STEP_COUNT = 15;
    const STEP_MARKER_SKIP_COUNT = 3

    return (
        <>
            <Slider
                style={{ width: "100%", height: 80 }}
                minimumValue={0}
                maximumValue={STEP_COUNT}
                minimumTrackTintColor="#fff"
                maximumTrackTintColor="#7C7AC8"
                step={1}
                value={0}
                trackStyle={{ borderRadius: 16 }}
                trackHeight={60}
                thumbSize={100}
                thumbStyle={{ backgroundColor: "transparent" }}
                onValueChange={onValueChange}
                CustomThumb={({ value }) => (
                    <Image
                        source={require("@/assets/images/slider-thumb-image.png")}
                        style={styles.customThumb}
                    />
                )}
                StepMarker={(props) => {
                    // Skip first and last n markers to leave room for emojis
                    if (props.index < STEP_MARKER_SKIP_COUNT || props.index > STEP_COUNT - STEP_MARKER_SKIP_COUNT) {
                        return null;
                    }

                    return (
                        <View style={styles.stepMarker}></View>
                    )
                }}
            >
            </Slider>
            <View style={styles.emojiContainerParent}>
                <View style={styles.emojiContainer}>
                    <Text style={styles.emoji}>😩</Text>
                    <Text style={styles.emoji}>😍</Text>
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    stepMarker: {
        width: 1,
        height: 40,
        backgroundColor: "#9CB0E3",
    },
    customThumb: {
        transform: [{scale: 0.8}],
        filter: ""
    },
    emojiContainerParent: {
        position: "absolute",
        width: "100%",
        height: "100%",
    },
    emojiContainer: {
        width: "95%",
        height: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "auto"
    },
    emoji: {
        fontSize: 48,
    },
});