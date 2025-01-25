import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, Animated } from 'react-native';

interface CustomSwitchProps{
  onStateChange: (newState: boolean) => void;
}

const CustomSwitch: React.FC<CustomSwitchProps> = ({ onStateChange }) => {
  const [isEnabled, setIsEnabled] = useState(true);
  const thumbPosition = new Animated.Value(isEnabled ? 1 : 0);

  const toggleSwitch = () => {
    Animated.timing(thumbPosition, {
      toValue: isEnabled ? 0 : 1,
      duration: 200,
      useNativeDriver: false,
    }).start();
    setIsEnabled(!isEnabled);
    onStateChange(!isEnabled);
  };

  return (
    <TouchableOpacity
      onPress={toggleSwitch}
      activeOpacity={1}
      style={[
        styles.switchContainer,
        { backgroundColor: isEnabled ? '#5ABE46' : '#999999' },
      ]}
    >
      <Animated.View
        style={[
          styles.thumb,
          {
            transform: [
              {
                translateX: thumbPosition.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 20],
                }),
              },
            ],
          },
        ]}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  switchContainer: {
    width: 40,
    height: 20,
    borderRadius: 15,
    padding: 2,
    justifyContent: 'center',
  },
  thumb: {
    width: 20,
    height: 20,
    borderRadius: 13,
    backgroundColor: '#FFFFFF',
    position: 'absolute',
  },
});

export default CustomSwitch;
