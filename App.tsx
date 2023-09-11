import { useState, useEffect } from 'react';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Home from './screens/home';
import { TMovie } from './types';
import { getPopularMovies } from './lib';

type TMovies = TMovie[]

export default function App() {
  const [movies, setMovies] = useState<TMovies>([]);

  const getMovies = async () => {
    try {
      const movies = await getPopularMovies()
      if (movies !== null) setMovies(movies as TMovies)
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
        setMovies([]);
      }
    }
  }

  useEffect(() => {
    getMovies()
  }, [])

  return (
    <View style={{ flex: 1 }}>
      <Home />
      <StatusBar style="auto" />
    </View>
  );
};
