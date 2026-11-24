async function getNumber() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return 5;
}

const result = getNumber();

console.log("Сразу после вызова:", result);

result.then((value) => {
  console.log("Через 2 секунды:", value);
});

/*
Что происходит?
1. getNumber() запускается и возвращает Promise. Этот объект сохраняется в переменной result.
2. result.then(...) регистрирует функцию, которую следует вызвать после успешного завершения Promise.
3. Через две секунды getNumber() выполняет return 5. Связанный с ней Promise переходит в состояние fulfilled со значением 5.
4. JavaScript вызывает функцию, переданную методу then(), и передаёт ей число 5.

- result — переменная, содержащая Promise.
- .then() — метод этого Promise.
- (value) => { ... } — стрелочная функция, которую мы передаём методу.
- value — параметр этой функции. JavaScript автоматически передаст в него результат успешного завершения Promise, то есть 5.
Название value мы придумали сами. Можно написать: number
*/
