let btn = document.querySelector("#jokeBtn");
let joke = document.getElementById("joke");

document.addEventListener("DOMContentLoaded", getJoke);

btn.addEventListener("click", getJoke);

 function getJoke() {
     fetch(`https://icanhazdadjoke.com/`, {
        headers: {
            'Accept' : 'application/json'
        } 
    }).then(data => data.json())
      .then(jokeNew => joke.innerHTML = jokeNew.joke)  
    
    // let jokeNew = await jokeData.json();
    // joke.innerHTML = jokeNew.joke;
    // console.log(jokeNew.joke);
}