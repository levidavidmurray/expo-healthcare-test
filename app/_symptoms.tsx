import { Image, StyleSheet, View } from "react-native"

import CustomSlider from "@/components/CustomSlider"
import { ThemedText } from "@/components/ThemedText"
import { SafeAreaView } from "react-native-safe-area-context"

export default function SymptomsScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <ThemedText style={styles.headerText}>
                    Let's record your
                </ThemedText>
                <ThemedText style={{...styles.headerText, ...styles.headerTextSymptoms}}>Symptoms</ThemedText>
            </View>
            <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                <Image
                    source={require('@/assets/images/doctor.png')}
                    style={styles.doctorImage}
                />
            </View>
            <View style={styles.popover}>
                <View style={{}}>
                    <CustomSlider />
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        paddingTop: 24,
        alignItems: "center"
    },
    headerText: {
        fontSize: 48,
        lineHeight: 64,
    },
    headerTextSymptoms: {
        color: "#726BC3",
        fontWeight: "500",
    },
    doctorImage: {
        resizeMode: "center",
        position: "absolute",
        marginTop: 150,
        transform: [{ scale: 1.5 }],
    },
    popover: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        padding: 16,
        height: "25%",
        backgroundColor: "#726BC3",
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
    }
})