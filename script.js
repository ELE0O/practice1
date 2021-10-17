const numberOfFilms = +prompt('How old are you?', '23');

const bussiinesss = {
    age: numberOfFilms,
    job: {},
    actors: {},
    genres: [],
    private: false
};

const a = prompt('Whats your job?', ''),
      b = prompt('How much money do you make?', 0),
      c = prompt('Why your salary so low?', ''),
      d = prompt('How much would you like to earn?', '');


bussiinesss.job[a] = b;
bussiinesss.job[c] = d;

console.log(bussiinesss);

