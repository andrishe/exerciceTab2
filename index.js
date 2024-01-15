const array = [
  ["Toto", 4, 17],
  ["Titi", 11, 12],
  ["Tata", 11, 12],
];

const addMoyen = (arr) => {
  let sum = 0;
  let notes = 0;
  for (let i = 1; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      sum += arr[i];
      notes++;
    }
  }
  let result = sum / notes;
  return result;
};

for (let i = 0; i < array.length; i++) {
  let getNote = addMoyen(array[i]);
  console.log(`Moyenne de ${array[i][0]} : ${getNote}`);
}
