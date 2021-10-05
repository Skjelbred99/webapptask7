import Movie from './Movie'

const Movies = ({ movies }) =>
  movies.map((movie) => {
    console.log(1)
    return (
      <Movie
        key={Math.random(Math.floor) * 100000}
        movie={movie}
        title={movie.title}
        poster={movie.poster}
        year={movie.year}
      />
    )
  })
export default Movies
