/*Starting from the previous exercise, try to better handle all errors through the `Error` class and the `catch` method. Also add the `finally` method.*/

const isLogged = true;

const firstPromise = (isLogged) => {
  return new Promise((resolve, reject) => {
    isLogged ? resolve(Math.random()) : reject(new Error("User is not logged"));
  });
};

const secondPromise = (id) => {
    return new Promise((resolve, reject) => {
        (id > 0.5) ? resolve({name: "Jhon", age: 24}) : reject(new Error("User not found"))
    })
}

firstPromise(isLogged)
    .then(secondPromise)
    .then(console.log)
    .catch(console.error)
    .finally(() => console.log("Complete"))