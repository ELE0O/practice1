const numberOfFilms = +prompt('How old are you?', '23');

const bussiinesss = {
    age: numberOfFilms,
    job: {},
    actors: {},
    genres: [],
    private: false
};

for (let i = 0; i < 2; i++) {
        const a = prompt('Whats your job?', ''),
        b = prompt('How much money do you make?', 0);

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        bussiinesss.job[a] = b;
        console.log('Done');
    } else {
        console.log('Error');
        i--;
    }

}

console.log(bussiinesss);


