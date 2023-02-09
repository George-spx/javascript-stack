/*In the `exercise.js` file, we find a `user` object. Write a function that saves the user object in `localStorage` with its 'user' key.*/

const user = {
  id: 1,
  name: "John",
  age: 3,
};

function saveUser(){
    let localUser = localStorage.getItem("user");
    if(localUser !== JSON.stringify(user)){
        localStorage.setItem("user", JSON.stringify(user));
    }else{
        console.log(localUser)
    }
}

saveUser();