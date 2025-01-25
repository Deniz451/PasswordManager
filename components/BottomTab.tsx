import {  createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { StyleSheet, Image, View, Pressable } from 'react-native';
import HomeScreen from '../screens/HomeScreen'
import VaultsScreen from '../screens/VaultsScreen'
import ProfileScreen from '../screens/ProfileScreen'
import PasswordScreen from '../screens/PasswordScreen'
import COLORS from '../constants/color';
import AddButton from './AddButton';

const Tab = createBottomTabNavigator()

const BottomTab = () => {
  return (
    <Tab.Navigator 
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.bottomTab,
        tabBarButton: (props) => <Pressable {...props} android_ripple={{ color: 'transparent' }} />
      }}
    >
      <Tab.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
              <Image 
                source={
                  focused 
                    ? require('../assets/icons/home.png')
                    : require('../assets/icons/home-focused.png')
                }
                resizeMode="contain" 
                style={{
                  width: 30,
                  height: 30,
                }} 
              />
            </View>
          ),
        }}
      />
      <Tab.Screen 
        name="Vaults" 
        component={VaultsScreen} 
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center', top: 10, right: 7 }}>
              <Image 
                source={
                  focused 
                    ? require('../assets/icons/lock.png')
                    : require('../assets/icons/lock-focused.png')
                }
                resizeMode="contain" 
                style={{
                  width: 30,
                  height: 30,
                }} 
              />
            </View>
          ),
        }}
      />

      <Tab.Screen 
        name="Add" 
        component={() => null}
        options={{
          tabBarIcon: () => <AddButton />,
          tabBarButton: () => <AddButton />
        }}
      />

      <Tab.Screen 
        name="Profile" 
        component={ProfileScreen} 
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center', top: 10, left: 7 }}>
              <Image 
                source={
                  focused 
                    ? require('../assets/icons/user.png')
                    : require('../assets/icons/user-focused.png')
                }
                resizeMode="contain" 
                style={{
                  width: 30,
                  height: 30,
                }} 
              />
            </View>
          ),
        }}
      />
      <Tab.Screen 
        name="Password" 
        component={PasswordScreen} 
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
              <Image 
                source={
                  focused 
                    ? require('../assets/icons/key-focused.png')
                    : require('../assets/icons/key.png')
                }
                resizeMode="contain" 
                style={{
                  width: 30,
                  height: 30,
                  transform: [
                    {rotate: '45deg'}
                  ]
                }} 
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  bottomTab: {
    backgroundColor: COLORS.bottomTab,
    position: 'absolute',
    marginLeft: 30,
    marginRight: 30,
    bottom: 20,
    elevation: 0,
    borderRadius: 15,
    height: 60,
    borderTopWidth: 0,

  } 
})

export default BottomTab
