async function loadFighters() {
	// Запрашиваем JSON-файл с сервера
	const response = await fetch("fighters.json");

	// Преобразуем JSON в объект JavaScript
	const data = await response.json();

	console.log(data);

	// Передаём полученный массив функции вывода таблицы
	renderSquad(data.squad);
}

loadFighters()

function renderSquad(squad) {
	// Находим HTML-элемент tbody
	const tbody = document.querySelector("#fighters");

	// Очищаем таблицу
	tbody.replaceChildren()

	// Перебираем бойцов
	for (const fighter of squad) {
		const row = document.createElement("tr");

		// Перебираем свойства очередного бойца и записываем в строку таблицы
		for (const value of [
			fighter.name,
			fighter.age,
			fighter.draftCity,
			fighter.rank,
			fighter.role
		]) {
			const cell = document.createElement("td");
			cell.textContent = value;
			row.append(cell);
		}

		// Добавляем готовую строку в таблицу
		tbody.append(row);

		// повторяем цикл, пока не обрабботаем все объекты массива
	}
}

// Запускаем загрузку данных
loadFighters();
