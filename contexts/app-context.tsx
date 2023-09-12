import { createContext } from 'react'
import { TMovie } from '../@types'
import { TMovieDetail } from '../@types/movie'

export const AppContext = createContext({
  movie: null as TMovieDetail | null,
  movies: null as TMovie[] | null,
  selectedMovie: null as TMovie | null,
  category: 'popular',
  visible: false,
  setMovie: (movie: TMovieDetail | null) => { },
  setCategory: (category: 'popular' | 'top') => { },
  setSelectedMovie: (movie: TMovie) => { },
  setMovies: (movies: TMovie[] | null) => { },
  setVisible: (visible: boolean) => { }
})
