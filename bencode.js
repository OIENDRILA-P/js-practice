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
function encodeList(value) {
  let list = spliceApplied(value).split(",");
  for (let i = 0; i < list.length; i++) {
    if (isNumber(parseInt(list[i]))) {
      list[i] = encodeNumber(list[i]);
    }
    else if (list[i] === "[") {
      list[i] = "l";
    }
    else if (list[i] === "]") {
      list[i] = "e";
    }
    else if (!isNumber(parseInt(list[i]))) {
      list[i] = encodeString(list[i]);
    }
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
  for (let i = 0; i < information.length; i++) {
    if (!isNumber(parseInt(information[i]))) {
      return isStringOrList(information);
    }
  }
  return encodeNumber(information)
}
encode();
