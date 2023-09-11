import { StyleSheet } from 'react-native'

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1b1b1b',
    paddingTop: 40,
    paddingBottom: 8,
    paddingHorizontal: 10,
  },
  view: {
    flex: 1,
    width: '100%',
    backgroundColor: 'transparent',
  },
  titleText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
    width: '100%',
  },
  bodyText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '400',
    lineHeight: 20,
    marginVertical: 10,
  },
})
