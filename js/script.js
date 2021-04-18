const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	jenres: [],
	privat: false,
};

const firstMovie = prompt('Один из последних просмотренных фильмов?', '');
const firstMovieScore = prompt('На сколько оцените его?', '');

const secondMovie = prompt('Один из последних просмотренных фильмов?', '');
const secondMovieScore = prompt('На сколько оцените его?', '');

personalMovieDB.movies[firstMovie] = firstMovieScore;
personalMovieDB.movies[secondMovie] = secondMovieScore;

console.log(personalMovieDB);