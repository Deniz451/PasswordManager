import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Button} from 'react-native';
import COLORS from '../constants/color'
import { SafeAreaView } from 'react-native-safe-area-context';
import Vault from '../components/Vault';

const VaultsScreen = () => {
  const [vaults, setVaults] = useState<any[]>([]);

  const addVault = () => {
    setVaults([...vaults, <Vault key={vaults.length} />]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.scrollContainer}>
        <View style={styles.headerContainer}>
            <Text style={styles.title}>All Vaults</Text>
        </View>
        <Button 
          onPress={addVault}
          title="add"
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.vaultsContainer}>
            {vaults.map((vault, index) => (vault))}
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
