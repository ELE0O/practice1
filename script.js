'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов Вы уже просмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов Вы уже просмотрели?', '');
    }
}

//start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

function rememberMuFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
        b = prompt('Насколько Вы его ещениваете?', 0);

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;// didnt work
        console.log('Done');
    } else {
        console.log('Error');
        i--;
    }

    }
}

//rememberMuFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 5) { //Использвать switch здесь не удасться, поскольку он со строгим условием
        console.log('Вы нормальный человек.');
    } else if (personalMovieDB.count >= 5 && personalMovieDB.count < 10) {
        console.log('Есть подозрение, что Вы больны киноманией!');
    } else if (personalMovieDB.count >= 10) {
        console.log('Вы больны киноманией! Срочно попкорн!');
    } else {
        console.log('Произошла ошибка ввода');
    }
}

//detectPersonalLevel();

function showMyDB(hidden) {
   if (!hidden) {
       console.log(personalMovieDB);
   }
}

//showMyDB(personalMovieDB.private);

function writeYourGenres() {
    for (let i = 1;i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}

writeYourGenres();

console.log(personalMovieDB);


