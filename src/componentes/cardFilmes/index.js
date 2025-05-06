import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './estilo3';

export default function CardMovies({ imagem, titulo, nota }) {
  return (
    <View style={styles.containerJogos}>
      <Image source={{ uri: imagem }} style={styles.images} />
      <Text style={styles.titulo}>{titulo}</Text>
      <Text style={styles.textNota}>⭐ {nota}</Text>
    </View>
  );
}
