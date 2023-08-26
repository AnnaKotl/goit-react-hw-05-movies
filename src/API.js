// 92ffd126667a269ee6cc7b4221abb134
// https://api.themoviedb.org/3/configuration
// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MmZmZDEyNjY2N2EyNjllZTZjYzdiNDIyMWFiYjEzNCIsInN1YiI6IjY0ZTlkMzNlMWZlYWMxMDBjNDZlZDEyMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.D9ELg0t2l4SK780noIQhpO7a1DBEuIUVwSLLBDTrq7s

// /trending/get-trending список найпопулярніших фільмів на сьогодні для створення колекції на головній сторінці.
// /search/search-movies пошук фільму за ключовим словом на сторінці фільмів.
// /movies/get-movie-details запит повної інформації про фільм для сторінки кінофільму.
// /movies/get-movie-credits запит інформації про акторський склад для сторінки кінофільму.
// /movies/get-movie-reviews запит оглядів для сторінки кінофільму.

// '/' – компонент Home, домашня сторінка зі списком популярних кінофільмів.
// '/movies' – компонент Movies, сторінка пошуку кінофільмів за ключовим словом.
// '/movies/:movieId' – компонент MovieDetails, сторінка з детальною інформацією про кінофільм.
// /movies/:movieId/cast – компонент Cast, інформація про акторський склад. Рендериться на сторінці MovieDetails.
// /movies/:movieId/reviews – компонент Reviews, інформація про огляди. Рендериться на сторінці MovieDetails.

