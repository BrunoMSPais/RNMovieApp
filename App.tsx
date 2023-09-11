import { useEffect, useState } from 'react'
import { View } from 'react-native'
import { Text, Icon } from '@rneui/themed'
import { StatusBar } from 'expo-status-bar'
import { AppContext } from './contexts/app-context'
import { getPopularMoviesFromAPI, getTopRatedMoviesFromAPI } from './lib'
import { TMovie } from './@types'
import { globalStyles } from './styles'
import { Popular, Top } from './screens/'
import { TabRoutes } from './routes/tab.routes'
import { Routes } from './routes'

export default function App() {
  const [movies, setMovies] = useState<TMovie[] | null>(null)
  const [selectedMovie, setSelectedMovie] = useState<TMovie | null>(null)
  const [category, setCategory] = useState<'popular' | 'top'>('popular')

  const sortMovies = (movies: TMovie[]) => {
    return movies.sort((a, b) => {
      return a.popularity > b.popularity ? -1 : 1
    })
  }

  const getMovies = async () => {
    try {
      const fetchedMovies = await getPopularMoviesFromAPI()

      if (fetchedMovies === null) throw new Error('No movies found')

      setMovies(fetchedMovies as TMovie[])
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message)
        setMovies([])
      }
    }
  }

  const getTopRatedMovies = async () => {
    try {
      const fetchedMovies = await getTopRatedMoviesFromAPI()

      if (fetchedMovies === null) throw new Error('No movies found')

      const sortedMovies = sortMovies(fetchedMovies! as TMovie[])

      setMovies(sortedMovies)
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message)
        setMovies([])
      }
    }
  }

  useEffect(() => {
    getMovies()
  }, [])

  useEffect(() => {
    if (category === 'top') getTopRatedMovies()

    getMovies()
  }, [category])

  return (
    <AppContext.Provider
      value={{
        movies,
        setMovies,
        selectedMovie,
        setSelectedMovie,
        category,
        setCategory,
      }}
    >
      <View style={globalStyles.container}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 30,
            width: '100%',
            backgroundColor: '#000',
            borderRadius: 8,
            marginBottom: 20,
            gap: 10,
          }}
        >
          <Icon
            name='movie'
            color='#fff'
            size={30}
          />
          <Text
            h1
            h1Style={{ color: '#fff', fontWeight: 'bold' }}
          >
            MovieZ
          </Text>
        </View>
        {/* <Top /> */}
        <Routes />
        <StatusBar style='auto' />
      </View>
    </AppContext.Provider>
  )
}
