import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Platform, StatusBar, StyleSheet } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import BottomTab from './components/BottomTab';
import COLORS from './constants/color';
import NewVaultScreen from './screens/NewVaultScreen';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  return (
      <SafeAreaView style={styles.container}>
        {Platform.OS !== 'web' && <StatusBar hidden={true} />}
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Main" component={BottomTab} />
            <Stack.Screen name="NewVaultScreen" component={NewVaultScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.backgroundDark,
  },
});

export default App;

