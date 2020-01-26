import { SortAnnagram } from '../src/exo/ex15';
import { isUniquecharacters } from '../src/exo/ex01';
import { reverseString } from '../src/exo/ex02';
import { anagrams } from '../src/exo/ex03';
import { MergeAndSort } from '../src/exo/ex14';
import { Graph } from '../src/exo/ex16';

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
        expect(anagrams('paris', 'rispa')).toEqual(true);
    });
    test('Index', () => {
        expect(anagrams('paris', 'rispas')).toEqual(false);
    });
    test('Index', () => {
        expect(anagrams('Police', 'Picole')).toEqual(true);
    });
});
describe('Exo14', () => {
    test('Index', () => {
        expect(MergeAndSort([1, -1, 2, 5, 8], [9, 0, 22, 35, 3])).toEqual([-1, 0, 1, 2, 3, 5, 8, 9, 22, 35]);
    });
});
describe('Exo15', () => {
    test('Index', () => {

        expect(SortAnnagram(['ogd', 'dog', 'bac', 'abc', 'cab', 'man'])).toEqual(['abc', 'bac', 'cab', 'dog', 'man', 'ogd']);
    });
});
describe('Exo16', () => {
    let g = new Graph<number>();
    g.addNodeFromArray([1, 2, 4, 5, 6, 7, 8, 10, 13, 42]);
    g.addEdge(1, 2);
    g.addEdge(1, 13);
    g.addEdge(1, 6);
    g.addEdge(1, 7);
    g.addEdge(1, 5);
    g.addEdge(2, 4);
    g.addEdge(5, 10);
    g.addEdge(5, 8);
    g.addEdge(4, 8);
    g.addEdge(8, 42);
    g.dump();

    test('Index', () => {

        expect(SortAnnagram(['ogd', 'dog', 'bac', 'abc', 'cab', 'man'])).toEqual(['abc', 'bac', 'cab', 'dog', 'man', 'ogd']);
    });
});
