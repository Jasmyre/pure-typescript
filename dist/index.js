import { array, det, inv } from "vectorious";
const matrixA = array([
    [1, 0, -3],
    [2, -2, 1],
    [0, -1, 3],
]);
const matrixADet = det(matrixA);
if (matrixADet != 0) {
    const matrixAInverse = inv(matrixA);
    console.table(matrixAInverse.toArray());
}
const a = array([
    [1, 2, 3],
    [2, 4, 6],
    [3, 6, 9],
]);
// const a = array([
// 	[1, 0, 3],
// 	[2, -2, 1],
// 	[0, -1, 3],
// ]);
const b = array([
    [-5, 3, -6],
    [-6, 3, -7],
    [-2, 1, -2],
]);
const c = a.multiply(b);
console.log(a);
console.log(b);
console.table(c.toArray());
