async function loadFighters() {
	// Запрашиваем файл с сервера
	const response = await fetch("fighters.json")

	// Преодразуем JSON в объект JavaScript
	const data = await response.json()

	console.log(data);
}

loadFighters()

function renderSquad(squad) {
	// Берём таблицу
	const tbody = document.querySelector("#fighters");
	// Метод DOM
	tbody.replaceChildren();



	for (const fighter of fighters) {
		const row = document.createElement("tr");

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

		tbody.append(row);
	}
}




renderSquad(data.squad)
