import React from 'react'
import { Text, View } from 'react-native'
import { globalStyles } from '../styles'

type Props = {}

const Home = (props: Props) => {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>React Native Movie App</Text>
      <Text style={globalStyles.bodyText}>A simple movies app.</Text>
    </View>
  )
}

export default Home