import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Platform, StatusBar, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createStackNavigator } from '@react-navigation/stack';

import BottomTab from './components/BottomTab';
import NewVaultScreen from './screens/NewVaultScreen';
import COLORS from './constants/color';
import { VaultProvider } from './context/VaultContext';


const Stack = createStackNavigator();

const App = () => {
  return (
    <VaultProvider>
      <SafeAreaView style={styles.container}>
        {Platform.OS !== 'web' && <StatusBar hidden={true} />}
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Main" component={BottomTab} />
            <Stack.Screen name="NewVaultScreen" component={NewVaultScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </VaultProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.backgroundDark,
  },
});

export default App;

