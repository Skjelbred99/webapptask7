import React, { useState, useEffect } from 'react'
import Movies from './Movies'
import Search from './Search'

const Main = () => {
  const [search, setSearch] = useState('star wars')
  const [movies, setMovies] = useState([{ title: '', year: '', poster: '' }])

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://www.omdbapi.com/?s=${search}&apikey=616b2caa`
      )
      try {
        const data = await response.json()
        const newMovie = data.Search.map((movie) => ({
          title: movie.Title,
          year: movie.Year,
          poster: movie.Poster,
        }))

        // Vet oppgaven sa vis 5 men 6 ser mer symmetrisk ut :)
        // setMovies(newMovie.slice(5), ...movies) for å vise 5
        setMovies(newMovie.slice(4), ...movies)
      } catch (error) {
        console.log(`error: ${error}`)
      }
    }
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Console.logs "movies" every time the movie variable changes
  useEffect(() => {
    console.log(movies)
  }, [movies])

  const getMovies = async (e) => {
    e.preventDefault()
    const response = await fetch(
      `https://www.omdbapi.com/?s=${search}&apikey=616b2caa`
    )

    try {
      const data = await response.json()
      const newMovie = data.Search.map((movie) => ({
        title: movie.Title,
        year: movie.Year,
        poster: movie.Poster,
      }))

      setMovies(newMovie, ...movies)
    } catch (error) {
      console.log(`error: ${error}`)
    }
  }
  return (
    <>
      <header>Webapplikasjoner: Task 7</header>
      <body>
        <main>
          <Search getMovies={getMovies} search={search} setSearch={setSearch} />
          <section className="moviesGrid">
            <Movies movies={movies} />
          </section>
        </main>
      </body>
    </>
  )
}
export default Main
