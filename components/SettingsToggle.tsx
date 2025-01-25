import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import CustomSwitch from './CustomSwitch';
import Separator from './Separator';

interface SettingsToggleProps {
    title: string,
    isEnabled: boolean,
    hasSeparator: boolean,
    onStateChange: (newState: boolean) => void;
}

const SettingsToggle: React.FC<SettingsToggleProps> = ({title, hasSeparator, onStateChange}) => {
    const handleStateChange = (newState: boolean) => {
        onStateChange(newState);
    };

  return (
    <>
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.textStyle}>{title}</Text>
            </View>
            <View style={styles.buttonContainer}>
                <CustomSwitch 
                onStateChange={handleStateChange}
                />
            </View>
        </View>
        {hasSeparator && <Separator />}
    </>
  );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 35,
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    textContainer: {
        width: '80%',
        height: '100%',
        justifyContent: 'center',
    },
    buttonContainer: {
        width: '20%',
        height: '100%',
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
    textStyle: {
        color: 'white',
        fontWeight: '100',
        fontSize: 14,
    }
});

export default SettingsToggle;
