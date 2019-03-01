"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var arrays_match_1 = require("@writetome51/arrays-match");
var removeAllBeforeLast_1 = require("../privy/removeAllBeforeLast");
var arr = [1, 2, 3, 4, 1, 2, 3, 4, 5, 6, 7, 8];
// Test 1
removeAllBeforeLast_1.removeAllBeforeLast(1, arr);
if (arrays_match_1.arraysMatch(arr, [1, 2, 3, 4, 5, 6, 7, 8]))
    console.log('test 1 passed');
else
    console.log('test 1 FAILED');
// Test 2
arr = [1, 2, 3, 4, 1, 2, 3, 4, 5, 6, 7, 8, 2, 400];
removeAllBeforeLast_1.removeAllBeforeLast(2, arr);
if (arrays_match_1.arraysMatch(arr, [2, 400]))
    console.log('test 2 passed');
else
    console.log('test 2 FAILED');
// Test 3
arr = [1, 2, 3, 4, 1, 2, 3, 4, 5, 6, 7, 8];
removeAllBeforeLast_1.removeAllBeforeLast(4, arr);
if (arrays_match_1.arraysMatch(arr, [4, 5, 6, 7, 8]))
    console.log('test 3 passed');
else
    console.log('test 3 FAILED');
// Test 4
arr = [1, 2, 3, 5, 1, [1, 2], 3, 4, 5, 6, 7, 8, 5, 6, 5, 4, [1, 2], 2];
removeAllBeforeLast_1.removeAllBeforeLast([1, 2], arr);
if (arrays_match_1.arraysMatch(arr, [[1, 2], 2]))
    console.log('test 4 passed');
else
    console.log('test 4 FAILED');
// Test 5: should trigger error if item is not in array:
arr = [1, 2, 3, 4, 1, 2, 3, 4];
var errorTriggered = false;
try {
    removeAllBeforeLast_1.removeAllBeforeLast(9, arr);
}
catch (e) {
    errorTriggered = true;
}
if (errorTriggered)
    console.log('test 5 passed');
else
    console.log('test 5 FAILED');
// Test 6: should trigger error if item is not primitive or array:
arr = [1, 2, 3, 4, 1, 2, 3, 4];
errorTriggered = false;
try {
    removeAllBeforeLast_1.removeAllBeforeLast({ prop: 1 }, arr);
}
catch (e) {
    errorTriggered = true;
}
if (errorTriggered)
    console.log('test 6 passed');
else
    console.log('test 6 FAILED');
// Test 7: should trigger error if there's nothing to remove before specified item,
// (because it's the first item):
arr = [8000, 1, 2, 3, 4, 1, 2, 3, 4];
errorTriggered = false;
try {
    removeAllBeforeLast_1.removeAllBeforeLast(8000, arr);
}
catch (e) {
    errorTriggered = true;
}
if (errorTriggered)
    console.log('test 7 passed');
else
    console.log('test 7 FAILED');
// Test 8: should trigger error if second arg is not array:
arr = [1, 2, 3, 4, 1, 2, 3, 4];
errorTriggered = false;
try {
    removeAllBeforeLast_1.removeAllBeforeLast(1, { prop1: 1, prop2: 2 });
}
catch (e) {
    errorTriggered = true;
}
if (errorTriggered)
    console.log('test 8 passed');
else
    console.log('test 8 FAILED');
