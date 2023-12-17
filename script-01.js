
let counterValue = 0;

function updateCounter() {
  document.getElementById('counter').textContent = counterValue;
}

function increment() {
  counterValue++;
  updateCounter();
}

function decrement() {
  counterValue--;
  updateCounter();
}

updateCounter();
