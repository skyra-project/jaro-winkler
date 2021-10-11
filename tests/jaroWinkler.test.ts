import { jaroWinkler } from '../src';
import { approxEql } from './util';

describe('jaro-winkler', () => {
	test('should evaluate string similarity', () => {
		expect(approxEql(jaroWinkler('DIXON', 'DICKSONX'), 0.81333)).toBe(true);
		expect(approxEql(jaroWinkler('DWAYNE', 'DUANE'), 0.84)).toBe(true);
	});

	test('should handle exact matches', () => {
		expect(jaroWinkler('RICK', 'RICK')).toBe(1);
		expect(jaroWinkler('abc', 'abc')).toBe(1);
		expect(jaroWinkler('abcd', 'abcd')).toBe(1);
		expect(jaroWinkler('seddon', 'seddon')).toBe(1);
	});

	test('should handle total mis-matches', () => {
		expect(jaroWinkler('NOT', 'SAME')).toBe(0);
	});

	test('should handle partial mis-matches', () => {
		expect(approxEql(jaroWinkler('aaa', 'abcd'), 0.575)).toBe(true);
	});

	test('should handle transpositions', () => {
		expect(approxEql(jaroWinkler('MARTHA', 'MARHTA'), 0.96111)).toBe(true);
	});

	test('should handle transpositions regardless of string order', () => {
		expect(approxEql(jaroWinkler('class', 'clams'), 0.90666)).toBe(true);
		expect(approxEql(jaroWinkler('clams', 'class'), 0.90666)).toBe(true);
	});
});
