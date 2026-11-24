import { fetchFighters } from "./data.js"; // Импортируем данные из data.js

// MODEL: данные и правила их обработки. Никакого document или HTML.
let fighters = []; // Массив для хранения бойцов

export async function loadFighters() {
  // Загрузка бойцов
  const loaded = await fetchFighters(); // Получаем данные из data.js
  fighters = loaded; // Сохраняем бойцов в массив
  console.log("[MODEL] Сохранено бойцов:", fighters.length); // Логируем количество бойцов
}

export function getRanks() {
  // Получение списка рангов бойцов
  return [...new Set(fighters.map((fighter) => fighter.rank))].sort((a, b) =>
    a.localeCompare(b, "ru")
  ); // Сортировка уникальных рангов
}

export function getTotalCount() {
  // Получение общего количества бойцов
  return fighters.length; // Возвращаем количество бойцов
}

export function getVisibleFighters(
  searchText = "",
  rank = "",
  sort = "default"
) {
  // Получение отфильтрованных бойцов
  const query = searchText.trim().toLocaleLowerCase("ru"); // Обработка поискового запроса

  const result = fighters.filter((fighter) => {
    // Фильтрация бойцов
    const matchesText = [fighter.name, fighter.draftCity] // Проверка на вхождение в имя или город
      .some((value) => value.toLocaleLowerCase("ru").includes(query)); //
    const matchesRank = !rank || fighter.rank === rank; // Проверка на соответствие рангу
    return matchesText && matchesRank; // Фильтрация
  });

  if (sort === "name")
    result.sort((a, b) => a.name.localeCompare(b.name, "ru")); // Сортировка по имени
  if (sort === "ageAsc") result.sort((a, b) => a.age - b.age); // Сортировка по возрасту
  if (sort === "ageDesc") result.sort((a, b) => b.age - a.age); // Сортировка по возрасту в обратном порядке

  console.log("[MODEL] После обработки:", result.length); // Логируем количество бойцов после обработки
  return result; // Возвращаем отфильтрованные бойцов
}


