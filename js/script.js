const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	jenres: [],
	privat: false,
};

for (let i = 0; i < 2; i +=1) {
	const whatMovie = prompt('Один из последних просмотренных фильмов?', '');
	const whatMovieScore = prompt('На сколько оцените его?', '');

	if (whatMovie != null && whatMovieScore != null && whatMovie != '' &&
	 whatMovieScore != '' && whatMovie.length < 50 && whatMovieScore.length < 50) {
		personalMovieDB.movies[whatMovie] = whatMovieScore;
		console.log('done');
	} else {
		console.log('error');
		i -=1;
	}
}

if (personalMovieDB.count < 10) {
	alert("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count < 30 && personalMovieDB.count >= 10) {
	alert("Вы классический зритель");
} else if (personalMovieDB.count >= 30) {
	alert("Вы киноман");
} else {
	alert("Произошла ошибка");
}



console.log(personalMovieDB);