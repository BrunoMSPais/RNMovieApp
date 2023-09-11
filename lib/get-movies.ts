import { TMovie } from '../@types'

// For this project I'm storing my API key and access token as client env variables because is only for running locally
const AUTHORIZATION_TOKEN = process.env.EXPO_PUBLIC_TMDB_ACCESS_TOKEN

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${AUTHORIZATION_TOKEN}`,
  },
}

export async function getPopularMoviesFromAPI(): Promise<TMovie[] | string> {
  try {
    const response = await fetch(
      'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',
      options,
    )
    const data = await response.json()
    // console.log(data.results)

    return data.results
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(error.message)
      return error.message
    }
    console.error('Unknown error while fetching movies.')
    return JSON.stringify(error)
  }
}

export async function getTopRatedMoviesFromAPI(): Promise<TMovie[] | string> {
  try {
    const response = await fetch(
      'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',
      options,
    )
    const data = await response.json()
    // console.log(data.results)

    return data.results
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(error.message)
      return error.message
    }
    console.error('Unknown error while fetching movies.')
    return JSON.stringify(error)
  }
}
