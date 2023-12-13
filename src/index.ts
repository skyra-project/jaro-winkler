export type CharArray = readonly string[];
export type CharArrayResolvable = string | CharArray;

export function decodeUtf8(str: CharArrayResolvable): CharArray {
	return typeof str === 'string' ? [...str] : str;
}

/**
 * Calculate the Jaro-Winkler distance between two words.
 * @param stringCompare The string to compare
 * @param stringCompareWith The string to compare with
 */
export function jaroWinkler(stringCompare: CharArrayResolvable, stringCompareWith: CharArrayResolvable) {
	const a1 = decodeUtf8(stringCompare);
	const a2 = decodeUtf8(stringCompareWith);

	const l1 = a1.length;
	const l2 = a2.length;

	// We use Uint8Array here because they are the most compact packed arrays,
	// and they initialize with 0's, which in this function equal to `false`:
	const matches1 = new Uint8Array(l1);
	const matches2 = new Uint8Array(l2);

	const matches = getMatching(a1, a2, matches1, matches2);
	if (matches <= 0) return 0;

	// Calculate the Jaro distance:
	const transpositions = getTranspositions(a1, a2, matches1, matches2);
	const similarity = (matches / l1 + matches / l2 + (matches - transpositions) / matches) / 3;

	// Transform to Jaro-Winkler:
	// Prefix scale gives more favorable ratings to strings that share common prefixes:
	const prefixScale = 0.1;
	const prefix = getPrefix(a1, a2);
	return similarity + prefix * prefixScale * (1 - similarity);
}

function getMatching(a1: CharArray, a2: CharArray, matches1: Uint8Array, matches2: Uint8Array) {
	const matchWindow = Math.floor(Math.max(a1.length, a2.length) / 2);

	let matches = 0;
	let index1 = 0;
	let index2 = 0;

	// Loop to find matched characters:
	for (index1 = 0; index1 < a1.length; index1++) {
		// Use the higher of the window diff and the min of the window and string 2 length:
		const start = Math.max(0, index1 - matchWindow);
		const end = Math.min(index1 + matchWindow + 1, a2.length);

		// Iterate second string index:
		for (index2 = start; index2 < end; index2++) {
			// If second string character already matched, skip:
			if (matches2[index2]) {
				continue;
			}

			// If the characters don't match, skip:
			if (a1[index1] !== a2[index2]) {
				continue;
			}

			// Assume match if the above 2 checks don't continue:
			matches1[index1] = 1;
			matches2[index2] = 1;

			// Add matches by 1, break inner loop:
			++matches;
			break;
		}
	}

	return matches;
}

/**
 * Calculate the number of transpositions between the two words
 * @param a1 The first string to compare
 * @param a2 The second string to compare
 */
function getTranspositions(a1: CharArray, a2: CharArray, matches1: Uint8Array, matches2: Uint8Array) {
	let transpositions = 0;

	// Loop to find transpositions:
	for (let i1 = 0, i2 = 0; i1 < a1.length; i1++) {
		// If a non-matching character was found, skip:
		if (matches1[i1] === 0) continue;

		// Move i2 index to the next match:
		while (i2 < matches2.length && matches2[i2] === 0) i2++;

		// If the characters don't match, increase transposition:
		if (a1[i1] !== a2[i2]) transpositions++;

		// Iterate i2 index normally:
		i2++;
	}

	return Math.floor(transpositions / 2);
}

/**
 * Counts the number of common characters at the beginning
 * of each word up to a maximum of 4
 * @param a1 The first string to compare
 * @param a2 The second string to compare
 */
function getPrefix(a1: CharArray, a2: CharArray) {
	const prefixLimit = 4;
	let p = 0;

	for (; p < prefixLimit; p++) {
		if (a1[p] !== a2[p]) return p;
	}

	return ++p;
}
