import { StyleSheet } from 'react-native';

export const movieCardStyle = StyleSheet.create({
  spacing: {
    position: 'relative',
    marginHorizontal: 4,
    overflow: 'hidden',
    backgroundColor: '#000',
    borderRadius: 8,
    width: 250,
    aspectRatio: 0.7,
  },
  wrapper: {
    flex: 1,
    padding: 0,
    margin: 0,
    alignItems: 'center',
    justifyContent: 'flex-end',
    overflow: 'hidden',
    backgroundColor: 'transparent',
    borderColor: 'transparent',
  },
  image: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    aspectRatio: 0.7,
    objectFit: 'cover',
  },
  info: {
    display: 'flex',
    backgroundColor: 'rgba(0,0,0,0.5)',
    width: '100%',
    height: 90,
    margin: 0,
    paddingTop: 8,
    paddingBottom: 0,
    paddingHorizontal: 8,
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    marginTop: 'auto',
    padding: 0,
    width: 250,
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  year: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '300',
    marginBottom: 8,
    marginTop: 'auto',
    padding: 0,
    width: 250,
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rating: {
    position: 'absolute',
    top: -260,
    right: 16,
    padding: 8,
    backgroundColor: '#000',
    borderRadius: 80,
    color: '#fff',
    fontSize: 18,
  },
})