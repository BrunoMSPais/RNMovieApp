import React, { useContext, useEffect } from 'react'
import { ScrollView, Text, View, Image } from 'react-native'
import { scrollViewStyle } from '../styles'
import { AppContext } from '../contexts/app-context'
import { TMovie } from '../@types'

const Top = () => {
  const { setCategory, movies } = useContext(AppContext)

  useEffect(() => {
    setCategory('top')
  }, [])


  return (
    <ScrollView style={scrollViewStyle.container}>
      {movies &&
        movies.sort((a: TMovie, b: TMovie) => b.vote_average - a.vote_average)
          .map(({
            id,
            poster_path,
            original_title,
            title,
            overview,
            vote_average }: TMovie) => {

            const imageURI = `https://image.tmdb.org/t/p/w500/${poster_path}`
            return (
              <View key={id}>
                <Image
                  source={{ uri: imageURI }}
                  width={100}
                  height={150}
                />
                <View>
                  <Text style={{ color: '#fff' }}>{original_title || title}</Text>
                  <Text style={{ color: '#fff' }}>{overview}</Text>
                  <Text style={{ color: '#fff' }}>{vote_average.toFixed(1)}</Text>
                </View>
              </View>
            )
          })}
    </ScrollView>
  )
}

export default Top