import React, { useContext } from 'react'
import { Card, Text } from '@rneui/themed'
import { TouchableOpacity, View, Image } from 'react-native'
import { movieCardStyle } from '../styles'
import { AppContext } from '../contexts/app-context'
import { TMovieDetail } from '../@types/movie'
import { getMovieDetailsFromAPI } from '../lib/get-movies'

type MovieCardProps = {
  id: number
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
  date,
}) => {
  const { setMovie, setVisible } = useContext(AppContext)

  const formatedRating = rating.toFixed(1)
  const year = new Date(date).getFullYear()

  let movie: TMovieDetail = { id } as TMovieDetail

  const showMovieDetails = () => {
    const movieInfo = getMovieDetailsFromAPI(id as number)

    movieInfo.then(res => {
      if (res instanceof Error) {
        return
      }

      if (typeof res === 'string') {
        return
      }

      movie = res as TMovieDetail

      setMovie(movie)
      setVisible(true)
    })
  }

  async function getMovieInfoFromApi(): Promise<string | TMovieDetail | Error> {
    try {
      const res = await getMovieDetailsFromAPI(id as number)

      return res
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message)
      }

      return new Error('Something went wrong while fetching movie details')
    }
  }

  return (
    <TouchableOpacity
      style={movieCardStyle.spacing}
      onPress={showMovieDetails}
    >
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
