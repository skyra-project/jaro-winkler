/**
 * Checks if `val1` is within `1e-5` of `val2`.
 * @param val1 The value to check
 * @param val2 The value to check against
 */
export function approxEql(val1: number, val2: number) {
	return Math.abs(val1 - val2) < 1e-5;
}
