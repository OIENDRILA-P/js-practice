function userInfo() {
  const information = prompt("Enter any information:");
  return information;
}
function isNumber(value) {
  return !isNaN(value);
}
function encodeNumber(value) {
  return `i${value}e`;
}
function isStringOrList(value, information) {
  return value === '[' ? encodeList(information) : encodeString(information);
}
function encodeString(value) {
  return `${value.length}:${value}`;
}
function spliceList(value) {
  let a = value.split("");
  a.splice(1, 0, " ");
  a.splice(a.length - 1, 0, " ");
  return a.join("");
}
function spliceApplied(value) {
  const isList = value.startsWith('[') && value.endsWith(']');
  return (isList && `[ ${spliceApplied(value.slice(1, -1))} ]`) || spliceList(value);
}

function encode() {
  const information = userInfo();
  for (let i = 0; i < information.length; i++) {
    if (!isNumber(parseInt(information[i]))) {
      return isStringOrList(information[i], information);
    }
  }
  return encodeNumber(information)
}
console.log(encode());
