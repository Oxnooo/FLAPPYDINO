const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const img = new Image();
img.src = "images/flappy-bird-set.png";

// variables
let gamePlaying = false;
const gravity = .5;
const speed = 6.2;
const size = [51, 36];
const jump = -11.5;
const cTenth = (canvas.width / 10);

let index = 0,
    bestScore = 0, 
    flight, 
    flyHeight, 
    currentScore, 
    pipe;

// paramétre des pipes
const pipeWidth = 78;
const pipeGap = 270;
const pipeLoc = () => (Math.random() * ((canvas.height - (pipeGap + pipeWidth)) - pipeWidth)) + pipeWidth;

const setup = () => {
  currentScore = 0;
  flight = jump;

  // initialisation du flyHeight
  flyHeight = (canvas.height / 2) - (size[1] / 2);

  // paramétrage des 3 premiers pipes
  pipes = Array(3).fill().map((a, i) => [canvas.width + (i * (pipeGap + pipeWidth)), pipeLoc()]);
}