const arr1 = [1, 2, 3, 4];

const arr2 = [5, 6, 7, 8];

const arr3 = [...arr1, ...arr2];

console.log("Array3: ", arr3);

const userInfo = {
  id: 1,
  name: "Nguyễn Văn A",
  age: 21,
};

// Để mở rộng được object, trước hết phải giữ lại được các thông tin cũ
const newUserInfo = { ...userInfo, address: "Hà Nội", email: "nva@gmail.com" };

console.log("UserInfo: ", userInfo);
console.log("New UserInfo: ", newUserInfo);

// Đối với hàm
const sum = (a, b, c) => {
  return a + b + c;
};

const arr4 = [2, 3, 4];

console.log(...arr4);

console.log(sum(...arr4));
