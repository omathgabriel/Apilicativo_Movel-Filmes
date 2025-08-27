import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, ActivityIndicator, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const BEARER_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYjJkNTA4YjU0Y2E0ZDA5OGI0ZGRkNTYzMGU3NTdlNCIsIm5iZiI6MTc1NTAyMTUyMy45NjYsInN1YiI6IjY4OWI4MGQzMTBlZmM3OTg4ZDhlYjZmNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KZnrNWFKoWfzFxi6qN7zd276g518OQ_Lg9mPrrjjEHU';

export default function PesquisaFilmes({ route }) {
  const { termo } = route.params;
  const [filmes, setFilmes] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    async function buscarFilmes() {
      setCarregando(true);
      try {
        const resposta = await fetch(
          `https://api.themoviedb.org/3/search/movie?language=pt-BR&query=${encodeURIComponent(termo)}`,
          {
            headers: {
              Authorization: `Bearer ${BEARER_TOKEN}`,
              'Content-Type': 'application/json;charset=utf-8',
            },
          }
        );
        const dados = await resposta.json();
        setFilmes(dados.results || []);
      } catch (error) {
        setFilmes([]);
      }
      setCarregando(false);
    }
    buscarFilmes();
  }, [termo]);

  function irParaDetalhes(item) {
    navigation.navigate('Detalhes', {
      imagem: item.poster_path,
      titulo: item.title,
      descricao: item.overview,
      nota: item.vote_average,
    });
  }

  return (
    <View style={{ flex: 1, padding: 16, backgroundColor: '#740000' }}>
      <Text style={{ fontWeight: 'bold', fontSize: 18, color: 'white', marginBottom: 10 }}>Você pesquisou por: {termo}</Text>
      {carregando ? (
        <ActivityIndicator size="large" color="#fff" />
      ) : filmes.length === 0 ? (
        <Text style={{ color: 'white' }}>Nenhum filme encontrado.</Text>
      ) : (
        <FlatList
          data={filmes}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => irParaDetalhes(item)}>
              <View style={{
                flexDirection: 'row',
                marginVertical: 12,
                alignItems: 'center',
                backgroundColor: '#fff',
                borderRadius: 12,
                padding: 12,
                elevation: 3,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.2,
                shadowRadius: 4,
              }}>
                {item.poster_path && (
                  <Image
                    source={{ uri: `https://image.tmdb.org/t/p/w185${item.poster_path}` }}
                    style={{
                      width: 100,
                      height: 150,
                      marginRight: 18,
                      borderRadius: 8,
                    }}
                  />
                )}
                <View style={{ flex: 1 }}>
                  <Text style={{ fontWeight: 'bold', fontSize: 20 }}>{item.title}</Text>
                  <Text style={{ color: '#666', fontSize: 16 }}>{item.release_date}</Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
}
