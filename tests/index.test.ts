import { SortAnnagram } from '../src/exo/ex15';
import { isUniquecharacters } from '../src/exo/ex01';
import { reverseString } from '../src/exo/ex02';
import { anagrams } from '../src/exo/ex03';
import { MergeAndSort } from '../src/exo/ex14';

describe('Exo1', () => {
    test('Index', () => {
        expect(isUniquecharacters('ibrahima')).toEqual(false);
    });
    test('Index', () => {
        expect(isUniquecharacters('brams')).toEqual(true);
    });
});
describe('Exo2', () => {
    test('Index', () => {
        expect(reverseString('paris')).toEqual('sirap');
    });
    test('Index', () => {
        expect(reverseString('brams')).toEqual('smarb');
    });
    test('Index', () => {
        expect(reverseString('')).toEqual('');
    });
});
describe('Exo3', () => {
    test('Index', () => {
        expect(anagrams('paris','rispa')).toEqual(true);
    });
    test('Index', () => {
        expect(anagrams('paris','rispas')).toEqual(false);
    });
    test('Index', () => {
        expect(anagrams('Police', 'Picole')).toEqual(true);
    });
});
describe('Exo14', () => {
    test('Index', () => {
        expect(MergeAndSort([1, -1, 2, 5, 8], [9, 0, 22, 35, 3])).toEqual([-1, 0, 1,  2,  3,5, 8, 9, 22, 35]);
    });
});
describe('Exo15', () => {
    test('Index', () => {

        expect(SortAnnagram(['ogd', 'dog', 'bac', 'abc', 'cab', 'man'])).toEqual(['abc', 'bac', 'cab', 'dog', 'man', 'ogd']);
    });
});
