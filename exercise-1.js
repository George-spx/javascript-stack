/**Create an object `person`. Print its key/value pair in the console. Try to use the method `Object.kyes`:*/
const person = {
  firstName: "Mario",
  lastName: "Rossi",
  age: 25,
};

for (key of Object.keys(person)) {
  console.log(key, ":", person[key]);
}
