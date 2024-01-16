export default function capitalize(string) {
  let subString = string.slice(0, 1);
  let capitalFirstLetter = subString.toUpperCase();
  let finalString = capitalFirstLetter + string.slice(1);
  return finalString;
}
