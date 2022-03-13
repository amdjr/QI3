import React from 'react';
import {TextInput, Text, View, TouchableOpacity, StatusBar} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './styleTela3Css';

export default function Tela3() {
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <LinearGradient
        colors={['#FC5B32', '#B82562', '#AD03AD']}
        start={{x: 0.1, y: 0}}
        end={{x: 0.1, y: 1}}
        locations={[0, 0.5, 1]}
        style={styles.background}>
        <View style={styles.helpContainer}>
          <TouchableOpacity style={styles.searchIcon}>
            <MaterialCommunityIcon
              name="help-circle-outline"
              size={25}
              color="#FDFDFDB9"
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialCommunityIcon
              name="server-security"
              size={25}
              color="#FDFDFDB9"
            />
          </TouchableOpacity>
        </View>
        <View style={styles.lockContainer}>
          <TouchableOpacity>
            <MaterialCommunityIcon
              name="lock-outline"
              size={25}
              color="#FDFDFDB9"
            />
          </TouchableOpacity>
          <Text style={styles.textContainer}>
            Enter the code sent to your number ending in 8691 or use your Backup
            Codes
          </Text>
          <Text style={styles.textContainer}>
            It may take few moments to receive SMS
          </Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputText}
            placeholder="Enter Two Factor code"
            backgroundColor="transparent"
            placeholderTextColor="#C0ACAC"
          />
          <Text style={styles.question}>What is it?</Text>
        </View>
        <View style={styles.loginContainer}>
          <TouchableOpacity style={styles.btnInsta}>
            <Text style={styles.btnText}>Login with Instagram</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.textLogin}>Back to Login</Text>
          </TouchableOpacity>
          <View style={styles.btnOr}>
            <Text style={styles.textLogin}>or</Text>
          </View>
          <TouchableOpacity style={styles.btnRepost}>
            <Text style={styles.btnText2}>Repost without Login</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
}
