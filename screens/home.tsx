import { useContext } from 'react'
import { Text, View } from 'react-native'
import { globalStyles } from '../styles'
import { AppContext } from '../contexts/app-context'

const Home = () => {
  const { category, movies } = useContext(AppContext)

  return (
    <View style={globalStyles.view}>
      {!movies && <Text>No movies found</Text>}
      {
        category === 'popular' ?
          <Text style={globalStyles.titleText}>Popular Movies</Text> :
          <Text style={globalStyles.titleText}>Top Rated Movies</Text>
      }
    </View>
  )
}

export default Home