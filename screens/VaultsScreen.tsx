import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import COLORS from '../constants/color'
import { SafeAreaView } from 'react-native-safe-area-context';
import Vault from '../components/Vault';

interface Vault {
  vaultName: string;
  icon?: string;
  username?: string;
  email?: string;
  password: string;
}

const VaultsScreen = () => {
  const [vaults, setVaults] = useState<Vault[]>([]);
 
  const addVault = (newVault: Vault) => {
    setVaults([...vaults, newVault]);
  };  

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.scrollContainer}>
        <View style={styles.headerContainer}>
            <Text style={styles.title}>All Vaults</Text>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.vaultsContainer}>
            <Vault></Vault>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.backgroundDark,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  scrollContainer: {
    height: 700, // Adjust height to your preference
    width: '100%',
    marginLeft: 40,
    //backgroundColor: 'orange',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.text,
  },
  headerContainer: {
    marginTop: 40,
    marginBottom: 40,
    alignSelf: 'flex-start',
    marginLeft: 10,
  },
  vaultsContainer: {
    width: 350,
    gap: 25,
    marginTop: 15,
    marginLeft: 5,
  },
});

export default VaultsScreen;
