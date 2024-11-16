// Các cách để khai báo biến: var, let, const

var userName = "Nguyễn Văn A";

// Có thể khai báo lại
var userName = "Nguyễn Văn B";

// Có thể gán lại giá trị
userName = "Nguyễn Văn C";

console.log("UserName: ", userName);

// Có cơ chế hosting
age = 10;
console.log("Age", age);

var age;

// Phạm vi của từ khóa var: => Toàn cục

// let
let address = "Hà Nội, VN";

// Không thể khai báo lại
// let address = "Hà Tĩnh, VN";

// Có thể gán lại giá trị
address = "TP Hồ chí Minh, VN";

console.log("Adress: ", address);

// const
const email = "nva@gmail.com";

// Có thể khai báo lại không? Không
// const email = "nvb@gmail.com";

// Có thể gán lại được giá trị không?
email = "nvb@gmail.com";

console.log("Email: ", email);
