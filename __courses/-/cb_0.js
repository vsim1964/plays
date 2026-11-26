// Объявление функций

function getUser(callback) {
  setTimeout(() => {
    const user = { id: 1, name: "Иван" };
    callback(user);
  }, 1000);
}

function getOrders(user, callback) {
  setTimeout(() => {
    const orders = [100, 200, 300];
    callback(orders);
  }, 1000);
}

function calculateTotal(orders, callback) {
  setTimeout(() => {
    const total = orders.reduce((sum, price) => sum + price, 0);
    callback(total);
  }, 1000);
}

// Основной сценарий

console.log("Начало программы");

getUser(function (user) {
  console.log(user);

  getOrders(user, function (orders) {
    console.log(orders);

    calculateTotal(orders, function (total) {
      console.log(total);
    });
  });
});

console.log("Конец основного сценария");
