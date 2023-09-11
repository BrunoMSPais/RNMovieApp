import React from 'react'
import { FlatList, Text, View } from 'react-native'
import { globalStyles } from '../styles'
import { TMovie } from '../types'

type HomeProps = {}

const Home = () => {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Home Screen</Text>
    </View>
  )
}

export default Home