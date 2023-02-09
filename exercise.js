/*Starting with the previous exercise, write a method that recover the data saved in `localStorage` and print them in the console*/

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
          console.log(JSON.parse(localUser))
      }
  }
  
  saveUser();