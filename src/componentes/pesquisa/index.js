
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import styles from "./estilo2.js";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import PesquisaFilmes from "../paginas/pesquisa2/index.js";

export default function Pesquisa() {

  const [pesquisa, setPesquisa] = useState('');

  const navigation = useNavigation();

  function testeBotao() {
    console.log(pesquisa); // Aqui você pode navegar ou fazer a busca
  }

  return (

    <View style={styles.containerSearch}>

      <TextInput onChangeText={(texto) => setPesquisa(texto)} style={styles.inputSearch} placeholder="Digitee o filme que deseja buscar"/>

      <TouchableOpacity onPress={() => navigation.navigate ('pesquisa')}  style={{ marginLeft: -40 }} >
         <FontAwesome name="search" size={24} color="black" />
      </TouchableOpacity>
      <stack.Screen name = ' pesquisa' component={PesquisaFilmes} options={{headerShown:true}}/>

    </View>
  );
}