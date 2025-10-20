import { array, det, inv, multiply } from "vectorious";

const A = array([
	[2, 1, 3],
	[1, 0, 2],
	[4, 1, 8],
]);

const detA = det(A);

console.table(A.toArray());
console.table(detA);

if (detA != 0) {
	const AInv = inv(A);
	console.table(AInv.toArray());

	// check
	console.table(multiply(A, AInv).toArray());
}
