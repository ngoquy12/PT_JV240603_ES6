// 3 loại: Declation function, Expression function, Arrown fucntion, Generation function
// function sum(a, b) {
//   const c = a + b;

//   return c;
// }

// Khai báo hàm với arrown function
// const sum = (a, b) => {
//   return a + b;
// };

const sum = (a, b) => a + b;

const mergeInfo = (firstName, lastName) => {
  //   return firstName + " " + lastName;

  return `${firstName} ${lastName}`; // Template string
};

console.log("Sum: ", sum(10, 20));

console.log(mergeInfo("Nguyễn Văn", "A"));

// Arrown function không có arguments
// function count() {
//   console.log(arguments);
// }

const count = () => {
  console.log(arguments);
};

count(10, 20, 30, 40, 50);
