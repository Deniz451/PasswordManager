import React, { useState } from 'react';
import { View, StyleSheet, Text, Image, Alert , TouchableOpacity } from 'react-native';
import COLORS from '../constants/color';
import { SafeAreaView } from 'react-native-safe-area-context';
import SettingsToggle from '../components/SettingsToggle';
import Slider from '@react-native-community/slider';
import * as Clipboard from 'expo-clipboard';

const PasswordScreen = () => {
  const [password, setPassword] = useState("");
  const [passwordLength, setPasswordLength] = useState(6);
  const [useLowerCase, setLowerCaseBool] = useState(true);
  const [useUpperCase, setUpperCaseBool] = useState(true);
  const [useDigits, setDigitsBool] = useState(true);
  const [useSpecialChars, setSpecialCharsBool] = useState(true);

  const generatePassword = (length: number, useLowerCase: boolean, useUpperCase: boolean, useDigits: boolean, useSpeacialChars: boolean) => {
    const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
    const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const digitChars = "0123456789";
    const specialChars = "!@#$%^&*()-_=+[]{}|;:',.<>?";
  
    let characterPool = "";
  
    if (useLowerCase) characterPool += lowerCaseChars;
    if (useUpperCase) characterPool += upperCaseChars;
    if (useDigits) characterPool += digitChars;
    if (useSpeacialChars) characterPool += specialChars;

    let randomString = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characterPool.length);
      randomString += characterPool[randomIndex];
    }
  
    return randomString;
  };

  const copyToClipboard = (text: string) => {
    Clipboard.setStringAsync(text);
    Alert.alert('Copied!', 'Text has been copied to clipboard.');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.generatedPasswordContainer}>
        <Text style={styles.headerContainer}>Generated Password</Text>
        <View style={styles.passwordAndButtonContainer}>
            <View style={styles.passwordContainer}>
              <Text style={styles.password}>
                {password}
              </Text>
            
              <TouchableOpacity
                onPress={() => copyToClipboard(password)}
              >
                <Image
                  source={require('../assets/icons/copy.png')}
                  style={styles.copyImage}
                />
              </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.refreshButton}
            onPress={() => setPassword(generatePassword(passwordLength, useLowerCase, useUpperCase, useDigits, useSpecialChars))}
          >
            <Image
              source={require('../assets/icons/reload-highlighted.png')}
              style={styles.refreshIcon}
            />
          </TouchableOpacity>
        </View>
      </View>
      {/* settings and button for generating container */}
      <View style={styles.settingsContainer}>
          <View style={styles.lengthOptions}>
            <Text style={styles.lengthHeader}>Password Length ({passwordLength})</Text>
            <View style={styles.sliderWrapper}>
              <Text style={{color: 'white'}}>6</Text>
              <Slider
                style={{width: '100%', height: 20, }}
                minimumValue={6}
                maximumValue={20}
                minimumTrackTintColor="#5ABE46"
                maximumTrackTintColor="white"
                thumbTintColor="white"
                step={1}
                onValueChange={(value) => {
                  setPasswordLength(value);
                }}
              />
              <Text style={{color: 'white'}}>20</Text>
            </View>
          </View>
          <View style={styles.otherOptionsContainer}>
            <View style={styles.oprionsHeaderContainer}>
              <Text style={styles.optionsHeader}>Options</Text>
            </View>
            <View style={styles.optionsDescriptionContainer}>
            <SettingsToggle
              title="Lowercase characters (a-z)"
              isEnabled={useLowerCase}
              hasSeparator={true}
              onStateChange={setLowerCaseBool}
            />
            <SettingsToggle
              title="Uppercase characters (A-Z)"
              isEnabled={useUpperCase}
              hasSeparator={true}
              onStateChange={setUpperCaseBool}
            />
            <SettingsToggle
              title="Digits (0-9)"
              isEnabled={useDigits}
              hasSeparator={true}
              onStateChange={setDigitsBool}
            />
            <SettingsToggle
              title="Special characters (&%$#)"
              isEnabled={useSpecialChars}
              hasSeparator={false}
              onStateChange={setSpecialCharsBool}
            />
            </View>
          </View>
    </View>
</SafeAreaView>
);
};

const styles = StyleSheet.create({
sliderWrapper: {
  width: '100%',
  flexDirection: 'row',
},
refreshIcon: {
  width: 32,
  height: 32,
},
optionsDescriptionContainer: {
  width: '100%',
    height: '85%',
    justifyContent: 'center',
    color: 'white',
    alignItems: 'center',
    gap: '5',
  },
  oprionsHeaderContainer: {
    width: '100%',
    height: '15%',
    justifyContent: 'center',
    fontWeight: '100',
    color: 'white',
  }, 
  optionsHeader: {
    color: 'white',
    fontWeight: '300',
    fontSize: 18,
  },
  lengthHeader: {
    color: 'white',
    fontWeight: '300',
    fontSize: 18,
    marginLeft: 10,
  },
  optionsText: {
    color: 'white',
    fontWeight: '100',
    fontSize: 14,
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.backgroundDark,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 30,
    paddingBottom: 70,
  },
  generatedPasswordContainer: {
    backgroundColor: COLORS.backgroundLight,
    height: 200,
    width: 370,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 30,
  },
  settingsContainer: {
    backgroundColor: COLORS.backgroundLight,
    height: 470,
    width: 370,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  headerContainer: {
    width: 300,
    height: 50,
    color: COLORS.white,
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  passwordAndButtonContainer: {
    width: 340,
    height: 50,
    flexDirection: 'row',
    gap: 10,
  },
  refreshButton: {
    width: 50,
    height: 50,
    borderRadius: 10,
    backgroundColor: '#333333',
    borderColor: '#5ABE46',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  passwordContainer: {
    backgroundColor: '#333333',
    borderRadius: 10,
    width: 280,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  copyImage: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  password: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'left',
    textAlignVertical: 'center',
    paddingLeft: 10,
  },
  otherOptionsContainer: {
    width: 320,
    height: 250,
  },
  lengthOptions: {
    width: 320,
    height: 150,
    alignItems: 'flex-start',
    justifyContent: 'center',
    gap: 15,
    marginRight: 20,
  },
});

export default PasswordScreen;
