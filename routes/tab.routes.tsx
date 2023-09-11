import { useNavigation } from '@react-navigation/native'
import { useContext, useEffect } from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { AppContext } from '../contexts/app-context'
import { Popular, Top } from '../screens'
import { MaterialIcons } from '@expo/vector-icons'

type TabParamList = {
  popular: undefined,
  top: undefined,
}

const { Navigator, Screen } = createBottomTabNavigator()

export function TabRoutes() {
  const { category, setCategory } = useContext(AppContext)
  const navigation = useNavigation()

  useEffect(() => {
    setCategory('top')
  }, [])


  function handleNavigation() {
    navigation.navigate('Popular')
  }

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: '#787878',
        tabBarStyle: {
          backgroundColor: 'transparent',
          borderTopWidth: 1,
          borderTopColor: '#080808',
          elevation: 0,
        }
      }}
    >
      <Screen
        name='Popular Movies'
        component={Popular}
        options={{
          tabBarLabel: 'Popular Movies',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name='thumb-up' color={color} size={size} />
          )
        }}
      />

      <Screen
        name='Top Rated Movies'
        component={Top}
        options={{
          tabBarLabel: 'Top Rated Movies',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name='star' color={color} size={size} />
          ),
        }}
      />
    </Navigator>
  )
}
