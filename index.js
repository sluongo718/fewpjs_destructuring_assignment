const farmAnimals = 'cow horse sheep pig chicken';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};

const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};

// Strings
// const dogsName = 'Sir Woody BarksALot'
// const [title, firstName, lastName] = 'Sir Woody BarksALot'.split(' ')
// console.log(title, firstName, lastName) // Sir Woody BarksALot 
// 1. Use destructuring to assign appropriate variables based on the sounds animals make.
    const [moo, neigh, baa, oink, cluck] = farmAnimals.split(" ")
    const [bessie, , dolly, babe, little] = farmAnimals.split(" ")
    const [blackAndWhite, , black, pink, ] = farmAnimals.split(" ")

// 2. Bolt the horse wandered off, so just give us four animals, and let's name them bessie, dolly, babe, and little.

// 3. Little the chicken had to go back to the coop, so now we're left with three. Let's use color variables of blackAndWhite, black, and pink.

// Arrays

// const dogs = ['Great Pyrenees', 'Pug', 'Bull Mastiff']
// const [medium, small, giant] = dogs
// console.log(medium, small, giant) // Great Pyrenees, Pug, Bull Mastiff 

// 4. Use destructuring to assign appropriate variables using the color names.
    const [red, orange, yellow, green, blue, indigo, violet] = colors
    const [r, o, y, g, b, i, v] = colors
    const [, , , , ,indg ,] = colors
// 5. Some people have a really hard time picking out indigo, so let's leave that one out, using the first letter of each color as the variable names.

// 6. But wait! Indigo is now feeling *super* left out. Let's only assign indigo using indg. 

// Objects

// const doggie = {
//   first: 'Buzz',
//   breed: 'Great Pyrenees',
//   fur_color: 'black and white',
//   activity_level: 'sloth-like',
//   favorite_food: 'hot_dogs'
// };

// const { first, breed } = doggie;


// 7. Use destructuring to assign all variables using the keys as the variable names
      const {muppetName, color, song, job, partner } = muppet

// 8. Use destructuring to assign songs 2 and 4, and Kermit's job and partner
// const doggie = {
//   first: 'Buzz',
//   breed: 'Great Pyrenees',
//   fur_color: 'black and white',
//   activity_level: 'sloth-like',
//   favorite_foods: {
//     meats:{
//       ham: 'smoked',
//       hot_dog: 'oscar_meyer',
//     },
//     cheeses:{
//       american: 'kraft'
//     }
//   }
// };

// const { ham, hot_dog } = doggie.favorite_foods.meats;
// console.log(ham); 
// console.log(hot_dog); 

const {song2, song4} = nestedMuppet.album.theMuppetMovie;
const {nestedJob, nestedPartner} = nestedMuppet
 