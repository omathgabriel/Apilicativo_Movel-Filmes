import React from 'react';
import { View, Text, Image,TouchableOpacity } from 'react-native';
import styles from './estilo3';
import { useNavigation } from '@react-navigation/native';

export default function CardMovies({ imagem, titulo, nota }) {
  const navigation = useNavigation()
  return (
    <TouchableOpacity style={styles.containerJogos} onPress={() => navigation.navigate("Detalhes",  {imagem, titulo, nota})}>
      <Image source={{ uri: imagem }} style={styles.images} />
      <Text style={styles.titulo}>{titulo}</Text>
      <Text style={styles.textNota}>⭐ {nota}</Text>
    </TouchableOpacity>
  );
}
