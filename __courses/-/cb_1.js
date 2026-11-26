// function first() {
//   console.log("Первая");
// }
// function second() {
//   console.log("Вторая");
// }
// function third() {
//   console.log("Третья");
// }

// first();
// second();
// third();

function first() {
  console.log("Начало первой");
  second();
  console.log("Конец первой");
}

function second() {
  console.log("Начало второй");
  third();
  console.log("Конец второй");
}

function third() {
  console.log("Начало третьей");
  console.log("Конец третьей");
}

first();
