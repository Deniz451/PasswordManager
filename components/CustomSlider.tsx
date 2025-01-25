import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import COLORS from '../constants/color';
import Animated from 'react-native-reanimated';
import { PanGestureHandler } from 'react-native-gesture-handler';

interface CustomSliderProps {
    minVal: number;
    maxVal: number;
    onValueChange: (value: number) => void;
}

const CustomSlider: React.FC<CustomSliderProps> = ({ minVal, maxVal, onValueChange }) => {
    const [thumbPosition, setThumbPosition] = useState(0); // Position of the thumb in pixels
    const [currentValue, setCurrentValue] = useState(minVal); // Value based on thumb position

    // Handler for the pan gesture (dragging the thumb)
    const handleGesture = (event: any) => {
        const { translationX } = event.nativeEvent;

        // Limit the thumb position to within the slider track range
        const newPosition = Math.min(Math.max(translationX, 0), 268); // Assume 300px max width for the slider
        setThumbPosition(newPosition);

        // Calculate the percentage based on the thumb position
        const newValue = minVal + (newPosition / 268) * (maxVal - minVal);
        setCurrentValue(newValue);
        onValueChange(newValue);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{minVal}</Text>
            <View style={styles.sliderContainer}>
                <View style={styles.sliderBg}></View>
                <PanGestureHandler onGestureEvent={handleGesture}>
                    <Animated.View
                        style={[
                            styles.thumb,
                            { transform: [{ translateX: thumbPosition }] },
                        ]}
                    />
                </PanGestureHandler>
                <View style={[styles.activeTrack, { width: `${(thumbPosition / 286) * 100}%` }]} />
            </View>
            <Text style={styles.text}>{maxVal}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: 5,
    },
    sliderContainer: {
        width: '90%',
        height: 14,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },
    sliderBg: {
        width: '100%',
        height: 6,
        backgroundColor: "white",
        borderRadius: 3,
    },
    thumb: {
        position: 'absolute',
        top: -4,
        width: 20,
        height: 20,
        backgroundColor: 'white', // You can change the thumb color
        borderRadius: 12,
        left: 0,
        borderWidth: 1,
        borderColor: '#5ABE46',
    },
    activeTrack: {
        position: 'absolute',
        top: 4,
        left: 0,
        height: 6,
        backgroundColor: '#5ABE46', // You can change the active track color
        borderRadius: 2,
    },
    text: {
        color: COLORS.white,
        fontSize: 12,
    },
    valueText: {
        color: COLORS.white,
        fontSize: 16,
        marginTop: 10,
    },
});

export default CustomSlider;
