import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  containerJogos: {
    width: 140, // Tamanho fixo para harmonizar os cards
    marginRight: 10,
    marginBottom: 15,
  },

  titulo: {
    color: '#fff',
    fontSize: 14,
    marginTop: 5,
    fontWeight: 'bold',
  },

  textNota: {
    fontSize: 12,
    color: '#fff',
    marginTop: 2,
  },

  images: {
    width: '100%',
    height: 180,
    borderRadius: 8,
    resizeMode: 'cover',
  },

  containerFlatList: {
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 20,
  },
});

export default styles;
