import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  viewHeader: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 5,
    marginLeft: 10,
    alignItems: 'center',
  },
  textHeader: {
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold',
    alignItems: 'center'
  },
  imputSearch: {
    color: 'black',
    width: '100%',
    paddingLeft: 15,
    borderRadius: 15,
  },
  viewSearch: {
    backgroundColor: 'white',
    width: '90%',
    height: 35,
    borderRadius: 15,
    marginTop: 10,
    paddingRight: 15,
    flexDirection: 'row', // Adicione esta linha
  }

})
export default styles;
