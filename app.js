const game = {
    party: [],
    gyms: [
      { location: "Pewter City", completed: false, difficulty: 1 },
      { location: "Cerulean City", completed: false, difficulty: 2 },
      { location: "Vermilion City", completed: false, difficulty: 3 },
      { location: "Celadon City", completed: false, difficulty: 4 },
      { location: "Fuchsia City", completed: false, difficulty: 5 },
      { location: "Saffron City", completed: false, difficulty: 6 },
      { location: "Cinnabar Island", completed: false, difficulty: 7 },
      { location: "Viridian City", completed: false, difficulty: 8 },
    ],
    items: [
      { name: "potion", quantity: 4 },
      { name: "pokeball", quantity: 8 },
      { name: "rare candy", quantity: 99 },
    ],
   collection: [

   ]
    }
  

 // Exercise 1
  //console.dir(pokemon, { maxArrayLength: null })


console.log(pokemon[58].name);

 // Exercise 2
//console.log(game)

/*
Exercise 3
1. Add a new property to the `game` object. Let's call it "difficulty".
2. Choose a value for "difficulty" that you think fits the game. Ex: "Easy", "Med" or "Hard". How would you assign it?
Solve Exercise 3 here:
*/

game.difficulty = "Easy";
console.log(game.difficulty);
console.log(game)

/*
Exercise 4
1. Select a starter Pokémon from the `pokemon` array. Remember, a starter Pokémon's `starter` property is true.
2. Add this Pokémon to the `game.party` array. Which array method will you use to add them?
Solve Exercise 4 here:
*/

const starterPok = pokemon.find(element => element.starter === true);
console.log(starterPok);

game.party.push(starterPok);
console.log(game.party);

/*
Exercise 5
1. Choose three more Pokémon from the `pokemon` array and add them to your party.
2. Consider different attributes like 'type' or 'HP' for your selection. Which array method will you use to add them?
Solve Exercise 5 here:
*/

game.party.push(pokemon[16]);
game.party.push(pokemon[123]);
game.party.push(pokemon[149]);

/*
Exercise 6
1. Set the `completed` property to true for gyms with a difficulty below 3.
2. Think about how you'd loop through the `gyms` array to check and update the `completed` property.

Solve Exercise 6 here:
*/

game.setoComplete = function (){
    this.gyms.forEach(element2 => {
        if (element2.difficulty < 3) {
            element2.completed = true; // == is for comparison operator, while = is to assign a value
        }
    });
}
game.setoComplete();
console.log(game);

/*\\\
Exercise 7
1. Evolve the starter Pokémon you added to your party earlier. Each starter Pokémon evolves into a specific one.
2. How would you replace the current starter Pokémon in your party with its evolved form?

Hint: 
  - Pokemon 1: Bulbasaur evolves into Pokemon 2: Ivysaur
  - Pokemon 4: Charmander evolves into Pokemon 5: Charmeleon
  - Pokemon 7: Squirtle evolves into Pokemon 8: Wartortle
  - Pokemon 25: Pikachu evolves into Pokemon 26: Raichu

More Hints: The existing starter Pokemon will be *replaced* in your party with the Pokemon it evolved into. When working with an array of objects, the splice() array method is ideal for replacing one element with another. 
Solve Exercise 7 here:
*/

// game.evolve = function (){
//     this.party.forEach((element3, index) => {
//         if (element3.starter === true) {
//             element3.splice(0,1, `pokemon[${index+1}]`);
//         }
//     });
// }


game.evolve =  function (){ 
   this.party.forEach((e, i) => {
        if (e.starter === true){
            this.party.splice(i, 1, pokemon[i+1])
        }
    });
}
game.evolve();
console.log(game.party)

/*
Exercise 8
1. Print the name of each Pokémon in your party.
2. Consider using a loop or an array method to access each Pokémon's name.

Solve Exercise 8 here:
*/

game.printNames = function () {
    this.party.forEach( poke => {
        console.log(poke.name);
    });
};

game.printNames();

/*
Exercise 9
1. Can you print out all the starter Pokémon from the `pokemon` array?
2. Think about how you can identify a starter Pokémon and then log their names.


Solve Exercise 9 here:
*/

pokemon.printStarters = function () {
    this.forEach(poke => {
        if (poke.starter == true) {
            console.log(poke.name)
        }
    });
}
pokemon.printStarters();


/*
Exercise 10
1. Add a method called `catchPokemon` to the `game` object. This method should:
  - Accept an object as a parameter called `pokemonObj`
  - Add the `pokemonObj` to the `game.party` array.
  - not return anything

After writing this method, call it and pass in a Pokemon object of your choice from the `pokemon` data to catch it.

Solve Exercise 10 here:
*/
game.catchPokemon = function (pokemonObj) {
    game.party.push(pokemonObj);

}


