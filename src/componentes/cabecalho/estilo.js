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
    paddingLeft: 5,
    borderRadius: 20,
  },
  viewSearch: {
    backgroundColor: 'white',
    width: '90%',
    borderRadius: 20,
    marginTop: 10,
  }

})
export default styles;
