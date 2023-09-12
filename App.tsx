import { useEffect, useState } from 'react'
import { View } from 'react-native'
import { Text, Icon, Input } from '@rneui/themed'
import { StatusBar } from 'expo-status-bar'
import { AppContext } from './contexts/app-context'
import { getMoviesBySearchFromAPI, getPopularMoviesFromAPI, getTopRatedMoviesFromAPI } from './lib'
import { TMovie } from './@types'
import { globalStyles } from './styles'
import { Routes } from './routes'

export default function App() {
  const [movies, setMovies] = useState<TMovie[] | null>(null)
  const [selectedMovie, setSelectedMovie] = useState<TMovie | null>(null)
  const [category, setCategory] = useState<'popular' | 'top'>('popular')
  const [searchKeyWord, setSearchKeyWord] = useState<string | null>(null)

  useEffect(() => {
    getMovies()
  }, [])

  useEffect(() => {
    if (category === 'top') getTopRatedMovies()

    getMovies()
  }, [category])

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
        setMovies([])
      }
    }
  }

  const getMoviesBySearch = async (keyWord: string) => {
    try {
      const fetchedMovies = await getMoviesBySearchFromAPI(keyWord)

      if (fetchedMovies === null) throw new Error('No movies found')

      setMovies(fetchedMovies as TMovie[])
    } catch (error) {
      if (error instanceof Error) {
        setMovies([])
      }
    }
  }

  function handleSearch(value: string): void {
    if (value === '') {
      setSearchKeyWord(null)
      getMovies()
    }
    setSearchKeyWord(prev => value)

    getMoviesBySearch(searchKeyWord as string)
  }

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
        {/* App header */}
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

        {/* Search input */}
        <View
          style={{ marginBottom: 'auto' }}>
          <Input
            placeholder="Search for your favorite movie"
            rightIcon={{ name: 'search', onPress: () => searchKeyWord && handleSearch(searchKeyWord), color: 'rgba(255, 255, 255, 0.75)' }}
            onChangeText={value => handleSearch(value)}
            value={searchKeyWord as string}
            inputStyle={{ color: '#fff' }}
            placeholderTextColor='rgba(255, 255, 255, 0.75)'
          />
        </View>

        {/* App content */}
        <View style={{ backgroundColor: 'transparent', width: '100%', height: '60%' }}>
          <Text h2 h2Style={{ color: '#fff', fontWeight: 'bold', marginBottom: 20, marginLeft: 8 }}>
            {searchKeyWord ? 'Searched' : category === 'popular' ? 'Popular' : 'Top Rated'} Movies
          </Text>
          <Routes />
        </View>


        <StatusBar style='auto' />
      </View>
    </AppContext.Provider>
  )
}
