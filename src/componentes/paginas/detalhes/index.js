import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';

export default function Detalhes() {
  const rota = useRoute();
  const { imagem, titulo, nota } = rota.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: imagem }} style={styles.imagem} />
      <Text style={styles.titulo}>{titulo}</Text>
      <Text style={styles.nota}>⭐ {nota}</Text>
      <Image style={{width: 230, height: 200, marginTop: 30}} source={require('../../../../assets/logo.png')}></Image>
    </View>
  );
}

const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: '#740000',
     alignItems: 'center',
     padding: 20,
   },
 
   imagem: {
     width: 300,
     height: 450,
     borderRadius: 10,
     marginBottom: 20,
     marginTop: 15,
   },
 
   titulo: {
     fontSize: 22,          // diminuiu o tamanho da fonte
     color: 'white',
     fontWeight: 'bold',
     marginBottom: 10,
     textAlign: 'center',   // centraliza o texto
   },
 
   nota: {
     fontSize: 20,
     color: 'white',
   },
 });