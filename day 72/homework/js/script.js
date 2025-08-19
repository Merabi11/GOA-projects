const form = document.querySelector('form');
const tbody = document.querySelector('tbody');

let cars = [];

class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.id = Date.now();
  }
}

function deleteCar(id) {
  const carIndex = cars.findIndex((car) => car.id === id);
  cars.splice(carIndex, 1); // remove car from cars array

  render(cars); // render the table
}

function createCarElement(car) {
  // create tr
  const tr = document.createElement('tr');

  // Id Td
  const idTd = document.createElement('td');
  idTd.textContent = car.id;

  // Make Td
  const makeTd = document.createElement('td');
  makeTd.textContent = car.make;

  // Model Td
  const modelTd = document.createElement('td');
  modelTd.textContent = car.model;

  // Year Td
  const yearTd = document.createElement('td');
  yearTd.textContent = car.year;

  // delete Td
  const deleteTd = document.createElement('td'); // create td for delete button

  // delete button
  const deleteBtn = document.createElement('button');
  deleteBtn.onclick = () => {
    deleteCar(car.id); // delete car tr
  };

  deleteBtn.textContent = 'Delete'; // button text

  deleteTd.appendChild(deleteBtn); // delete button to td

  tr.appendChild(idTd); // tr adds idTd
  tr.appendChild(makeTd); // tr adds makeTd
  tr.appendChild(modelTd); // tr adds modelTd
  tr.appendChild(yearTd); // tr adds yearTd
  tr.appendChild(deleteBtn); // tr deleted

  return tr; // return tr all elements
}

function render(cars) {
  tbody.innerHTML = '';

  for (let i = 0; i < cars.length; i++) {
    const carTr = createCarElement(cars[i]);
    tbody.appendChild(carTr);
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const make = form.make.value;
  const model = form.model.value;
  const year = form.year.value;

  const car = new Car(make, model, year); // create new car objects

  // from reset
  form.reset();

  // car added alert
  alert('Car added!');

  // cars array add car object
  cars.push(car);

  // render cars
  render(cars);
});
