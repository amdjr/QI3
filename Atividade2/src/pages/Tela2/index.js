import * as React from 'react';
import {View, Text, StatusBar, TouchableOpacity} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Searchbar, IconButton, Card} from 'react-native-paper';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import AwesomeIcon from 'react-native-vector-icons/AntDesign';

import styles from './styleTela2Css';

function Tela2({navigation}) {
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = query => setSearchQuery(query);

  return (
    <SafeAreaProvider>
      <StatusBar backgroundColor="#203A72" />
      <View style={styles.containerTop}>
        <IconButton
          icon="arrow-left"
          size={35}
          color="white"
          onPress={() => navigation.navigate('Home')}
        />
        <Searchbar
          style={styles.searchStyle}
          icon={() => <AwesomeIcon name="search1" size={25} color="white" />}
          iconColor="white"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </View>
      <View style={styles.bkgDivUp} />
      <Card style={styles.card} />
      <View style={styles.bkgDivDown}>
        <Text style={styles.title}>Your Name</Text>
        <TouchableOpacity style={styles.containerlinks}>
          <MaterialCommunityIcon
            name="facebook-messenger"
            size={35}
            color="#4D5975B7"
          />
          <MaterialCommunityIcon
            name="dots-horizontal-circle-outline"
            size={35}
            color="#4D5975B7"
          />
        </TouchableOpacity>
        <Text style={styles.text1}>Your basic info 1</Text>
        <Text style={styles.text1}>Your basic info 2</Text>
      </View>
      <View style={styles.bkg3}>
        <TouchableOpacity style={styles.bkgContainer}>
          <Text style={styles.btnText}>ABOUT</Text>
          <Text style={styles.btnText}>PHOTOS</Text>
          <Text style={styles.btnText}>FRIENDS</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaProvider>
  );
}

export default Tela2;
