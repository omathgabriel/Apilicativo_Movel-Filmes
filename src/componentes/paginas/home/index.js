import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, FlatList, ScrollView } from 'react-native';
import Cabecalho from '../../cabecalho';
import CardMovies from '../../cardFilmes';
import { useState, useEffect } from 'react';

export default function Home() {
  const [popularMovies, setPopularMovies] = useState([]);
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);

  const BASE_IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYjJkNTA4YjU0Y2E0ZDA5OGI0ZGRkNTYzMGU3NTdlNCIsIm5iZiI6MTc1NTAyMTUyMy45NjYsInN1YiI6IjY4OWI4MGQzMTBlZmM3OTg4ZDhlYjZmNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KZnrNWFKoWfzFxi6qN7zd276g518OQ_Lg9mPrrjjEHU'
    }
  };

  useEffect(() => {
    async function fetchMovies() {
      try {
        const resPopular = await fetch('https://api.themoviedb.org/3/movie/popular?language=pt-BR&page=1', options);
        const jsonPopular = await resPopular.json();
        setPopularMovies(jsonPopular.results);

        const resNowPlaying = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=pt-BR&page=1', options);
        const jsonNowPlaying = await resNowPlaying.json();
        setNowPlayingMovies(jsonNowPlaying.results);
      } catch (error) {
        console.error("Erro ao buscar filmes:", error);
      }
    }

    fetchMovies();
  }, []);

  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.container}>
      <NavigationContainer>
      <StackRoutes />
    </NavigationContainer>
        <Cabecalho />

        {/* BANNER */}
        <Text style={styles.textBanner}>Em Cartaz</Text>
        <Image style={styles.imageBanner} source={require('../../../../assets/CINEMA.png')} />

        {/* LISTA DE FILMES EM CARTAZ */}
        <View style={styles.movieSection}>
          <Text style={styles.textCategoria}>Filmes em Cartaz:</Text>
          <FlatList
            data={nowPlayingMovies}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <CardMovies
                imagem={`${BASE_IMAGE_URL}${item.poster_path}`}
                titulo={item.title}
                nota={item.vote_average}
                descricao={item.overview}
              />
            )}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>

        {/* LISTA DE FILMES POPULARES */}
        <View style={styles.movieSection}>
          <Text style={styles.textCategoria}>Filmes Mais Populares:</Text>
          <FlatList
            data={popularMovies}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <CardMovies
                imagem={`${BASE_IMAGE_URL}${item.poster_path}`}
                titulo={item.title}
                nota={item.vote_average}
                descricao={item.overview}
              />
            )}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: '#740000',
  },
  container: {
    alignItems: 'center',
    paddingBottom: 20,
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
  textCategoria: {
    fontSize: 25,
    color: "white",
    marginTop: 15,
    marginBottom: 9,
    fontWeight: "bold"
  },
  movieSection: {
    width: '90%',
    marginTop: 15,
  }
});
