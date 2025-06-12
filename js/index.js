let container = document.querySelector(`.transactions-container`);
let result = document.querySelector(`#result`);

// Данные
let transactions = [1000, -200, -80, 300, -400, ];

// Функция отрисовки массива
function render() {
  container.innerHTML = ``;
  for(let i = 0; i < transactions.length; i++) {
    let transaction = transactions[i];
    let className;
    if(transaction > 0) {
      transaction = `+` + transaction
      className = ` list-group-item-success`;
    } else{
      transaction = `- ` + transaction * -1;
      className = ` list-group-item-danger`
    }
    container.innerHTML +=  `<li class="list-group-item ${className} d-flex justify-content-between align-items-center">
     ${transaction}
    
</li>
`;``
  }
    
}


// Функция суммы всех транзакций
function countSum() {
  let sum = 0;
  for(let i = 0; i < transactions.length; i++) {
    let transaction = transactions[i];
    sum += transaction;
  } 
  result.innerHTML = sum;

}

function getRandomInt(min, max) {
  let number = Math.floor(Math.random() * (max - min) + min);
  return number
}

// Отрисовка начального списка
render();
// Вывод суммы транзакций
countSum();


result.addEventListener(`click`, function() {
let i = getRandomInt(-100, 100);
transactions.push(i);
result.innerHTML = i;
render();



  
});