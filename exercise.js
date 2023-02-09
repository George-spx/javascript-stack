/*Write a first `promise` that takes as parameter the variable `isLogged` found in the `exercise.js` file.
If the variable is true, then we return a random number from the resolve, otherwise we dispatch an error.
We write a second `promise` that takes a variable of type number as a parameter. If the input parameter is greater than 0.5, 
in the resolve we must return the following data: `{name: "John", age: 24}`, otherwise we must dispatch an `error`.
Once this is done, try to chain the promises to eventually return the final object `{name: "John", age: 24}`*/

const isLogged = true;

const firstPromise = (isLogged) => {
  return new Promise((resolve, reject) => {
    isLogged ? resolve(Math.random()) : reject("User is not logged");
  });
};

const secondPromise = (id) => {
    return new Promise((resolve, reject) => {
        (id > 0.5) ? resolve({name: "Jhon", age: 24}) : reject("User not found")
    })
}

firstPromise(isLogged)
    .then(secondPromise)
    .then(console.log)
    .catch(console.error)