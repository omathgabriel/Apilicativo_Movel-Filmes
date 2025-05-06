import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, FlatList } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Cabecalho from '../../cabecalho';
import Pesquisa from '../../pesquisa';
import CardMovies from '../../cardFilmes';
import DATA from './movies.js';

 export default function Home (){
    return (
      <View style={styles.container}>

      <Cabecalho />

      {/* INICIO DO BANNER */}
      <Text style={styles.textBanner}>Em Cartaz</Text>

      <Image style={styles.imageBanner} source={require('./assets/CINEMA.png')} />

      {/* FIM DO BANNER*/}

      <View style={{ width: '90%', marginTop: 15,}}>

      <FlatList
        style={styles.containerFlatList} // Aplica o estilo para exibir os itens em linha
        data={DATA}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CardMovies
            imagem={item.imagem}
            titulo={item.nome}
            nota={item.nota}
          />
        )}
        horizontal={true} // Defina a lista como horizontal
        showsHorizontalScrollIndicator={false} // Remova o indicador de rolagem
      />

      </View >

    </View>
    )
 }

 const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: '#740000',
     alignItems: 'center',
   },
 
 
   imageBanner: {
     width: "100%",
     height: 350,
     marginTop: 15,
     borderRadius: 10
   },
 
   textBanner: {
     fontSize: 30,
     color: "white",
     marginTop: 15,
     fontWeight: "bold"
   },
 });