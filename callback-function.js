const getData = (data, callback) => {
  console.log(data);

  callback();
};

const callbackFunc = () => {
  console.log("Callback được gọi");
};

getData("Nguyễn Văn A", callbackFunc);
