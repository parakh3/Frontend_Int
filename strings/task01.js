// spliat a string with comma and semicolon

const splitString = (string) => {
  console.log(string.split(/[,;]/));
};
splitString("apple,banana;mango");
