function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

export default function fieldMapGenerator(){
    let arr = [];
let realArr = [];
let random;
for (let i = 0; i < 12; i++) {
  do {
    random = getRandomInt(12) + 1;
  } while (arr.includes(random));
  arr.push(random);
  realArr.push(random % 6);
}
return(realArr);
}