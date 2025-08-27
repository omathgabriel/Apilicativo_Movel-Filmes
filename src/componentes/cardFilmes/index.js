import React from 'react';
import { Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './estilo3'; // Verifique se o estilo está correto

export default function CardMovies({ imagem, titulo, nota, descricao }) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity 
      style={styles.containerJogos} 
      onPress={() => navigation.navigate("Detalhes", { imagem, titulo, nota, descricao })} >
        
      <Image 
        style={styles.images} 
        source={{ uri: `https://image.tmdb.org/t/p/w500${imagem}` }} 
      />
      
      <Text style={styles.titulo}>{titulo}</Text>
      <Text style={styles.textNota}>⭐ {nota}</Text>
      
    </TouchableOpacity>
  );
}

