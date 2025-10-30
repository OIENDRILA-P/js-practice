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

function isStringOrList(information) {
  return information.startsWith('[') && information.endsWith(']') ? encodeList(information) :
    encodeString(information);
}

function encodeString(value) {
  return `${value.length}:${value}`;
}

function encodeValue(value) {
  if (isNumber(value)) return encodeNumber(value);
  if (value === "[") return "l";
  if (value === "]") return "e";
  return encodeString(value);
}

function encodeList(value) {
  const list = spliceApplied(value).split(",");
  console.log(list);
  
  for (let i = 0; i < list.length; i++) {
    list[i] = encodeValue(list[i]);
  }
  return list.join("");
}

function handleChar(value) {
if (value === '[') return value + ',';
if (value === ']') return ',' + value;

return value;
}

function spliceApplied(value, index = 0) {
  const char = value[index];

  if (index+1 === value.length) return ",]";

  return handleChar(char) + spliceApplied(value, index + 1);
}

function encode() {
  const information = userInfo();
  return isNumber(information) ? encodeNumber(information) :
    isStringOrList(information);
}
encode();
