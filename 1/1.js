const { green, yellow, red } = require("colors/safe");
const colors = [green, yellow, red];

const isPrime = (number) => {
  if (number < 2) return false;

  for (let i = 2; i <= number / 2; i++) {
    if (number % i === 0) return false;
  }

  return true;
};

const from = process.argv[2];
const to = process.argv[3];

if (isNaN(from) || isNaN(to)) {
  console.error(red('Ошибка! В введенных параметрах отсутствует число!'));
  process.exit();
}


const getColor = (number, colors) => {
  let i = 0;
  let checkPrime = 0;
  for (let number = from; number <= to; number++) {
    if (isPrime(number)) {
      checkPrime++;
      console.log(colors[i](number));
      i++;
      if (i === 3){
        i = 0;
      }
    }
  }
  if (checkPrime === 0) {
    console.error(red("В последовательности нет простых чисел!!!"));
  }
}


getColor(from, colors);
