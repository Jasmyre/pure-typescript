import { array, det, inv } from "vectorious";
const a = array([
    [1, 0, -3],
    [2, -2, 1],
    [0, -1, 3],
]);
const detA = det(a);
if (detA !== 0) {
    const aInv = inv(a);
    console.table(aInv.toArray());
}
