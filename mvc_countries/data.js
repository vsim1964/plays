export async function loadCountries() {
  const response = await fetch("./countries.json", {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`Ошибка загрузки: ${response.status}`);
  }

  const data = await response.json();

  if (!Array.isArray(data.countries)) {
    throw new Error("Некорректная структура данных");
  }

  return data.countries;
}
