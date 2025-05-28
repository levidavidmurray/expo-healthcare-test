import { Slider } from "@react-native-assets/slider";
import { StyleProp, ViewStyle } from "react-native";

export default function CustomSlider({style}: { style?: StyleProp<ViewStyle>}) {
    return (
        <Slider
            style={{ width: 300, height: 40 }}
            minimumValue={0}
            maximumValue={100}
            minimumTrackTintColor="#3b82f6"
            maximumTrackTintColor="#d1d5db"
            thumbTintColor="#2563eb"
            step={1}
            value={50}
        />
    )
}