export default function reverseString(string) {
  let reversedArr = [];
  let reversedString = '';
  for (let i = 0; i < string.length; i++) {
    reversedArr.unshift(string[i]);
  }
  reversedArr.forEach((element) => {
    reversedString += element;
  });
  return reversedString;
}

const newString = reverseString('word');
