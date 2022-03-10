import React from 'react';
import {View, Text, TextInput, TouchableOpacity, StatusBar} from 'react-native';

import styles from './styleTela1Css';

function Tela1() {
  return (
    <View style={styles.bkg1}>
      <StatusBar hidden />
      <View style={styles.bkg1}>
        <Text style={styles.text1}>facebook</Text>
        <View style={styles.containerLogin}>
          <TextInput style={styles.inputText} placeholder="email or phone" />
        </View>
        <View style={styles.containerInput}>
          <TextInput style={styles.inputText} placeholder="password" />
        </View>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.btnSubmit}
          onChangeText={() => {}}>
          <Text style={styles.submitText}>Log in</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.cadastro}>sign up for Facebook</Text>
    </View>
  );
}

export default Tela1;
