import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

function Home({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>ATIVIDADE 2</Text>
      <View style={styles.btnContainer}>
        <Button
          color="#333333"
          title="Tela 1"
          onPress={() => navigation.navigate('Tela1')}
        />
        <Button
          color="#751313"
          title="Tela 2"
          onPress={() => navigation.navigate('Tela2')}
        />
        <Button
          color="#154770"
          title="Tela 3"
          onPress={() => navigation.navigate('Tela3')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 80,
    paddingBottom: 80,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#141D1D',
  },
  titulo: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 42,
    width: '100%',
    height: '20%',
  },
  btnContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '80%',
  },
});

export default Home;
