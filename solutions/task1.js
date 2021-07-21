const START_VALUE = 5;
const MANIAC_VALUE = 1;
const GOOD_DRIVER_VALUE = 3;
const BEGINNER_VALUE = 5;
const MIN_VALUE = 1;
const MAX_VALUE = 5;

const car = {
  abs: START_VALUE,
  traction: START_VALUE,
  stability: START_VALUE,
  setABS(num) {
    console.log(`ABS:${num}`);
    this.abs = num;
  },
  setTraction(num) {
    console.log(`Traction Control:${num}`);
    this.traction = num;
  },
  setStability(num) {
    console.log(`Stability Control:${num}`);
    this.stability = num;
  },
};

function randomLevel(min, max) {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}
function getMax(obj) {
  return Math.max(...Object.keys(obj));
}
function getMin(obj) {
  return Math.min(...Object.keys(obj));
}
class Game {
  constructor(params) {
    this.car = params.car;
    this.level = params.level;
    this.abs = params.abs;
    this.traction = params.traction;
    this.stability = params.stability;
  }

  start() {
    switch (this.level) {
      case 'maniac':
        this.maniac();
        break;
      case 'goodDriver':
        this.goodDriver();
        break;
      case 'beginner':
        this.beginner();
        break;
      default:
        this.car.setABS(this.abs);
        this.car.setTraction(this.traction);
        this.car.setStability(this.stability);
    }
  }

  beginner() {
    console.log('Beginner settings: ');
    this.setAllSettings(BEGINNER_VALUE);
  }

  goodDriver() {
    console.log('Good Driver settings: ');
    this.setAllSettings(GOOD_DRIVER_VALUE);
  }

  maniac() {
    console.log('Maniac settings: ');
    this.setAllSettings(MANIAC_VALUE);
  }

  setAllSettings(num) {
    this.car.setABS(num);
    this.car.setTraction(num);
    this.car.setStability(num);
  }
}

function init() {
  // start game settings
  const levelSettings = {
    0: '',
    1: 'maniac',
    2: 'goodDriver',
    3: 'beginner',
  };

  const abs = randomLevel(MIN_VALUE, MAX_VALUE);
  const traction = randomLevel(MIN_VALUE, MAX_VALUE);
  const stability = randomLevel(MIN_VALUE, MAX_VALUE);
  const level = randomLevel(getMin(levelSettings), getMax(levelSettings));
  console.log(`abs=${abs} traction=${traction} stability=${stability} level=${levelSettings[level]}`);
  // end game settings

  const game = new Game({
    car,
    level: levelSettings[level],
    abs,
    traction,
    stability,
  });
  game.start();
}

init();
