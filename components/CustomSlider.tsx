import { Slider } from "@react-native-assets/slider";
import React from "react";
import { Image, StyleProp, ViewStyle } from "react-native";

export default function CustomSlider({style}: { style?: StyleProp<ViewStyle>}) {
    return (
        <>
            <Slider
                style={{ width: "100%", height: 80 }}
                minimumValue={0}
                maximumValue={100}
                minimumTrackTintColor="#fff"
                maximumTrackTintColor="#7C7AC8"
                step={1}
                value={50}
                trackStyle={{ borderRadius: 16 }}
                trackHeight={60}
                thumbSize={100}
                thumbStyle={{ backgroundColor: "transparent" }}
                CustomThumb={({ value }) => (
                    <Image
                        source={require("@/assets/images/slider-thumb-image.png")}
                        style={{ transform: [{scale: 0.8}] }}
                    />
                )}
            />
        </>
    )
}