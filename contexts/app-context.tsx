import { createContext } from 'react'
import { TMovie } from '../types'

export const AppContext = createContext({
  movies: null as TMovie[] | null,
  selectedMovie: null as TMovie | null,
  category: 'popular',
  setCategory: (category: 'popular' | 'top') => { },
  setSelectedMovie: (movie: TMovie) => { },
  setMovies: (movies: TMovie[]) => { },
})
