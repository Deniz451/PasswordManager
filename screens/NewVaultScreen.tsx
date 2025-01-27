import React, { useContext, useState } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import COLORS from '../constants/color'
import { SafeAreaView } from 'react-native-safe-area-context'
import InputCard from '../components/InputCard';
import BackButton from '../components/BackButton';
import { useNavigation } from '@react-navigation/native';
import { useVaultContext } from '../context/VaultContext';
import { VaultProps } from '../components/Vault';


const NewVaultScreen = () => {
  const [buttonPressed, setButtonPressed] = useState(false);
  const [vaultName, setVaultName] = useState('');
  const [icon, setIcon] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [isPasswordValid, setPasswordValid] = useState(true);
  const [isVaultNameValid, setVaultNameValid] = useState(true);

  const navigation = useNavigation();
  const { addVault } = useVaultContext();

  const handleCreateVault = () => {
    setButtonPressed(true);
  
    const isPasswordValid = password.length >= 4;
    setPasswordValid(isPasswordValid);
  
    const isVaultNameValid = !!vaultName;
    setVaultNameValid(isVaultNameValid);
  
    if (isPasswordValid && isVaultNameValid) {
      const newVault: VaultProps = { vaultName, icon, username, email, password };
      //console.log('New vault object before adding it: ', newVault);
      addVault(newVault); 
      navigation.goBack();
    }
  };

  return(
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <BackButton />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Add New Vault</Text>
        </View>
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.inputCardsContainer}>
          <View style={styles.firstInputCardRow}>
              <InputCard 
                width={258} 
                title={'Vault Name'} 
                hintText='My New Vault'
                value={vaultName} 
                onChangeText={setVaultName} 
                isValid = {isVaultNameValid}
                buttonPressed = {buttonPressed}
              />
              <InputCard 
                width={45} 
                title={'Icon'} 
                value={icon} 
                onChangeText={setIcon} 
                isValid = {true}
                buttonPressed = {buttonPressed}
              />
            </View>
            <InputCard 
              width={315} 
              title={'Username'} 
              hintText='Example Name' 
              value={username} 
              onChangeText={setUsername} 
              isValid = {true}
              buttonPressed = {buttonPressed}
            />
            <InputCard 
              width={315} 
              title={'Email'} 
              hintText='example@mail.com' 
              value={email} 
              onChangeText={setEmail} 
              isValid = {true}
              buttonPressed = {buttonPressed}
            />
            <InputCard 
              width={315} 
              title={'Password'} 
              value={password} 
              onChangeText={setPassword} 
              isValid = {isPasswordValid}
              buttonPressed = {buttonPressed}
            />
          </View>
        <View style={styles.createVaultButton}>
          <Text style={styles.buttonText} onPress={handleCreateVault}>Create New Vault</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    width: 335,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.text,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.backgroundDark,
    gap: 30,
  },
  contentContainer: {
    width: 370,
    height: 690,
    backgroundColor: COLORS.backgroundLight,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 250,
  },
  inputCardsContainer: {
    gap: 35,
  },
  firstInputCardRow: {
    flexDirection: 'row',
    gap: 12,
  },
  createVaultButton: {
    width: 315,
    height: 45,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 20,
    color: COLORS.white,
  },
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
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backIcon: {
    width: 25,
    height: 25,
    marginRight: 3,
  },
})

export default NewVaultScreen
