'use strict';

let numberOfFilms;

function start() {
	numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

	while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
		numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
	}
}

start();

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	jenres: [],
	privat: false,
};



function rememberMyFilms() {
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
}

rememberMyFilms();

function detectPersonalLevel() {
	if (personalMovieDB.count < 10) {
		alert("Просмотрено довольно мало фильмов");
	} else if (personalMovieDB.count < 30 && personalMovieDB.count >= 10) {
		alert("Вы классический зритель");
	} else if (personalMovieDB.count >= 30) {
		alert("Вы киноман");
	} else {
		alert("Произошла ошибка");
	}
}

detectPersonalLevel();

function showMyDB(obj) {
	if (!obj.privat) {
		console.log(obj);
	}
	return;
}

showMyDB(personalMovieDB);

function writeYourGenres(obj) {
	for(let i = 0; i < 3; i += 1) {
		const answer = prompt(`Ваш любимый жанр под номером ${i + 1}`, '');
		obj.jenres[i] = answer;
	}
}

writeYourGenres(personalMovieDB);


console.log(personalMovieDB);