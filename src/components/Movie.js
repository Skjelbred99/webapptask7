const Movie = ({ movie }) => (
  <section className="movieItem">
    <h1>{movie.title}</h1>
    <figure>
      <img src={movie.poster} alt="movie-poster" />
    </figure>
    <h3>{movie.year}</h3>
  </section>
)

export default Movie
