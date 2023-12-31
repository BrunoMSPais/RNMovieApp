import { TMovie } from '../@types'
import { TMovieDetail } from '../@types/movie'

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

    return data.results
  } catch (error: unknown) {
    if (error instanceof Error) {
      return error.message
    }
    
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

    return data.results
  } catch (error: unknown) {
    if (error instanceof Error) {
      return error.message
    }

    throw new Error('Unknown error while fetching movies.')
  }
}

export async function getMoviesBySearchFromAPI(keyWord: string): Promise<TMovie[] | string> {
  try {
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${keyWord}&include_adult=false&language=en-US&page=1`, options)
    const data = await response.json()

    return data.results
  } catch (error) {
    if (error instanceof Error) {

      return error.message
    }

    throw new Error('Unknown error while fetching movies.')
  }
}

export async function getMovieDetailsFromAPI(movieId: number): Promise<TMovieDetail | string> {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
      options,
    )
    const data = await response.json()

    return data
  } catch (error: unknown) {
    if (error instanceof Error) {

      return error.message
    }
    
    throw new Error('Unknown error while fetching movie details.')
  }
}
