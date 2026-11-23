// VIEW: только DOM и внешний вид страницы. Не обращается к JSON.
const tbody = document.querySelector("#fighters");
const searchInput = document.querySelector("#search");
const rankSelect = document.querySelector("#rank");
const sortSelect = document.querySelector("#sort");
const reloadButton = document.querySelector("#reload");
const counter = document.querySelector("#counter");
const status = document.querySelector("#status");
const emptyMessage = document.querySelector("#empty");

export function readFilters() {
  return { search: searchInput.value, rank: rankSelect.value, sort: sortSelect.value };
}

export function bindEvents(onFilterChange, onReload) {
  searchInput.addEventListener("input", onFilterChange);
  rankSelect.addEventListener("change", onFilterChange);
  sortSelect.addEventListener("change", onFilterChange);
  reloadButton.addEventListener("click", onReload);
}

export function renderRanks(ranks) {
  const previousRank = rankSelect.value;
  rankSelect.replaceChildren(new Option("Все звания", ""));
  for (const rank of ranks) rankSelect.add(new Option(rank, rank));
  rankSelect.value = ranks.includes(previousRank) ? previousRank : "";
}

export function renderFighters(fighters) {
  tbody.replaceChildren();

  fighters.forEach((fighter, index) => {
    const row = document.createElement("tr");
    const values = [
      index + 1, fighter.name, fighter.age,
      fighter.draftCity, fighter.rank, fighter.role
    ];

    for (const value of values) {
      const cell = document.createElement("td");
      cell.textContent = value;
      row.append(cell);
    }
    tbody.append(row);
  });

  emptyMessage.hidden = fighters.length !== 0;
  console.log("[VIEW] Нарисовано строк таблицы:", fighters.length);
}

export function renderCounter(visible, total) {
  counter.textContent = `Показано: ${visible} из ${total}`;
}

export function showStatus(message, isError = false) {
  status.textContent = message;
  status.classList.toggle("error", isError);
}

export function setLoading(loading) {
  reloadButton.disabled = loading;
  reloadButton.textContent = loading ? "Загрузка…" : "Загрузить JSON заново";
}
