import React, { useContext, useEffect } from 'react'
import { ScrollView, View } from 'react-native'
import { AppContext } from '../contexts/app-context'
import { tabPageStyle } from '../styles'
import { Text } from '@rneui/themed';
import { TMovie } from '../@types'
import MovieCard from '../components/MovieCard'

const Popular = () => {
  const { movies, setCategory } = useContext(AppContext)

  useEffect(() => {
    setCategory('popular')
  }, [])

  return (
    <View style={tabPageStyle.wrapper}>
      <Text h2 h2Style={tabPageStyle.heading}>Trending Now</Text>
      <ScrollView style={tabPageStyle.container} horizontal>
        {movies &&
          movies.map(({
            id,
            poster_path,
            title,
            vote_average,
            release_date
          }: TMovie) => {
            const imageURI = `https://image.tmdb.org/t/p/w500/${poster_path}`
            return (
              <MovieCard
                key={id}
                date={release_date}
                imageURI={imageURI}
                rating={vote_average}
                title={title}
              />
            )
          })}
      </ScrollView>
    </View>
  )
}

export default Popular
