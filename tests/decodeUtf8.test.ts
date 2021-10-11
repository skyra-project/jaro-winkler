import { decodeUtf8 } from '../src';

describe('decodeUtf8', () => {
	test('GIVEN Skyra in UTF-8 THEN returns Array of Skyra', () => {
		expect(decodeUtf8('\u0053\u006B\u0079\u0072\u0061')).toEqual(['S', 'k', 'y', 'r', 'a']);
	});

	test('GIVEN Skyra String Array in UTF-8 THEN returns Array of Skyra', () => {
		expect(decodeUtf8(['\u0053', '\u006B', '\u0079', '\u0072', '\u0061'])).toEqual(['S', 'k', 'y', 'r', 'a']);
	});
});
