import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import COLORS from '../constants/color';

const BackButton = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.backIconContainer}
      onPress={() => navigation.goBack()} // Navigate to the previous screen
    >
      <Image
        source={require('../assets/icons/back.png')}
        style={styles.backIcon}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    backIconContainer: {
        width: 50,
        height: 50,
        borderRadius: 10,
        backgroundColor: COLORS.backgroundLight,
        position: 'absolute',
        left: 0,
        alignItems: 'center',
        justifyContent: 'center',
      },
      backIcon: {
        width: 25,
        height: 25,
        marginRight: 3,
      },
});

export default BackButton;
