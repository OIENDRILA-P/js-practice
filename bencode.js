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

  for (let i = 0; i < list.length; i++) {
    list[i] = encodeValue(list[i]);
  }
  return list.join("");
}
function spliceApplied(value) {
  let splicedValue = "";
  for (let i = 0; i < value.length - 1; i++) {
    if (value[i] === "[") {
      splicedValue += value[i] + ",";
    }
    else if (value[i] === "]") {
      splicedValue += "," + value[i];
    }
    else {
      splicedValue += value[i];
    }
  }
  return splicedValue + ",]";
}

function encode() {
  const information = userInfo();
  return isNumber(information) ? encodeNumber(information) : 
  isStringOrList(information);
}
encode();
