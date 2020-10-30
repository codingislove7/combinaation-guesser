// selectors
const gameArea = document.querySelector(".game");
const button = document.querySelector("#button");
const guess = document.querySelector(".guess");
// default gamePlay
let gamePlay = false;
// hold score
let score = 0;
// listen on start
button.addEventListener("click", function () {
  // check if we don't have any game started
  if (!gamePlay) {
    // start the game
    gamePlay = true;
    // change start button text
    button.innerHTML = "Start Combination";
    // set combo message
    guess.innerHTML = "Guess Combo"
    // clear game area
    gameArea.innerHTML = "";
    // run maker function
    maker();
  } else {
    // hold correct guess
    let win = 0;
    // update score (guess)
    score++;
    guess.innerHTML = "Guess: " + score;
    // select all inputs
    const numbers = document.querySelectorAll(".input");
    // loop in inputs
    for (const x of numbers) {
      // if numbers are match
      // set the color to green
      if (x.value == x.correct) {
        x.style.backgroundColor = "rgb(6, 158, 6)";
        x.style.color = "white";
        win++;
      } else {
        // if numbers is > set the color to blue else red
        let color = x.value > x.correct ? "rgb(5, 144, 224)" : "rgb(185, 0, 0)";
        x.style.backgroundColor = color;
        x.style.color = "white";
      }
      // if win
      if (win == numbers.length) {
        // show the result
        guess.innerHTML = "You Solved the Combo in " + score + " Guess.";
        // update button text
        button.innerHTML = "Restart the Game";
        // restart the game
        gamePlay = false
        win = 0;
      }
    }
  }
});

// make 4 input element
function maker() {
  for (let index = 0; index < 4; index++) {
    let el = document.createElement("input");
    el.setAttribute("type", "number");
    el.min = 0;
    el.max = 9;
    // set an attribute correct to a random number
    el.correct = Math.floor(Math.random() * 10);
    el.value = 0;
    el.size = 1;
    el.width = "200px";
    el.order = index;
    el.classList = "input text-center my-5 border border-info mx-1";
    gameArea.appendChild(el);
  }
}

