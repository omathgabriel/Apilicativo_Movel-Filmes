import { View, TouchableOpacity, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';
import styles from './estilo.js';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { TextInput } from 'react-native-web';
import { useState } from 'react';

export default function Cabecalho({ onSearch }) {
  const [busca, setBusca] = useState('');

  function handleSearch() {
    if (onSearch) {
      onSearch(busca);
    }
  }

  return (
    <>
      <View style={styles.viewHeader}>
        <TouchableOpacity>
          <Feather style={{ marginLeft: -120 }} name='menu' size={36} color="white" />
        </TouchableOpacity>
        <Image style={{ width: 120, height: 100 }} source={require('../../../assets/logo.png')}></Image>
      </View>

      <View style={styles.viewSearch}>
        <TextInput
          style={styles.imputSearch}
          placeholder='Digite o que deseja buscar'
          value={busca}
          onChangeText={setBusca}
        />
        <TouchableOpacity onPress={handleSearch}>
          <FontAwesome name="search" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </>
  );
}