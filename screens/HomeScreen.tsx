import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import COLORS from '../constants/color'
import { SafeAreaView } from 'react-native-safe-area-context';
import BackButton from '../components/BackButton';
import SettingsButton from '../components/SettingsButton';
import Vault from '../components/Vault';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.profileContainer}>
          <View style={styles.profilePicContainer}></View>
          <View style={styles.profileUsernameContaienr}>
            <Text style={styles.message}>Welcome back,</Text>
            <Text style={styles.username}>Username</Text>
          </View>
        </View>
        <View style={styles.settingsButton}><SettingsButton /></View>
      </View>
      <View style={styles.notificationContainer}></View>
      <View style={styles.recentVaultsContainer}>
        <View style={styles.vaultsContainer}>
          <Text style={styles.vaultsText}>Recent Vaults</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.backgroundDark,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.text,
  },
  notificationContainer: {
    backgroundColor: COLORS.backgroundLight,
    height: 340,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  recentVaultsContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerContainer: {
    position: 'absolute', // Position the header absolutely
    top: 20, // Adjust the distance from the top of the screen
    left: 0,
    right: 0, // Ensure it spans the full width
    height: 60, // Set a fixed height
    flexDirection: 'row', // Align items horizontally
    alignItems: 'center', // Center items vertically
    justifyContent: 'space-between', // Space out items
    paddingHorizontal: 20, // Add horizontal padding
    backgroundColor: COLORS.backgroundLight, // Optional: differentiate header
    zIndex: 1, // Ensure it appears above other elements
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profilePicContainer: {
    backgroundColor: '#2B2B2B',
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  profileUsernameContaienr: {
    marginLeft: 10,
  },
  username: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
  message: {
    color:  COLORS.white,
    fontSize: 12,
    fontWeight: '100',
  },
  settingsButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  vaultsContainer: {
    //backgroundColor: 'orange',
    width: '87%', // 80% of the parent's width
    height: '70%', // 80% of the parent's height
    borderRadius: 15,
    marginBottom: 80,
  },
  vaultsText: {
    color: COLORS.white,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 35,
  },
});

export default HomeScreen;

