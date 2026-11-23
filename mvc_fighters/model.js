import { fetchFighters } from "./data.js";

// MODEL: данные и правила их обработки. Никакого document или HTML.
let fighters = [];

export async function loadFighters() {
  const loaded = await fetchFighters();
  fighters = loaded;
  console.log("[MODEL] Сохранено бойцов:", fighters.length);
}

export function getRanks() {
  return [...new Set(fighters.map(fighter => fighter.rank))].sort((a, b) => a.localeCompare(b, "ru"));
}

export function getTotalCount() {
  return fighters.length;
}

export function getVisibleFighters(searchText = "", rank = "", sort = "default") {
  const query = searchText.trim().toLocaleLowerCase("ru");

  const result = fighters.filter(fighter => {
    const matchesText = [fighter.name, fighter.draftCity]
      .some(value => value.toLocaleLowerCase("ru").includes(query));
    const matchesRank = !rank || fighter.rank === rank;
    return matchesText && matchesRank;
  });

  if (sort === "name") result.sort((a, b) => a.name.localeCompare(b.name, "ru"));
  if (sort === "ageAsc") result.sort((a, b) => a.age - b.age);
  if (sort === "ageDesc") result.sort((a, b) => b.age - a.age);

  console.log("[MODEL] После обработки:", result.length);
  return result;
}
