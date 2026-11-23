import { loadFighters, getRanks, getTotalCount, getVisibleFighters } from "./model.js";
import { bindEvents, readFilters, renderRanks, renderFighters, renderCounter, showStatus, setLoading } from "./view.js";

// CONTROLLER: связывает действия пользователя, модель и представление.
function updateScreen() {
  const filters = readFilters();
  const visible = getVisibleFighters(filters.search, filters.rank, filters.sort);

  console.log("[CONTROLLER] Обновляем представление");
  renderFighters(visible);
  renderCounter(visible.length, getTotalCount());
}

async function reloadData() {
  setLoading(true);
  showStatus("Читаем fighters.json…");
  try {
    await loadFighters();
    renderRanks(getRanks());
    updateScreen();
    showStatus("Данные успешно загружены из JSON");
  } catch (error) {
    console.error("[CONTROLLER] Ошибка загрузки:", error);
    showStatus("Ошибка: " + error.message, true);
  } finally {
    setLoading(false);
  }
}

export function startController() {
  bindEvents(updateScreen, reloadData);
  reloadData();
}