/*
Exercise 11
1. Copy the `catchPokemon` method that you just wrote above, and paste it below. Modify it so that it also decreases the number of pokeballs in your inventory each time you catch a Pokémon.
2. How will you find and update the quantity of pokeballs in the `game.items` array?

Tips:
For this exercise, it's okay to have a negative number of pokeballs.
After updating the method, call it and pass in a Pokemon object of your choice from the `pokemon` data to catch it.
Also, log the `game.items` array to confirm that the pokeball quantity is being decremented.

Solve Exercise 11 here:
*/

// game.catchPokemon = function (pokemonObj) {
//     game.party.push(pokemonObj);

//     this.party.forEach( poke => {
//         console.log(poke.name);
//     });
// };

// game.catchPokemon();


/*
Exercise 12
1. Similar to Exercise 6, now complete gyms with a difficulty below 6. How will you approach this?
 (change the value of `complete` in the qualifying objects from false to true).

Solve Exercise 12 here:
*/


game.setoComplete = function (){
    this.gyms.forEach(element4 => {
        if (element4.difficulty < 6) {
            element4.completed = true; // == is for comparison operator, while = is to assign a value
        }
    });
}
game.setoComplete();
console.log(game);

/*
Exercise 13
1. Create a `gymStatus` method in `game` to tally completed and incomplete gyms.
2. How will you iterate through the `gyms` array and update the tally? Remember to log the final tally.

This method should:
  - Not accept any arguments.
  - Initially create a constant `gymTally`, which is an object that has two 
    properties: `completed` and `incomplete`, both of which are initially set to 0.
  - Iterate through the objects in the `game.gyms` array and update the 
    properties on `gymTally` as follows: 
    - `completed` should count how many gyms in the array have a value of `true` 
      for their `completed` property. 
    - `incomplete` should count how many gyms in the array have a value of 
      `false` for their `completed` property.
  - Log the value of `gymTally`.
  - The method should not return anything.

For example, if five gym objects have a value of `true` on their `completed` property and three gym objects have a value of `false` on their `completed` property, the logged value would be: `{ completed: 5, incomplete: 3 }`.

Solve Exercise 13 here:
*/

game.gymStatus = function () {
    const gymTally = {complete: 0, incomplete: 0};
    for (let i = 0; i < this.gyms.length; i++) {
        if (this.gyms[i].completed === true){ 
            gymTally.complete += 1;
        } else {
            gymTally.incomplete = +1;
        }
    
    }
    console.log(`complete: ${gymTally.complete}, incomplete: ${gymTally.incomplete}`);
}

game.gymStatus();


/*
Exercise 14
1. Add a `partyCount` method to `game` that counts the number of Pokémon in your party.

This method should:
  - Not accept any arguments.
  - Count the number of Pokemon in the party.
  - return the found number of Pokemon in the party.

Solve Exercise 14 here:
*/


game.partyCount = function (){
            return game.party.length;
        }
console.log(game.partyCount());

/*
Exercise 15
1. Now, complete gyms with a difficulty below 8. Reflect on how this is similar to or different from the previous gym exercises.
(change the value of `complete` in the qualifying objects from false to true).

Solve Exercise 15 here:
*/

game.setoComplete = function (){
    this.gyms.forEach(e => {
        if (e.difficulty < 8) {
            e.completed = true; // == is for comparison operator, while = is to assign a value
        }
    });
}
game.setoComplete();
console.log(game);


/*
Exercise 16
1. Log the entire `game` object to the console. Take a moment to review the changes you've made throughout the exercises.


Solve Exercise 16 here:
*/

console.log(game);

/*
Exercise 17
1. Arrange the Pokémon in `game.party` by their HP. The one with the highest HP should come first.
2. You'll need to use the `.sort()` method. How does the compare function work in sorting numbers?


Solve Exercise 17 here:
*/

game.partySort = function (){
    return this.party.sort((a, b) => {
        return b.hp - a.hp
    });
}
console.log(game.partySort());

/*
Exercise 18
Add a new property to the `game` object called `collection` and initialize its value to an empty array.

Copy the `catchPokemon` method you wrote in Exercise Twelve and paste it below. Modify it so that:
  - Ensure that no more than six Pokemon can be in the party at any time. 
    Excess Pokemon should be placed in the `game.collection` array.
  - It's up to you how to distribute Pokemon in a situation where more than six 
    would be placed into the `game.party` array.

Again, for this exercise, it's okay to have a negative number of pokeballs.

After updating the method, use it by calling it and passing in a pokemon object of your choice from the `pokemon` data to catch it.

Also, log the `game.items` array to confirm that the pokeball quantity is being decremented.

Solve Exercise 18 here:
*/

game.catchPokemon = function (pokemonObj) {
    this.party.push(pokemonObj);
    
    this.party.forEach((e,i) => {
        if (this.party.length >6) {
    
             this.collection.push(this.party[i])
            }      
        
    });

    }    
   game.party.forEach( poke => {
        console.log(poke.name);
    });

    game.catchPokemon(pokemon[39])
    game.catchPokemon(pokemon[24])
    game.catchPokemon(pokemon[139])
console.log(game)





