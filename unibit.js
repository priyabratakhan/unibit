let arr = [1, 3, 2, 2, -4, -6, -2, 8];
const n = 4;

let bag = [];
for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j <= arr.length; j++) {
    if (arr[i] + arr[j] == n) {
      bag.push([arr[i], arr[j]]);
    }
  }
}
console.log(bag);



// let a = []
// for(let i=0;i<bag.length;i++){
//     for(let j=0;j<2;j++){
//         a.push
//     }
// }
// console.log(a)
// let b = a.sort((a, b) => a - b);
// console.log(b);
