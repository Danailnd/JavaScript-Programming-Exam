function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

export default function fieldMapGenerator(fieldSize){
    let arr = [];
let realArr = [];
let random;
for (let i = 0; i < 12; i++) {
  do {
    random = getRandomInt(fieldSize) + 1;
  } while (arr.includes(random));
  arr.push(random);
  realArr.push(random % (fieldSize/2));
}
return(realArr);
}