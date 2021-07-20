function setABS(num) {
  console.log(`ABS:${num}`);
}
function setTraction(num) {
  console.log(`Traction Control:${num}`);
}
function setStability(num) {
  console.log(`Stability Control:${num}`);
}
function setAllSettings(num) {
  setABS(num);
  setTraction(num);
  setStability(num);
}
function beginner() {
  console.log("Beginner settings: ")
  setAllSettings(5);
}
function goodDriver() {
  console.log("Good Driver settings: ")
  setAllSettings(3);
}
function maniac() {
  console.log("Maniac settings: ")
  setAllSettings(1);
}

beginner();
goodDriver();
maniac();