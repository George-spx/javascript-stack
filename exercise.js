/*Write a `promise`. If the variable called `number` is greater than 10, then it returns a resolve, otherwise it returns a reject.
Then manage the promise with `then` and `catch` in case of any reject.*/

const number = 15;
const checkNumber = () => {
  return new Promise((resolve, reject) => {
    number > 10 ? resolve(`${number} > 10`) : reject(`${number} < 10`)
  });
};

checkNumber()
    .then(console.log)
    .catch(console.error)
