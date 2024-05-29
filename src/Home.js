import React from 'react'
import { Movie } from './Movie'
import { MovieList } from './MovieList'

export const Home = () => {
  return (
    <>
    <div className='home-image' >
        <h1 className="header">Welcome to Movie Vault</h1>
        <h3>
          Explore nowMillions of movies, TV shows, and Anime to discover. 
        </h3>
    </div>
    
        <MovieList/>
        
    
    </>
  )
}
