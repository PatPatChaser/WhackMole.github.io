import { randomHole, randomTime, updateScore } from "./utils.js";
import showHammerDiv from "./hammerAnim.js";

const gameDuration = 10;
let timeUp = false;
let score = 0;

const moles = [
  $(".mole-1"),
  $(".mole-2"),
  $(".mole-3"),
  $(".mole-4"),
  $(".mole-5"),
  $(".mole-6"),
  $(".mole-7"),
  $(".mole-8"),
  $(".mole-9"),
];

const startGame = () => {
  $("#start-button").css("opacity", "0.5");
  $("#start-button").css("pointer-events", "none");
  timeUp = false;
  score = 0;
  updateScore(score);
  setTimeout(peep, 1000);
  setTimeout(() => (timeUp = true), gameDuration * 1000);
};

const endGame = () => {
  $("#start-button").css("opacity", "1");
  $("#start-button").css("pointer-events", "auto");
};

const peep = () => {
  const time = randomTime(500,1500);
  const hole = randomHole(moles);
  moles[hole].addClass("up");
  moles[hole].css("pointer-events", "auto");
  setTimeout(() => {
    moles[hole].removeClass("up");
    if (!timeUp) peep();
    else endGame();
  }, time);
};

const hit = (e) => {
  score++;
  updateScore(score);
  showHammerDiv($(e.target).parent().children(".hammer-div"));
  $(e.target).removeClass("up");
  $(e.target).css("pointer-events", "none");
};

updateScore(score);
$("#start-button").click(startGame);
moles.forEach((mole) => mole.click(hit));
