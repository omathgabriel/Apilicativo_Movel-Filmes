import { View, Text } from 'react-native';

export default function PesquisaFilmes({ route }) {
  const { termo } = route.params; // recebe o termo da busca

  return (
    <View>
      <Text>Essa é a tela de pesquisa de filmes</Text>
      <Text>Você pesquisou por: {termo}</Text>
    </View>
  );
}
