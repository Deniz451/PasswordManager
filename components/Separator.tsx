import React from 'react';
import { StyleSheet, View } from 'react-native';

const Separator = () => {

  return (
    <View style={styles.container}></View>
  );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 0.3,
        backgroundColor: '#999999'
    }
});

export default Separator;
