'use strict';

const personalMovieDB = {
	count: 0,
	movies: {},
	actors: {},
	jenres: [],
	privat: false,
	start: function() {
			this.count = prompt('Сколько фильмов вы уже посмотрели?', '');

		while (this.count == '' || this.count == null || isNaN(this.count)) {
			this.count = prompt('Сколько фильмов вы уже посмотрели?', '');
	}
	},
	rememberMyFilms: function() {
		for (let i = 0; i < 2; i +=1) {
			const whatMovie = prompt('Один из последних просмотренных фильмов?', '');
			const whatMovieScore = prompt('На сколько оцените его?', '');
		
			if (whatMovie != null && whatMovieScore != null && whatMovie != '' &&
			 whatMovieScore != '' && whatMovie.length < 50 && whatMovieScore.length < 50) {
				this.movies[whatMovie] = whatMovieScore;
				console.log('done');
			} else {
				console.log('error');
				i -=1;
			}
		}
	},
	detectPersonalLevel: function() {
		if (this.count < 10) {
			alert("Просмотрено довольно мало фильмов");
		} else if (this.count < 30 && this.count >= 10) {
			alert("Вы классический зритель");
		} else if (this.count >= 30) {
			alert("Вы киноман");
		} else {
			alert("Произошла ошибка");
		}
	},
	showMyDB: function() {
		if (!this.privat) {
			console.log(this);
		}
		return;
	},
	writeYourGenres: function() {
		for(let i = 0; i < 3; i += 1) {
			const answer = prompt(`Ваш любимый жанр под номером ${i + 1}`, '');
			if (answer === null || answer === '') {
				console.log('Введены некорректные данные или нет данных. Пожалуйста попробуйте снова');
				i -=1;	
			} else {
				this.jenres[i] = answer;
			}
		}
		this.jenres.forEach((item, index) => {
			console.log(`Любимый жанр ${index + 1} - это ${item}`);
		});
	},
	toggleVisibleMyDB: function() {
		if (!this.privat) {
			this.privat = true;
		} else {
			this.privat = false;
		}
	}
};


 personalMovieDB.start();
 personalMovieDB.rememberMyFilms();
 personalMovieDB.detectPersonalLevel();
 personalMovieDB.showMyDB();
 personalMovieDB.writeYourGenres();
 personalMovieDB.toggleVisibleMyDB();

 console.log(personalMovieDB);