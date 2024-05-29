import React, { useEffect, useState } from 'react'
import { Movie } from './Movie'

export const MovieList = () => {

    const [movie,setMovie]= useState([])
    const getMovies =()=>{
        fetch("https://65f16b87034bdbecc76270c5.mockapi.io/movie",{
            method:"GET",
        })
        .then((data)=> data.json())
        .then((mvs)=> setMovie(mvs))
    }
    console.log(movie)
    useEffect(()=>{
        getMovies()
    },[])
  return (
    <div className='movie-list'>
        {
            movie.map((list,index) =>(
                <div key={index}>
                    <Movie movieTake={list}/>
                </div>
            ))
        }
    </div>
  )
}





