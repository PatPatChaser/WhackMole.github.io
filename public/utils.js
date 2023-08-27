let prevHole = 0;
const randomHole = (moles) => {
  let index = Math.floor(Math.random() * moles.length);
  if (prevHole === index) {
    return randomHole(moles);
  }
  prevHole = index;
  return index;
};

const randomTime = () => {
  return Math.floor(Math.random() * 1000) + 100;
};

const updateScore = (score) => {
  let highScore = localStorage.getItem("highScore");
  if (highScore === null) highScore = 0;

  $("#score").text("Score: " + score);
  $("#high-score").text("High Score: " + highScore);
  if (score > highScore) {
    highScore = score;
    localStorage.setItem("highScore", highScore);
    $("#high-score").text("High Score: " + highScore);
  }
};

export { randomHole, randomTime, updateScore };
