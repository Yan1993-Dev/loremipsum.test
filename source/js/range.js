const valueCounter = document.querySelector(".number-js");

function update(input) {
  const value = input.value;
  valueCounter.textContent = `${value}%`;
}