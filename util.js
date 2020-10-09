console.log("----// JavaScript Utility Functions");

export function findOne(arr, str) {
  return arr.filter((user) => console.log(user.indexOf(str) > -1));
}

export function findOneStr(arr, val) {
  const newArr = arr.filter((el) => el == val);
  return console.log(newArr);
}

export function findOneFromIndex(arr, i) {
  const newArr = arr.filter((val, index, arr) => index === i);
  const newVal = newArr.toString();
  return console.log(newVal);
}

export function addNum(num1, num2) {
  return console.log(num1 + num2);
}

export function findType(arr, type) {
  const newObj = arr.find((member) => member.type === type);
  return console.log(newObj);
}

export async function fetchUsers(url, username) {
  const res = await fetch(url);
  const tr = await res.json();
  const data = await tr;
  // find() Returns the object from the array
  const newObj = data.find((user) => user.username === username);
  return console.log(newObj);
}

export function parseUrl(url) {
  const newUrl = new URL(url);
  console.log(newUrl);
  const qs = newUrl.search.substr(1); // => 'message=hello&who=world'
  const newObj = JSON.parse(
    '{"' +
      decodeURI(qs)
        .replace(/"/g, '\\"')
        .replace(/&/g, '","')
        .replace(/=/g, '":"') +
      '"}'
  );
  return console.log(newObj);
}

export function isEven(num) {
  const even = num % 2 === 0 ? `${num} is an even number` : `${num} is not an even number`;
  return console.log(even);
}

export function accumulateArr(arr) {
  const newVal = arr.reduce((prev, curr) => curr + prev);
  return console.log(newVal);
}

export function reverseStr(str) {
  const newStr = str.split(" ").reverse().join(" ");
  return console.log(newStr);
}

export function addMember(str) {
    const memberArr = [];
    memberArr.push(str);
    return console.log(memberArr[0]);
}
