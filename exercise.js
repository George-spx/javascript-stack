/*Starting from the previous exercise, we want to add to our function `repeatHello`, a `clearInterval` after 5 seconds, could you do that?*/

function repeatHello(callback) {
    let id = setInterval(callback, 1000);
    setTimeout(() => clearInterval(id), 5000)
  }
  
  repeatHello(() => console.log("Hello"));