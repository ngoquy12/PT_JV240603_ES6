const colors = ["Red", "Green", "Blue", "White"];

const [red, green, blue, white, other] = colors;

console.log("Index 0: ", red);
console.log("Index 1: ", green);
console.log("Index 2: ", blue);
console.log("Index 3: ", white);
console.log("Index 4: ", other);

const userInfo = {
  id: 1,
  userName: "David",
  age: 21,
  address: "New York",
  email: "david@gmail.com",
};

// Dùng destructuring để truy xuất key của object
const { id, userName, age, address, email } = userInfo;

console.log("Id: ", id);
console.log("userName: ", userName);
console.log("Age: ", age);
console.log("Address: ", address);
console.log("Email: ", email);
