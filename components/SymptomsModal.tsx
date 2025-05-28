import React, { useEffect, useState } from "react";
import { Button, Image, Modal, StyleSheet, Text, View } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withDelay, withTiming } from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomSlider from "./CustomSlider";
import { ThemedText } from "./ThemedText";
import { ThemedView } from "./ThemedView";

interface SymptomsModalProps {
    visible: boolean;
    onClose: () => void;
}

export default function SymptomsModal({ visible, onClose }: SymptomsModalProps) {
    const [canContinueValue, setCanContinueValue] = useState(false);
    const [popoverVisible, setPopoverVisible] = useState(false);
    const popoverOffset = useSharedValue(300);

    useEffect(() => {
        setCanContinueValue(false);

        if (visible && !popoverVisible) {
            setPopoverVisible(true);
            return
        }

    }, [visible])


    useEffect(() => {
        if (popoverVisible) {
            popoverOffset.value = withDelay(350, withTiming(0, {duration: 400}))
        } else {
            popoverOffset.value = withTiming(300, {duration: 300})
        }
    }, [popoverVisible])

    const onContinueButtonPress = () => {
        setCanContinueValue(false);
        setPopoverVisible(false);
        setTimeout(() => {
            onClose();
        }, 350);
    }

    const popoverAnimatedStyle = useAnimatedStyle(() => ({
        height: "100%",
        width: "100%",
        position: "absolute",
        bottom: 0,
        transform: [{ translateY: popoverOffset.value }]
    }))


    return (
        <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
        onRequestClose={onClose}
        >
            <ThemedView style={{flex: 1}}>
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
                    <Animated.View style={popoverAnimatedStyle}>
                        <View style={styles.popover}>
                            <ThemedText style={styles.popoverText}>
                                On a scale from <Text style={{fontWeight: "bold"}}>1–10</Text>, how do you <Text style={{fontWeight: "bold"}}>feel today</Text>?
                            </ThemedText>
                            <View style={{}}>
                                <CustomSlider onValueChange={value => setCanContinueValue(true)} />
                            </View>
                            <Button
                                title="Continue"
                                color="white"
                                disabled={!canContinueValue}
                                onPress={onContinueButtonPress}
                            />
                        </View>
                    </Animated.View>
                </SafeAreaView>
            </ThemedView>
        </Modal>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        paddingTop: 36,
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
        height: "35%",
        position: "absolute",
        bottom: 0,
        padding: 32,
        paddingTop: 24,
        backgroundColor: "#726BC3",
        borderTopLeftRadius: 36,
        borderTopRightRadius: 36,
    },
    popoverText: {
        fontSize: 28,
        lineHeight: 36,
        marginBottom: 16,
    },
    continueButton: {
        color: "red",
    }
})