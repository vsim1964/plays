// Учебные массивы для практики JavaScript и Lodash.
// Подключение в HTML: <script src="arrays.js"></script>
// Все переменные объявлены через const. Содержимое массивов и объектов можно изменять.

// 1. Числа
const numbers = [12, 45, 7, 89, 23, 45, 16, 7, 100, 34];

// 2. Города
const cities = [
  "Москва", "Париж", "Лондон", "Рим", "Берлин", "Париж", "Стамбул", "Вена"
];

// 3. Значения разных типов
const mixed = [42, "JavaScript", true, null, undefined, false, 3.14, "История"];

// 4. Товары
const products = [
  { id: 1, name: "Ноутбук", price: 85000, category: "Электроника", stock: 8 },
  { id: 2, name: "Мышь", price: 1200, category: "Аксессуары", stock: 25 },
  { id: 3, name: "Клавиатура", price: 3500, category: "Аксессуары", stock: 12 },
  { id: 4, name: "Монитор", price: 22000, category: "Электроника", stock: 0 },
  { id: 5, name: "Наушники", price: 5800, category: "Аудио", stock: 17 },
  { id: 6, name: "Колонки", price: 9200, category: "Аудио", stock: 0 }
];

// 5. Исторические события
const events = [
  { id: 1, title: "Основание Константинополя", year: 330, region: "Византия" },
  { id: 2, title: "Падение Западной Римской империи", year: 476, region: "Европа" },
  { id: 3, title: "Коронация Карла Великого", year: 800, region: "Европа" },
  { id: 4, title: "Первый крестовый поход", year: 1096, region: "Европа" },
  { id: 5, title: "Взятие Константинополя", year: 1453, region: "Османская империя" },
  { id: 6, title: "Открытие Америки Колумбом", year: 1492, region: "Америка" }
];

// 6. Сотрудники
const employees = [
  { name: "Анна", department: "Продажи", salary: 65000, active: true },
  { name: "Борис", department: "IT", salary: 110000, active: true },
  { name: "Вера", department: "Продажи", salary: 72000, active: false },
  { name: "Глеб", department: "IT", salary: 125000, active: true },
  { name: "Дарья", department: "Бухгалтерия", salary: 85000, active: true },
  { name: "Елена", department: "Продажи", salary: 68000, active: true }
];

// 7. Двумерный массив
const matrix = [
  [10, 20, 30],
  [40, 50, 60],
  [70, 80, 90],
  [100, 110, 120]
];

// 8. Ученики и их оценки
const students = [
  { name: "Алексей", group: "А", grades: [5, 4, 5, 3, 4] },
  { name: "Мария", group: "Б", grades: [5, 5, 5, 4, 5] },
  { name: "Игорь", group: "А", grades: [3, 4, 3, 4, 3] },
  { name: "Ольга", group: "Б", grades: [4, 5, 4, 5, 4] }
];

// 9. Заказы с вложенными списками товаров
const orders = [
  {
    id: 101,
    customer: "Иван",
    status: "completed",
    items: [
      { product: "Ноутбук", price: 85000, quantity: 1 },
      { product: "Мышь", price: 1200, quantity: 2 }
    ]
  },
  {
    id: 102,
    customer: "Мария",
    status: "pending",
    items: [
      { product: "Монитор", price: 22000, quantity: 2 },
      { product: "Клавиатура", price: 3500, quantity: 1 }
    ]
  },
  {
    id: 103,
    customer: "Иван",
    status: "completed",
    items: [
      { product: "Наушники", price: 5800, quantity: 3 }
    ]
  }
];

// 10. Книги со вложенными объектами и массивами
const books = [
  {
    id: 1,
    title: "Война и мир",
    author: { firstName: "Лев", lastName: "Толстой" },
    year: 1869,
    genres: ["Роман", "Историческая проза"],
    ratings: [5, 5, 4, 5, 4]
  },
  {
    id: 2,
    title: "Преступление и наказание",
    author: { firstName: "Фёдор", lastName: "Достоевский" },
    year: 1866,
    genres: ["Роман", "Психологическая проза"],
    ratings: [5, 4, 5, 5, 5]
  },
  {
    id: 3,
    title: "Мастер и Маргарита",
    author: { firstName: "Михаил", lastName: "Булгаков" },
    year: 1967,
    genres: ["Роман", "Фантастика", "Сатира"],
    ratings: [5, 5, 5, 4, 5]
  }
];

// 11. Многомерный массив-таблица

const table = [
  ["Имя", "Возраст", "Город"],
  ["Анна", 28, "Москва"],
  ["Иван", 34, "Казань"],
  ["Мария", 22, "Екатеринбург"],
];

export {
  numbers,
  cities,
  mixed,
  products,
  events,
  employees,
  matrix,
  students,
  orders,
  books,
  table
};
