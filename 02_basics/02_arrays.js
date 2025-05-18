const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros); // [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
// console.log(marvel_heros[3][2]);    // batman

// concat merges two array into a new array
const allheros = marvel_heros.concat(dc_heros)
// console.log(allheros);  // [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

// spread operator
const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros)

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);

// console.log(Array.isArray("Abhinav"));
// console.log(Array.from("Abhinav"));
// console.log(Array.from({name : "Abhinav"}));    // interesting

const score1 = 100
const score2 = 200
const score3 = 300

const real_score = Array.of(score1, score2, score3)
console.log(real_score);











