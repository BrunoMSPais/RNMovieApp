import React from 'react'
import { Card, Text } from '@rneui/themed'
import { TouchableOpacity, View, Image } from 'react-native'
import { movieCardStyle } from '../styles'

type MovieCardProps = {
  id?: number
  imageURI: string
  title: string
  rating: number
  date: string
}

const MovieCard: React.FunctionComponent<MovieCardProps> = ({
  id,
  imageURI,
  title,
  rating,
  date
}) => {
  const formatedRating = rating.toFixed(1)
  const year = new Date(date).getFullYear()

  return (
    <TouchableOpacity style={movieCardStyle.spacing} onPress={() => { }}>
      <Image
        style={movieCardStyle.image}
        source={{ uri: imageURI }}
        width={300}
        height={450}
      />
      <Card containerStyle={movieCardStyle.wrapper}>
        <View style={movieCardStyle.info}>
          <Card.Title style={movieCardStyle.title}>{title}</Card.Title>
          <Text style={movieCardStyle.year}>{year}</Text>
        </View>
        <Text style={movieCardStyle.rating}>{formatedRating}</Text>
      </Card>
    </TouchableOpacity>
  )
}

export default MovieCard
