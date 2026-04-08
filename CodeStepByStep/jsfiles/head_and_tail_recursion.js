function colors() {
  let data = 20;
  console.warn(data);
  if (false) {
    console.warn(data * 20);
  } else {
    console.warn(data / 20);
  }
}
function days() {
  colors();
}
function fruits() {
  days();
}
function topFunction() {
  fruits();
}
topFunction();
