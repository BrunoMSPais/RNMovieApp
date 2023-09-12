import React, { useContext } from 'react'
import { Button, Overlay, Image, Text } from '@rneui/themed'
import { View } from 'react-native'
import { AppContext } from '../contexts/app-context'
import { movieDetailsStyles } from '../styles/'

type OverlayComponentProps = {}

const OverlayComponent: React.FunctionComponent<OverlayComponentProps> = () => {
  const { visible, setVisible, movie, setMovie } = useContext(AppContext)

  const toggleOverlay = () => {
    if (visible) setMovie(null)

    setVisible(!visible)
  }

  const movieYear = movie ? new Date(movie.release_date).getFullYear() : '2000'

  return (
    <View>
      <Overlay
        isVisible={visible}
        onBackdropPress={toggleOverlay}
        overlayStyle={movieDetailsStyles.overlay}
      >
        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/w500/${movie?.poster_path}`,
          }}
          containerStyle={movieDetailsStyles.image}
          alt='movie poster'
        />
        <View style={movieDetailsStyles.container}>
          <Text
            h2
            h2Style={movieDetailsStyles.subtitle}
          >
            {movie?.title}
          </Text>
          <View style={movieDetailsStyles.textBlock}>
            <Text
              h3
              h3Style={movieDetailsStyles.label}
            >
              Genre:
            </Text>
            <Text style={movieDetailsStyles.text}>{movie?.genres[0].name}</Text>
          </View>
          <View style={movieDetailsStyles.textBlock}>
            <Text
              h3
              h3Style={movieDetailsStyles.label}
            >
              Year:
            </Text>
            <Text style={movieDetailsStyles.text}>{movieYear}</Text>
          </View>
          <View style={movieDetailsStyles.textBlock}>
            <Text style={movieDetailsStyles.text}>{movie?.overview}</Text>
          </View>
        </View>
        <Button
          title='Back to previous screen'
          onPress={toggleOverlay}
          color={'transparent'}
          titleProps={{
            style: {
              color: '#ff00ff',
              textDecorationLine: 'underline',
              marginVertical: 20,
              fontSize: 20,
            },
          }}
        // buttonStyle={styles.button}
        />
      </Overlay>
    </View>
  )
}

export default OverlayComponent
