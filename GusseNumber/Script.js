
let input=document.getElementById("input");
let btn=document.getElementById("btn");
let wrong=document.querySelector('.Wrong');
let Guess=document.getElementById("Guess");

let answer = Math.floor(Math.random() * 100) + 1;
let numGuesses = 0;

btn.addEventListener("click", () => {
    guessNumber();
  });
  
  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      guessNumber();
    }
  });
  //Guess Function
  function guessNumber() {
    if (input.value < 1 || input.value > 100 || isNaN(input.value)) {
      wrong.innerHTML = "Enter Between 1 to 100";
      setTimeout(()=>{
        resetGame(); //Calling reset function
      },5000)
    } else {
      numGuesses++;
      Guess.innerHTML = "No. of Guess : " + numGuesses;
      if (input.value > answer) {
        wrong.innerHTML = "You guessed too high!";
        input.value=""; //It will make the input value empty
      } else if (input.value < answer) {
        wrong.innerHTML = "You guessed too low!";
        input.value="";
      } else {
        wrong.innerHTML = "Congratulations! You guessed the correct number in " + numGuesses + " guesses!";
        btn.disabled = true;
        setTimeout(()=>{
          resetGame(); //Calling reset function
        },5000)
  
      }
    }
  }
 
  //reset function
  function resetGame() {
    numGuesses = 0;
    answer = Math.floor(Math.random() * 100) + 1;
    input.value = "";
    wrong.innerHTML = "";
    btn.disabled = false;
    Guess.innerHTML = "No. of Guess : 0";
  }
  