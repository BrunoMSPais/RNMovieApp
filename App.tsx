import { useEffect, useState } from 'react'
import { View } from 'react-native'
import { Text, Icon, Input } from '@rneui/themed'
import { StatusBar } from 'expo-status-bar'
import { AppContext } from './contexts/app-context'
import { getMoviesBySearchFromAPI, getPopularMoviesFromAPI, getTopRatedMoviesFromAPI } from './lib'
import { TMovie } from './@types'
import { globalStyles } from './styles'
import { Popular, Top } from './screens/'
import { TabRoutes } from './routes/tab.routes'
import { Routes } from './routes'

export default function App() {
  const [movies, setMovies] = useState<TMovie[] | null>(null)
  const [selectedMovie, setSelectedMovie] = useState<TMovie | null>(null)
  const [category, setCategory] = useState<'popular' | 'top'>('popular')
  const [searchKeyWord, setSearchKeyWord] = useState<string | null>(null)

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

  const getMoviesBySearch = async (keyWord: string) => {
    try {
      const fetchedMovies = await getMoviesBySearchFromAPI(searchKeyWord as string)

      if (fetchedMovies === null) throw new Error('No movies found')

      setMovies(fetchedMovies as TMovie[])
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message)
        setMovies([])
      }
    }
  }
  useEffect(() => {
    if (searchKeyWord !== null) {
      getMoviesBySearch(searchKeyWord)
    }
  }, [searchKeyWord])

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

        <View>
          <Input
            placeholder="Search for your favorite movie"
            rightIcon={{ name: 'search', onPress: () => setSearchKeyWord(searchKeyWord) }}
            onChangeText={value => setSearchKeyWord(value)}
            value={searchKeyWord as string}
          />
        </View>
        <Routes />
        <StatusBar style='auto' />
      </View>
    </AppContext.Provider>
  )
}
