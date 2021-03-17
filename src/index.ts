import { Sorter } from './sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

// const numbersCollection = new NumbersCollection([50, 10, 3, -5, 0]);
// const sorter = new Sorter(numbersCollection);
// sorter.sort();
// console.log(numbersCollection.data);
// console.log(sorter.collection);

// const charactersCollection = new CharactersCollection('Greggory');
// const sorter2 = new Sorter(charactersCollection);
// sorter2.sort();
// console.log('This is charactersSorter', sorter2.collection);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);

const sorter = new Sorter(linkedList);
sorter.sort();
linkedList.print();
