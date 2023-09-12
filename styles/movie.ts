import { StyleSheet } from 'react-native'

export const movieDetailsStyles = StyleSheet.create({
  overlay: {
    flex: 1,
    width: '100%',
    height: '100%',
    padding: 0,
    backgroundColor: 'transparent',
  },
  title: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 48,
    fontWeight: 'bold',
  },
  container: {
    height: '100%',
    padding: 16,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: 'rgba(0, 0, 0, 0.395)',
    flex: 1,
    gap: 8,
  },
  subtitle: {
    color: '#fff',
    fontSize: 36,
    fontWeight: 'bold',
  },
  image: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    margin: 0,
  },
  textBlock: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 8,
    marginHorizontal: 'auto',
  },
  label: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 28,
  },
  text: {
    color: '#fff',
    fontSize: 28,
    fontWeight: '400',
  },
})
