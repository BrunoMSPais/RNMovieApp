import React, { useContext, useEffect } from 'react'
import { Text, View } from 'react-native'
import { globalStyles } from '../styles'
import { AppContext } from '../contexts/app-context'

const Popular = () => {
  const { category, setCategory } = useContext(AppContext)

  useEffect(() => {
    setCategory('popular')
  }, [])

  return (
    <View style={{ backgroundColor: '#1b1b1b', flex: 1, width: '100%', paddingBottom: 8 }}>
      {/* <View style={globalStyles.view}> */}
      <Text style={globalStyles.titleText}>Popular Movies</Text>
      <Text style={globalStyles.bodyText}>{category}</Text>
    </View>
  )
}

export default Popular
