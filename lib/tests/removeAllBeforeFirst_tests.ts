import { arraysMatch } from '@writetome51/arrays-match';
import { removeAllBeforeFirst } from '../privy/removeAllBeforeFirst';


let arr = [1, 2, 3, 4, 1, 2, 3, 4, 5, 6, 7, 8];

// Test 1
removeAllBeforeFirst(5, arr);
if (arraysMatch(arr, [5, 6, 7, 8])) console.log('test 1 passed');
else console.log('test 1 FAILED');


// Test 2
arr = [1, 2, 3, 4, 1, 2, 3, 4, 5, 6, 7, 8];
removeAllBeforeFirst(2, arr);
if (arraysMatch(arr, [2, 3, 4, 1, 2, 3, 4, 5, 6, 7, 8])) console.log('test 2 passed');
else console.log('test 2 FAILED');


// Test 3
arr = [1, 2, 3, 4, 1, 2, 3, 4, 5, 6, 7, 8];
removeAllBeforeFirst(4, arr);
if (arraysMatch(arr, [4, 1, 2, 3, 4, 5, 6, 7, 8])) console.log('test 3 passed');
else console.log('test 3 FAILED');


// Test 4
arr = [1, 2, 3, 4, 1, 2, 3, 4, 5, 6, 7, 8, 5, 9, 10, 11];
removeAllBeforeFirst(5, arr);
if (arraysMatch(arr, [5, 6, 7, 8, 5, 9, 10, 11])) console.log('test 4 passed');
else console.log('test 4 FAILED');


// Test 5: should trigger error if item is not in array:
arr = [1, 2, 3, 4, 1, 2, 3, 4];
let errorTriggered = false;
try {
	removeAllBeforeFirst(9, arr);
}
catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 5 passed');
else console.log('test 5 FAILED');


// Test 6: should trigger error if item is not primitive or array:
arr = [1, 2, 3, 4, 1, 2, 3, 4];
errorTriggered = false;
try {
	removeAllBeforeFirst({prop: 1}, arr);
}
catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 6 passed');
else console.log('test 6 FAILED');


// Test 7: should trigger error if there's nothing to remove before specified item,
// (because it's the first item):
arr = [1, 2, 3, 4, 1, 2, 3, 4, 8000];
errorTriggered = false;
try {
	removeAllBeforeFirst(1, arr);
}
catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 7 passed');
else console.log('test 7 FAILED');


// Test 8: should trigger error if second arg is not array:
arr = [1, 2, 3, 4, 1, 2, 3, 4];
errorTriggered = false;
try {
	removeAllBeforeFirst(4, {prop1: 1, prop2: 2});
}
catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 8 passed');
else console.log('test 8 FAILED');