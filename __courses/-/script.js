// function blockingTask() {
//   const start = Date.now();
//   while (Date.now() - start < 2000) {
//     // пустой цикл
//   }
//   console.log("Прошло 2 секунды и работа блокирующей функции завершена");
// }

// console.log("Начало программы");
// blockingTask();
// console.log("Работа кода продолжилась");
// console.log("Конец программы");

async function blockingTask() {
  const start = Date.now();

  while (Date.now() - start < 2000) {
    await new Promise((resolve) => setTimeout(resolve, 0));
  }

  console.log("Работа функции завершена");
}

console.log("Начало программы");

blockingTask();

console.log("Работа кода продолжилась");
console.log("Конец программы");
