// Đối với Mảng

const array1 = [1, 2, 3, 4, 5, 6];

const [firstNumber, secondNumber, ...rest] = array1;

console.log("FirstNumber: ", firstNumber);
console.log("SecondNumber: ", secondNumber);
console.log("Rest: ", rest);

const sum = (...restParam) => {
  let sum = 0;
  for (let i = 0; i < restParam.length; i++) {
    sum += restParam[i];
  }
  return sum;
};

console.log("Sum: ", sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

// Đối với Object
const userInfo = {
  id: 1,
  name: "Nguyễn Văn A",
  age: 21,
  address: "Hà Nội",
};

const { id, ...restParameter } = userInfo;

console.log("id: ", id);
console.log("restParameter: ", restParameter);
