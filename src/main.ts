import { isUniquecharacters } from './exo/ex01';
import { reverseString } from './exo/ex02';
import { anagrams } from './exo/ex03';
import { LinkedList, LinkedListItem } from './exo/ex04';

isUniquecharacters('ibrahima'); // false
isUniquecharacters('brams'); // true
reverseString('paris'); // aimamam
anagrams('Police', 'Picole'); // true
const head = new LinkedListItem(4);
const linkedList = new LinkedList(head);

linkedList.appendToTail(10);
linkedList.appendToTail(2);
linkedList.appendToTail(20);
linkedList.appendToTail(5);
console.log(linkedList.showList()); // [ 4, 10, 2, 20, 5 ]
linkedList.deleteNode(0);
console.log(linkedList.showList()); // [ 10, 2, 20, 5 ]
linkedList.deleteNode(1);

