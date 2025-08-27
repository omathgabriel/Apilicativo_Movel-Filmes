import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';

export default function Detalhes() {
  const rota = useRoute();
  const { imagem, titulo, descricao, nota } = rota.params;

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Image
          source={{ uri: `https://image.tmdb.org/t/p/w500${imagem}` }}
          style={styles.imagem}
        />
        <Text style={styles.titulo}>{titulo}</Text>
        {descricao && <Text style={styles.descricao}>{descricao}</Text>}
        <Text style={styles.nota}>⭐ {nota}</Text>
        <Image
          style={styles.logo}
          source={require('../../../../assets/logo.png')}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: '#740000',
    alignItems: 'center',
    padding: 20,
  },

  container: {
    alignItems: 'center',
    width: '100%',
  },

  imagem: {
    width: 300,
    height: 450,
    borderRadius: 10,
    marginBottom: 20,
    marginTop: 15,
  },

  titulo: {
    fontSize: 22,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },

  descricao: {
    fontSize: 17,
    color: 'white',
    marginBottom: 7,
    textAlign: 'center',
  },

  nota: {
    fontSize: 20,
    color: 'white',
  },

  logo: {
    width: 230,
    height: 200,
    marginTop: 30,
  },
});
