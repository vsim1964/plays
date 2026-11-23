// DATA: единственное место, где приложение обращается к «серверу».
// fighters.json — статический файл, имитирующий ответ API.
export async function fetchFighters() {
  const response = await fetch("./fighters.json", { cache: "no-store" });

  if (!response.ok) {
    throw new Error(`HTTP ${response.status}: не удалось получить fighters.json`);
  }

  const data = await response.json();
  if (!Array.isArray(data.squad)) {
    throw new Error("Неверный формат JSON: ожидается массив squad");
  }
  console.log("[DATA] JSON получен:", data);
  return data.squad;
}
