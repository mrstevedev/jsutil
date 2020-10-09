console.log("----// index.js");

import {
  findOne,
  findOneStr,
  findOneFromIndex,
  addNum,
  findType,
  fetchUsers,
  parseUrl,
  isEven,
  accumulateArr,
  reverseStr,
  addMember,
} from "./util.js";

const users = ["Jay", "Amir", "Paige", "Ryan", "Bobby"];
const users2 = [
  { id: 1, name: "Jay", type: "vocalist" },
  { id: 2, name: "Amir", type: "synth guitarist" },
  { id: 3, name: "Paige", type: "bass guitarist" },
  { id: 4, name: "Ryan", type: "rhythm guitarist" },
  { id: 5, name: "Bobby", type: "drums" },
];

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

findOne(users, "Jay");

findOneStr(users, "Jay");

findOneFromIndex(users, 0);

addNum(1, 1);

findType(users2, "vocalist");

fetchUsers("http://jsonplaceholder.typicode.com/users", "Antonette");

parseUrl("http://www.example.com/?username=jaygordon&email=jay@orgymusic.com");

isEven(14);

accumulateArr(arr);

reverseStr("Jay Gordon");

addMember(["Amir Derakh", "Paige Hailey", "Ryan Shuck", 'Bobby Hewitt']);
