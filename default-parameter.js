// Trong JS, có 6 giá trị mặc định nhận là false: 0, "", null, undified, false, NaN
const checkAge = (age = 20) => {
  console.log(age);

  if (age > 18) {
    console.log("Đủ tuổi");
  } else {
    console.log("Không đủ tuổi");
  }
};

const createGender = (gender = "Nam") => {
  console.log("Gender: ", gender);
};

createGender("Nữ");
