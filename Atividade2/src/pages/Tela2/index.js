import React from 'react';
import {View, Text, Button} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import styles from './styleTela2Css';

function Tela2() {
  return (
    <SafeAreaProvider>
      <View style={styles.bkg1}>
        <Text style={styles.text1}>Tela 2</Text>
        <Button title="cole" />
      </View>
    </SafeAreaProvider>
  );
}

export default Tela2;
