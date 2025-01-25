import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import COLORS from '../constants/color';

interface InputCardProps {
  width: number;
  title: string;
  hintText?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  isValid: boolean;
  buttonPressed: boolean;
}

const InputCard: React.FC<InputCardProps> = ({ width, title, hintText, value, onChangeText, isValid, buttonPressed }) => {
  const borderColor = buttonPressed && !isValid ? COLORS.red : COLORS.lightgray;
  const titleColor = buttonPressed && !isValid ? COLORS.red : COLORS.lightgray;

  const dynamicContainerStyle = {
    ...styles.container,
    width: width || 200,
    borderColor: borderColor,
  };

  const dynamicTitleStyle = {
    ...styles.title,
    color: titleColor,
  }

  const calculateWidth = (type: string): number => {
    if (type === 'Vault Name') return 80;
    if (type === 'Username') return 72;
    if (type === 'Email') return 45;
    if (type === 'Password') return 72;
    if (type === 'Icon') return 35;
    return 0;
  };

  const dynamicTitleContainerStyle = {
    ...styles.titleContainer,
    width: calculateWidth(title),
  }

  return (
    <View style={dynamicContainerStyle}>
      <View style={dynamicTitleContainerStyle}>
        <Text style={dynamicTitleStyle}>
          {title}
        </Text>
      </View>
      <TextInput
        style={styles.input}
        value={value}
        placeholder={hintText}
        onChangeText={onChangeText}
        secureTextEntry={title === 'Password'}
        placeholderTextColor={COLORS.lightgray}
        selectionColor={COLORS.white}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 45,
    borderRadius: 5,
    borderColor: COLORS.lightgray,
    borderWidth: 1,
    justifyContent: 'center',
  },
  titleContainer: {
    backgroundColor: COLORS.backgroundLight,
    height: 18,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: -10,
    left: 10,
  },
  title: {
    color: COLORS.lightgray,
    fontSize: 12,
  },
  hintText: {
    fontSize: 15,
    color: COLORS.darkgray,
    paddingLeft: 14,
  },
  input: {
    fontSize: 15,
    color: COLORS.white,
    paddingLeft: 14,
  },
});

export default InputCard;
