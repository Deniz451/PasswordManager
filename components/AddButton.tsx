import React from 'react';
import { Image, StyleSheet, Pressable } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import COLORS from '../constants/color';

// Define the navigation type based on your stack
type RootStackParamList = {
  Main: undefined;
  NewVaultScreen: undefined;
};

type NavigationProp = StackNavigationProp<RootStackParamList, 'NewVaultScreen'>;

const AddButton = () => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <Pressable 
      onPress={() => navigation.navigate('NewVaultScreen')} 
      style={styles.button}
    >
      <Image
        source={require('../assets/icons/plus.png')}
        style={styles.image}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    top: -5,
    alignSelf: 'center',
    backgroundColor: COLORS.addButtonBg,
    zIndex: 1,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    height: 70,
    width: 70,
  },
  image: {
    height: 35,
    width: 35,
  },
});

export default AddButton;

